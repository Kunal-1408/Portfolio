"use client"
import { useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"
import ConnectForm from "@/components/ui/connect"

export default function GoogleGeminiEffectDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [pathLengths, setPathLengths] = useState([0, 0, 0, 0, 0])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    let startTime: number | null = null
    const animationDuration = 2000 // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsedTime = timestamp - startTime
      const progress = Math.min(elapsedTime / animationDuration, 1)

      setPathLengths([
        Math.min(progress * 1.2, 1.2),
        Math.min(progress * 1.15, 1.15),
        Math.min(progress * 1.1, 1.1),
        Math.min(progress * 1.05, 1.05),
        Math.min(progress, 1),
      ])

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    if (isInView) {
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setPathLengths([0, 0, 0, 0, 0])
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInView])

  return (
    <div
      className="min-h-[100vh] bg-transparent w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 items-center justify-center flex translate-y-[-16rem] ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
          Let&apos;s Connect
        </h1>
      </div>
      <div className="absolute inset-0">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center translate-y-16">
        <ConnectForm />
      </div>
    </div>
  )
}

