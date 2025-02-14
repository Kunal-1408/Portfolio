"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function TerminalSkeleton() {
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleMouseEnter = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  return (
    <div
      className="group relative w-full"
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
            className="relative w-full"
          >
            <div className="relative w-full overflow-hidden rounded-lg border border-neutral-800 bg-black p-3 md:p-4">
              <div className="space-y-3">
                <div className="space-y-2">
                  <motion.div className="h-2 md:h-3 w-3/4 rounded-full bg-neutral-800 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-neutral-700"
                      animate={{
                        x: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                  <motion.div className="h-2 md:h-3 w-1/2 rounded-full bg-neutral-800 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-neutral-700"
                      animate={{
                        x: ["0%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: 0.2,
                      }}
                    />
                  </motion.div>
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <span className="font-mono text-xs md:text-sm text-neutral-400">{">"}</span>
                  <motion.span
                    className="font-mono text-xs md:text-sm text-neutral-400"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    npm run dev
                  </motion.span>
                  <span className="animate-pulse font-mono text-xs md:text-sm text-neutral-400">▍</span>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-1.5">
              <h3 className="text-base md:text-xl font-semibold text-white">Tired of waiting to compile?</h3>
              <p className="text-xs md:text-sm text-neutral-500">
                {window.innerWidth < 768 ? "Tap to see the magic" : "Hover to see the magic"}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="activated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full"
          >
            <div className="relative w-full overflow-hidden rounded-lg border border-emerald-500/30 bg-black p-4">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/20" />
              <div className="absolute -bottom-20 -left-20 -right-20 h-40 bg-emerald-500/10 blur-3xl" />

              {/* Content */}
              <div className="relative space-y-3">
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded-full bg-neutral-800" />
                  <div className="h-3 w-1/2 rounded-full bg-neutral-800" />
                </div>

                <div className="pt-2">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="font-mono text-sm text-emerald-500"
                  >
                    Ready in 96ms
                  </motion.span>
                </div>
              </div>
            </div>

            {/* Text below terminal */}
            <div className="mt-4 space-y-1.5">
              <motion.h3
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-xl font-semibold text-white"
              >
                Lightning fast products
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-sm text-neutral-400"
              >
                Leveraging the power of{"\n"}
                blazing fast state of the art frameworks such as Next.js
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

