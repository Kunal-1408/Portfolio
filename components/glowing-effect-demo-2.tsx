"use client"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { TerminalSkeleton } from "./terminal-skeleton"
import { CodeBlockSkeleton } from "./code-block-skeleton"
import { ThemeCompare } from "./theme-compare"
import { GlobeSkeleton } from "./globe-skeleton"

export default function GlowingEffectDemoSecond() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto min-h-[800px] md:h-[800px] p-4 md:p-0">
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
  )
}

