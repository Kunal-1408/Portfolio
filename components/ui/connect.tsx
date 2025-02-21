"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlowingEffect } from "./glowing-effect"
import FormSubmissionSuccess from "./confirmation"

export default function ConnectForm() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  if (showConfirmation) {
    return <FormSubmissionSuccess />
  }

  return (
    <div className="bg-zinc-800/60 backdrop-blur-sm p-12 rounded-2xl w-full max-w-md">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative">
          <label className="block text-zinc-400 text-sm mb-2">Name</label>
          <div className="relative">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Input
              type="text"
              placeholder="Your good name my lord."
              className="w-full bg-black/40 text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-zinc-400 text-sm mb-2">Email</label>
          <div className="relative">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Input
              type="email"
              placeholder="your humble domain"
              className="w-full bg-black/25 text-white placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-zinc-400 text-sm mb-2">Message</label>
          <div className="relative">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Textarea
              placeholder="Your wish is my command"
              className="w-full bg-black/30 text-white placeholder-gray-500 min-h-[150px]"
              required
            />
          </div>
        </div>

        <motion.button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full group/submit-btn overflow-hidden relative"
          whileHover="hover"
          initial="initial"
          animate="animate"
        >
          <motion.span
            className="inline-block w-full text-center"
            variants={{
              initial: { x: 0 },
              hover: { x: "100%" },
            }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.span>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              initial: { x: "-100%" },
              hover: { x: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            🚀
          </motion.div>
        </motion.button>
      </form>
    </div>
  )
}

