"use client"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlowingEffect } from "./glowing-effect"

export default function ConnectForm() {
  return (
    <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
        Let&apos;s connect
      </h2>
      <form className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your good name my lord.😊"
            className="w-full bg-black/40 text-white placeholder-gray-500"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="your humble domain"
            className="w-full bg-black/25 text-white placeholder-gray-500"
          />
        </div>
        <div>
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
            className="w-full bg-black/30 text-white placeholder-gray-500 min-h-[100px]"
          />
        </div>
        <motion.button
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

