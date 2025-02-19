"use client"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { TerminalSkeleton } from "./terminal-skeleton"
import { CodeBlockSkeleton } from "./code-block-skeleton"
import { ThemeCompare } from "./theme-compare"
import { GlobeSkeleton } from "./globe-skeleton"

export default function GlowingEffectDemoSecond() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-0">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
          Redefining your web dev experience
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400">No fuss just Work ⚡✨</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[800px] md:h-[800px]">
        <div className="relative rounded-2xl border p-4 md:p-6 bg-neutral-950 flex flex-col items-center justify-center h-[400px] md:h-full">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <TerminalSkeleton />
        </div>

        <div className="relative col-span-1 md:col-span-2 rounded-2xl border p-4 md:p-6 bg-neutral-950 flex flex-col h-[400px] md:h-full">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="flex-grow overflow-hidden">
            <CodeBlockSkeleton />
          </div>
        </div>

        <div className="relative col-span-1 md:col-span-2 rounded-2xl border p-4 md:p-6 bg-neutral-950 h-[400px] md:h-full">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <ThemeCompare />
        </div>

        <div className="relative rounded-2xl border p-4 md:p-6 bg-neutral-950 h-[400px] md:h-full">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <GlobeSkeleton />
        </div>
      </div>
    </div>
  )
}

