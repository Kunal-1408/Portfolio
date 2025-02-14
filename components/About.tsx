/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function AboutMeSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: (i: number) => ({
      rotate: (i - 1) * 3,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20"
    >
  
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div variants={textVariants} className="order-2 md:order-1">
          <div className="space-y-6 text-lg text-neutral-300">
            <p>
              Hello! I&apos;m <span className="text-neutral-100 font-bold">Kunal Srivastava</span>, a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences.
            </p>
            <p>
              With over a year of experience in full-stack development, I specialize in React, Node.js, and modern web
              technologies. I&apos;m always excited to take on new challenges and push the boundaries of what&apos;s possible on
              the web.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring nature trails, experimenting with new recipes in the
              kitchen, or contributing to open-source projects. I believe in continuous learning and strive to stay
              updated with the latest trends in web development.
            </p>
          </div>
        </motion.div>
        <motion.div variants={imageVariants} className="order-1 md:order-2">
          <div className="relative h-96 w-full md:h-[500px]">
            {[3, 2, 1].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-700 to-zinc-600 shadow-lg"
                style={{
                  transformOrigin: "center bottom",
                  zIndex: i,
                }}
              ></motion.div>
            ))}
            <motion.div
              variants={cardVariants}
              custom={3}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
              style={{
                transformOrigin: "center bottom",
                zIndex: 4,
              }}
            >
              <Image
                src="/profile.webp"
                alt="Profile Picture"
                fill
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

