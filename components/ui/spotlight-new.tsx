"use client"
import { motion } from "motion/react"

type SpotlightProps = {
  gradientFirst?: string
  gradientSecond?: string
  gradientThird?: string
  translateY?: number
  width?: number
  height?: number
  smallWidth?: number
  duration?: number
  xOffset?: number
}

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 50% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .05) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .12) 0, hsla(210, 100%, 55%, .05) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 45%, .05) 80%, transparent 100%)",
  translateY = -350,
  width = 700,
  height = 1600,
  smallWidth = 300,
  duration = 7,
  xOffset = 120,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full z-20"
    >
      {/*
        1) A single "anchor" container at the top center.
        2) We set width & height to 0 so its top-left corner
           is effectively a single point (the origin).
      */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: 0,
          left: "30%",
          transform: "translateX(-50%)",
          width: 0,
          height: 0,
        }}
      >
        {/* LEFT Spotlight Group */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top center",
          }}
          animate={{ x: [0, xOffset, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute top-0 left-0"
            style={{
              transform: `translateY(${translateY}px) rotate(-45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
          />
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              transform: "rotate(-45deg) translate(5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
          />
          <div
            className="absolute top-0 left-0 origin-top-left"
            style={{
              transform: "rotate(-45deg) translate(-180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
          />
        </motion.div>

        {/* RIGHT Spotlight Group */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transformOrigin: "top center",
          }}
          animate={{ x: [0, -xOffset, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute top-0 left-0"
            style={{
              transform: `translateY(${translateY}px) rotate(45deg)`,
              background: gradientFirst,
              width: `${width}px`,
              height: `${height}px`,
            }}
          />
          <div
            className="absolute top-0 left-0 origin-top-right"
            style={{
              transform: "rotate(45deg) translate(-5%, -50%)",
              background: gradientSecond,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
          />
          <div
            className="absolute top-0 left-0 origin-top-right"
            style={{
              transform: "rotate(45deg) translate(180%, -70%)",
              background: gradientThird,
              width: `${smallWidth}px`,
              height: `${height}px`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
