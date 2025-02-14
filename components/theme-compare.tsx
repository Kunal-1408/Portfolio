"use client"

import { Compare } from "./compare"

export function ThemeCompare() {
  return (
    <div className="relative h-full flex flex-col">
      <div className="relative flex-grow w-full overflow-hidden rounded-lg border border-emerald-500/30 bg-black">
        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-emerald-500/20" />
        <div className="absolute -bottom-20 -left-20 -right-20 h-40 bg-emerald-500/10 blur-3xl" />

        <div className="relative h-full">
          <Compare
            firstImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MMR4zZBVvkW9EL7Vr9AW1NhMf15wuj.png"
            secondImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M6toYFTwDDY9eSiwFfaxavBieapFSw.png"
            className="w-full h-full"
            initialSliderPercentage={50}
            slideMode="drag"
            showHandlebar={true}
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-white">Craft experiences that delight</h3>
        <p className="text-sm text-neutral-400 mt-1">If you&apos;re not a fan of burning your retinas, then I am your guy</p>
      </div>
    </div>
  )
}

