import config from "@/config.json"

export type Config = typeof config

export function getConfig(): Config {
  return config
}

export function getSiteConfig() {
  return config.site
}

export function getProjects() {
  return config.projects
}

export function getCategories() {
  return config.categories
}

export function getTestimonials() {
  return config.testimonials
}

export function getServices() {
  return config.services
}

