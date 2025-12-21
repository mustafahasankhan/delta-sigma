"use client"

import { useState } from "react"
import Image from "next/image"
import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { getConfig } from "@/lib/config"
import { motion, AnimatePresence } from "framer-motion"
import { ImageDialog } from "@/components/ui/image-dialog"
import { Play } from "lucide-react"

export default function WorkPage() {
  const config = getConfig()
  const categories = config.categories
  const projects = config.projects
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => {
        const selectedCategoryTitle = categories.find((c) => c.id === selectedCategory)?.title
        return project.categories?.some(
          (cat) => cat.toLowerCase() === selectedCategoryTitle?.toLowerCase()
        )
      })
    : projects

  // Get project counts for each category
  const getCategoryCount = (categoryId: string) => {
    const categoryTitle = categories.find((c) => c.id === categoryId)?.title
    return projects.filter((project) =>
      project.categories?.some(
        (cat) => cat.toLowerCase() === categoryTitle?.toLowerCase()
      )
    ).length
  }

  const handleProjectClick = (project: typeof projects[0]) => {
    const fileType = project.fileType || "image"
    if (fileType === "pdf") {
      window.open(project.fileUrl || project.image, "_blank")
    } else {
      setSelectedProject(project.id)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="container py-8 md:py-huge">
        <div className="max-w-4xl">
          <TextSlideUpByWord as="h1" className="variant-h1 mb-4">
            Our Work
          </TextSlideUpByWord>
          <p className="variant-p text-muted-foreground">
            Explore our portfolio of creative projects across branding, motion graphics, and digital design.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container py-4 md:py-8">
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card text-card-foreground hover:bg-muted hover:scale-105"
            }`}
          >
            ALL ({projects.length})
          </button>
          {categories.map((category) => {
            const count = getCategoryCount(category.id)
            if (count === 0) return null
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card text-card-foreground hover:bg-muted hover:scale-105"
                }`}
              >
                {category.title.toUpperCase()} ({count})
              </button>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container py-8 md:py-huge">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Video indicator */}
                  {project.fileType === "video" && (
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm p-2.5 shadow-lg">
                      <Play className="w-4 h-4 text-foreground fill-current" />
                    </div>
                  )}
                  
                  {/* Latest badge */}
                  {project.isLatest && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Latest
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-5 space-y-2">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.categories?.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="variant-h4 text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* Fullscreen Modal for Images/Videos */}
      <ImageDialog
        open={selectedProject !== null}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        className="max-w-7xl w-full max-h-[90vh]"
        title={projects.find((p) => p.id === selectedProject)?.title || "Project"}
      >
        {selectedProject && (
          <div className="relative w-full h-[80vh]">
            {projects.find((p) => p.id === selectedProject)?.fileType === "video" ? (
              <video
                src={projects.find((p) => p.id === selectedProject)?.fileUrl || projects.find((p) => p.id === selectedProject)?.image}
                controls
                className="w-full h-full object-contain rounded-lg"
                autoPlay
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={projects.find((p) => p.id === selectedProject)?.image || ""}
                  alt={projects.find((p) => p.id === selectedProject)?.title || ""}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        )}
      </ImageDialog>
    </div>
  )
}

