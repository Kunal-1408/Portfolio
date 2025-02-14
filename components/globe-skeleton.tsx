"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import createGlobe from "cobe"
import { Map } from "lucide-react"

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(600)

  useEffect(() => {
    const updateSize = () => {
      // Make globe smaller on mobile
      setWidth(window.innerWidth < 768 ? 400 : 600)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [width])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: width,
        height: width,
        maxWidth: "100%",
        aspectRatio: 1,
      }}
      className={className}
    />
  )
}

export function GlobeSkeleton() {
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleMouseEnter = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  return (
    <div
      className="group relative h-full"
      onMouseEnter={handleMouseEnter}
      onClick={() => setHasInteracted(true)} // Add touch support for mobile
    >
      <AnimatePresence initial={false} mode="wait">
        {!hasInteracted ? (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative h-full flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-neutral-800 bg-black p-4 flex flex-col items-center justify-center">
              <Map className="w-16 md:w-24 h-16 md:h-24 text-neutral-700" />
              <div className="mt-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white">Heard you like 3D?</h3>
                <p className="text-xs md:text-sm text-neutral-400 mt-1">
                  {window.innerWidth < 768 ? "Tap to find out" : "Hover to find out"}
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="activated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative h-full"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg border border-emerald-500/30 bg-black p-4">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/20" />
              <div className="absolute -bottom-20 -left-20 -right-20 h-40 bg-emerald-500/10 blur-3xl" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center">
                <div className="text-center mb-2">
                  <motion.h3
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-base md:text-lg font-semibold text-white"
                  >
                    No problem 😊
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-xs md:text-sm text-neutral-400 mt-1 px-2"
                  >
                    Well versed different libraries and languages I can do it all for you😘
                  </motion.p>
                </div>
                <div className="flex-1 relative w-full">
                  <Globe className="absolute left-1/2 -translate-x-1/2 scale-125 md:scale-150" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

