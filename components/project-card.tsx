import type React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { FaReact, FaVuejs, FaAngular, FaSass } from "react-icons/fa"
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiSvelte,
  SiFirebase,
} from "react-icons/si"

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  links: { github?: string; live?: string }
  screenshot: string
}

const techIcons: { [key: string]: React.ElementType } = {
  react: FaReact,
  nextjs: SiNextdotjs,
  vue: FaVuejs,
  nuxtjs: SiNuxtdotjs,
  angular: FaAngular,
  tailwindcss: SiTailwindcss,
  sass: FaSass,
  typescript: SiTypescript,
  bootstrap: SiBootstrap,
  svelte: SiSvelte,
  firebase: SiFirebase,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, links, screenshot }) => {
  const handleClick = () => {
    if (links.live) {
      window.open(links.live, "_blank", "noopener,noreferrer")
    } else if (links.github) {
      window.open(links.github, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg aspect-video cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
    >
      <Image
        src={screenshot || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out"
      />
      {/* Always visible title overlay */}
      <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {/* Hover content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-4 bg-black/40"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-2">
          <p className="text-sm text-white/80">{description}</p>
          <div className="flex space-x-2">
            {techStack.map((tech, index) => {
              const IconComponent = techIcons[tech.toLowerCase()]
              return IconComponent ? (
                <div key={index} className="text-white">
                  <IconComponent size={24} />
                </div>
              ) : null
            })}
          </div>
          {links.github && (
            <motion.a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard

