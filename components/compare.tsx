"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowLeftRight } from "lucide-react"

interface CompareProps {
  firstImage?: string
  secondImage?: string
  className?: string
  firstImageClassName?: string
  secondImageClassname?: string
  initialSliderPercentage?: number
  slideMode?: "hover" | "drag"
  showHandlebar?: boolean
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "drag",
  showHandlebar = true,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return
      if (isDragging) {
        const rect = sliderRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const percent = (x / rect.width) * 100
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)))
        })
      }
    },
    [isDragging],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      handleMove(e.clientX)
    },
    [handleMove],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => handleMove(e.clientX), [handleMove])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      handleMove(e.touches[0].clientX)
    },
    [handleMove],
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => handleMove(e.touches[0].clientX), [handleMove])

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={sliderRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-[4px] absolute top-0 m-auto z-30 bg-[#00A3FF]"
          style={{
            left: `${sliderXPercent}%`,
          }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div
              className="h-10 w-10 rounded-full bg-[#00A3FF] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 flex items-center justify-center shadow-lg"
              style={{
                boxShadow: "0 0 20px rgba(0, 163, 255, 0.5)",
              }}
            >
              <ArrowLeftRight className="h-5 w-5 text-white" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage && (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName,
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}
            >
              <img
                alt="first image"
                src={firstImage || "/placeholder.svg"}
                className={cn(
                  "absolute inset-0 z-20 flex-shrink-0 w-full h-full select-none object-cover",
                  firstImageClassName,
                )}
                draggable={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false}>
        {secondImage && (
          <motion.img
            className={cn("absolute top-0 left-0 z-[19] w-full h-full select-none object-cover", secondImageClassname)}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

