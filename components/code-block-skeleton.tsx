"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CodeBlock } from "./code-block"

export function CodeBlockSkeleton() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
    }
  }

  const emptyCode = ``

  const filledCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`

  return (
    <div className="group relative" onMouseEnter={handleInteraction} onClick={handleInteraction}>
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
            <div className="relative w-full overflow-hidden rounded-lg border border-neutral-800 bg-slate-900 p-4">
              <CodeBlock
                language="javascript"
                filename="example.js"
                code={emptyCode}
                customStyle={{ height: "200px", overflow: "auto" }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">Having trouble coding?</h3>
              <p className="text-sm text-neutral-400 mt-1">
                {isMobile ? "Tap me, I got a solution for you" : "Hover me, I got a solution for you"}
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
            <div className="relative w-full overflow-hidden rounded-lg border border-emerald-500/30 bg-slate-900 p-4">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/20" />
              <div className="absolute -bottom-20 -left-20 -right-20 h-40 bg-emerald-500/10 blur-3xl" />

              {/* Content */}
              <div className="relative">
                <CodeBlock
                  language="javascript"
                  filename="example.js"
                  code={filledCode}
                  customStyle={{ height: "200px", overflow: "auto" }}
                />
              </div>
            </div>

            {/* Text below code block */}
            <div className="mt-4">
              <motion.h3
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-lg font-semibold text-white"
              >
                Don&apos;t worry, I&apos;ll do it in a jiffy!!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-sm text-neutral-400 mt-1"
              >
                Hire me and forget all your worries!!
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

