"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Logo {
  id: string
  src: string
  alt: string
  color: string
}

export default function FrameworkGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const logos: Logo[] = [
    {
      id: "astro",
      src: "/node.svg",
      alt: "Lightning bolt",
      color: "#a3ff33",
    },
    {
      id: "react",
      src: "/react.svg",
      alt: "React",
      color: "#61dafb",
    },
    {
      id: "angular",
      src: "/python.svg",
      alt: "Angular",
      color: "#3369ff",
    },
    {
      id: "vue",
      src: "/typescript.svg",
      alt: "Vue.js",
      color: "#1811d6",
    },
    {
      id: "sphere",
      src: "/js.png",
      alt: "Sphere icon",
      color: "#f2fa14",
    },
    {
      id: "red-circle",
      src: "/NestJS.svg",
      alt: "Red circular icon",
      color: "#ff4444",
    },
    {
      id: "purple-circle",
      src: "/nextjs.svg",
      alt: "Purple circular icon",
      color: "#f2f5f5",
    },
    {
      id: "a-shape",
      src: "/mongo.svg",
      alt: "A-shaped icon",
      color: "#0ad111",
    },
    {
      id: "r-shape",
      src: "/SQL.svg",
      alt: "R-shaped icon",
      color: "#0070f3",
    },
    {
      id: "green-triangle",
      src: "/docker.svg",
      alt: "Green triangular icon",
      color: "#3ecf8e",
    },
    {
      id: "firebase",
      src: "/aws.svg",
      alt: "Firebase icon",
      color: "#ffca28",
    },
    {
      id: "nodejs",
      src: "/nginx.svg",
      alt: "Node.js icon",
      color: "#68a063",
    },
  ]

  const createResponsiveRows = (totalLogos: number, logosPerRow: number) => {
    const rows = []
    for (let i = 0; i < totalLogos; i += logosPerRow) {
      rows.push(logos.slice(i, i + logosPerRow))
    }
    return rows
  }

  const createRow = (logoIndices: Logo[], totalCards: number) => {
    const row = Array(totalCards).fill(null)
    const midPoint = Math.floor(totalCards / 2)
    const logoStartIndex = midPoint - Math.floor(logoIndices.length / 2)
    logoIndices.forEach((logo, i) => {
      row[logoStartIndex + i] = logo
    })
    return row
  }

  const desktopLayout = [
    Array(15).fill(null),
    createRow(logos.slice(0, 6), 15),
    createRow(logos.slice(6, 12), 15),
    Array(15).fill(null),
  ]

  const tabletLayout = createResponsiveRows(12, 4).map((row) => createRow(row, 11))
  const mobileLayout = createResponsiveRows(12, 3).map((row) => createRow(row, 7))

  return (
    <div className="bg-transparent min-h-screen py-16 px-4 relative [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      {/* <div className="absolute pointer-events-none z-20 inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div> */}
      <div className="max-w-full mx-auto text-center relative z-10">
      <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-bold mb-8 mx-auto max-w-3xl"
          >
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">
              Fueled by your favorite tools and frameworks
            </span>
            <span className="ml-2 inline-block">⚡</span>
          </motion.h2>

        <div className="hidden lg:block">{renderGrid(desktopLayout, 15)}</div>
        <div className="hidden md:block lg:hidden">{renderGrid(tabletLayout, 11)}</div>
        <div className="md:hidden">{renderGrid(mobileLayout, 7)}</div>
      </div>
    </div>
  )

  function renderGrid(layout: (Logo | null)[][], totalCards: number) {
    return (
      <div className="grid gap-4 md:gap-6">
        {layout.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-3 md:gap-4 justify-center"
            style={{
              marginLeft: rowIndex % 2 === 1 ? "2.5%" : "0",
              marginRight: rowIndex % 2 === 1 ? "-2.5%" : "0",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
          >
            {row.map((logo, colIndex) => (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                className={`
                  relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg
                  ${logo ? "bg-neutral-600" : "bg-neutral-700"}
                  border border-neutral-500/20
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  boxShadow:
                    logo && hoveredCard === logo.id
                      ? `0 0 35px 8px ${logo.color}80, 0 0 70px 15px ${logo.color}40`
                      : "none",
                }}
                whileHover={{
                  scale: logo ? 1.05 : 1.1,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.3,
                  delay: (rowIndex * totalCards + colIndex) * 0.02,
                  boxShadow: { duration: 0.5 },
                }}
                onMouseEnter={() => setHoveredCard(logo ? logo.id : `empty-${rowIndex}-${colIndex}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {logo && (
                  <motion.img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      filter: hoveredCard === logo.id ? "brightness(1.2)" : "brightness(1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    )
  }
}

