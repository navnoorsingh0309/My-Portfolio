"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import type { ProjectSchema } from "@/models/schema"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { ProjectDialog } from "../project-dialog"

export const HoverEffect = ({
  items,
  className,
}: {
  items: ProjectSchema[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<ProjectSchema | null>(null)

  return (
    <>
      <motion.div
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item?._id}
            className="relative group block p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedProject(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-gradient-to-br from-neutral-200/50 to-neutral-100/50 dark:from-slate-800/[0.8] dark:to-slate-900/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <motion.img
                src={`https://utfs.io/f/${item.image[0]}`}
                className="w-full h-[250px] object-cover rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.brief}</CardDescription>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black/40 backdrop-blur-sm border border-white/[0.1] group-hover:border-white/[0.2] relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-xl", className)}>{children}</h4>
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>
}

