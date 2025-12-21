"use client"

import { useState } from "react"
import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card } from "@/components/ui/card"
import { getConfig } from "@/lib/config"
import { motion } from "framer-motion"
import { Upload, X, Image as ImageIcon, FileText, Video } from "lucide-react"

type ProjectFile = {
  id: string
  title: string
  file: File | null
  fileType: "image" | "pdf" | "video"
  categories: string[]
  preview?: string
}

export default function AdminPage() {
  const config = getConfig()
  const categories = config.categories

  const [projects, setProjects] = useState<ProjectFile[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleAddProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now().toString(),
        title: "",
        file: null,
        fileType: "image",
        categories: [],
      },
    ])
  }

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const handleFileChange = (id: string, file: File | null) => {
    setProjects(
      projects.map((p) => {
        if (p.id === id) {
          const fileType = file?.type.startsWith("image/")
            ? "image"
            : file?.type.startsWith("video/")
            ? "video"
            : "pdf"
          const preview = file && fileType === "image" ? URL.createObjectURL(file) : undefined
          return { ...p, file, fileType, preview }
        }
        return p
      })
    )
  }

  const handleTitleChange = (id: string, title: string) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, title } : p)))
  }

  const handleCategoryToggle = (projectId: string, categoryId: string) => {
    setProjects(
      projects.map((p) => {
        if (p.id === projectId) {
          const categories = p.categories.includes(categoryId)
            ? p.categories.filter((c) => c !== categoryId)
            : [...p.categories, categoryId]
          return { ...p, categories }
        }
        return p
      })
    )
  }

  const handleSubmit = async () => {
    setIsUploading(true)
    
    // TODO: Implement actual upload logic
    // This would typically involve:
    // 1. Upload files to storage (e.g., S3, Cloudinary, etc.)
    // 2. Save project metadata to database
    // 3. Update config.json or database
    
    console.log("Uploading projects:", projects)
    
    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsUploading(false)
    alert("Projects uploaded successfully!")
    setProjects([])
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container py-8 md:py-huge">
        <div className="flex items-center justify-between">
          <TextSlideUpByWord as="h1" className="variant-h1">
            Admin Panel
          </TextSlideUpByWord>
          <AnimatedButton onClick={handleAddProject} size="sm">
            Add Project
          </AnimatedButton>
        </div>
        <p className="variant-p text-muted-foreground mt-4">
          Upload and manage your portfolio projects
        </p>
      </section>

      {/* Projects List */}
      <section className="container py-8 md:py-huge">
        <div className="space-y-6">
          {projects.length === 0 ? (
            <Card className="text-center py-12">
              <p className="variant-p text-muted-foreground">
                No projects added yet. Click "Add Project" to get started.
              </p>
            </Card>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="variant-h4 font-semibold">Project {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveProject(project.id)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block variant-small font-medium mb-2">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => handleTitleChange(project.id, e.target.value)}
                        placeholder="Enter project title"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block variant-small font-medium mb-2">
                        Upload File (Image, PDF, or Video) *
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex-1 cursor-pointer">
                          <input
                            type="file"
                            accept="image/*,application/pdf,video/*"
                            onChange={(e) =>
                              handleFileChange(project.id, e.target.files?.[0] || null)
                            }
                            className="hidden"
                          />
                          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-input bg-background hover:bg-muted/50 transition-colors">
                            {project.file ? (
                              <>
                                {project.fileType === "image" && <ImageIcon className="w-5 h-5" />}
                                {project.fileType === "pdf" && <FileText className="w-5 h-5" />}
                                {project.fileType === "video" && <Video className="w-5 h-5" />}
                                <span className="variant-small">{project.file.name}</span>
                              </>
                            ) : (
                              <>
                                <Upload className="w-5 h-5" />
                                <span className="variant-small text-muted-foreground">
                                  Click to upload
                                </span>
                              </>
                            )}
                          </div>
                        </label>
                      </div>
                      {project.preview && (
                        <div className="mt-4 relative w-full h-48 rounded-lg overflow-hidden">
                          <img
                            src={project.preview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>

                    {/* Categories */}
                    <div>
                      <label className="block variant-small font-medium mb-4">
                        Categories *
                      </label>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                          <label
                            key={category.id}
                            className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-input hover:bg-muted/50 transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={project.categories.includes(category.id)}
                              onChange={() => handleCategoryToggle(project.id, category.id)}
                              className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                            />
                            <span className="variant-small">{category.title}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Submit Button */}
        {projects.length > 0 && (
          <div className="mt-8 flex justify-end">
            <AnimatedButton
              onClick={handleSubmit}
              disabled={isUploading || projects.some((p) => !p.title || !p.file || p.categories.length === 0)}
              size="lg"
            >
              {isUploading ? "Uploading..." : "Upload All Projects"}
            </AnimatedButton>
          </div>
        )}
      </section>
    </div>
  )
}

