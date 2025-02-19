"use client"
import { useEffect, useRef } from "react"
import { Spotlight } from "@/components/ui/spotlight-new"
import ProjectCard from "@/components/project-card"
import { motion, useInView, useAnimation, type Variants } from "framer-motion"

const projects = [
  {
    title: "Marketing Agency Website",
    description: "Modern dark-themed website with 3D globe visualization",
    techStack: ["react", "nextjs", "tailwindcss"],
    links: { github: "https://github.com/project1", live: "https://project1.com" },
    screenshot: "/untitled.png",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    techStack: ["vue", "nuxtjs", "sass"],
    links: { github: "https://github.com/project2" },
    screenshot: "/untitled.png",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    techStack: ["angular", "typescript", "bootstrap"],
    links: { live: "https://project3.com" },
    screenshot: "/untitled.png",
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4",
    techStack: ["svelte", "tailwindcss", "firebase"],
    links: { github: "https://github.com/project4", live: "https://project4.com" },
    screenshot: "/untitled.png",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const cardVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
}

export default function SpotlightNewDemo() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <div className="min-h-screen w-full rounded-md flex flex-col items-center justify-start bg-transparent antialiased relative overflow-hidden">
      <div className="relative w-full h-full">
        <Spotlight />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0"
        >
          <motion.h1
            variants={headingVariants}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-8"
          >
            My Projects
          </motion.h1>
          <motion.p
            variants={headingVariants}
            className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-12"
          >
            Explore my latest projects showcasing various technologies and design patterns.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} custom={index} variants={cardVariants} initial="hidden" animate={controls}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
