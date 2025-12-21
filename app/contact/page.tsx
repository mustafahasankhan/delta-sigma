"use client"

import { useState } from "react"
import { TextSlideUpByWord } from "@/components/animate-wrappers"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card } from "@/components/ui/card"
import { getConfig, getSiteConfig } from "@/lib/config"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const services = [
  "Brand Identity",
  "Scroll-Stopping Motion Graphics",
  "Video Editing",
  "Social-First Visuals",
  "Logo Design",
  "Packaging Design",
]

const budgetOptions = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
]

export default function ContactPage() {
  const config = getConfig()
  const siteConfig = getSiteConfig()
  const contact = config.contact

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    socialLink: "",
    budget: "",
    message: "",
    services: [] as string[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      socialLink: "",
      budget: "",
      message: "",
      services: [],
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="container py-8 md:py-huge">
        <TextSlideUpByWord as="h1" className="variant-h1">
          Contact Us
        </TextSlideUpByWord>
      </section>

      {/* Main Content */}
      <section className="container py-8 md:py-huge">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Side - Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="variant-h2 mb-4">Let's Build Something Visual & Impactful</h2>
              <p className="variant-p mb-4">{contact.subtitle}</p>
              <p className="variant-p">{contact.description}</p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block variant-p font-semibold hover:text-primary transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="block variant-p font-semibold hover:text-primary transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="flex gap-4">
              {siteConfig.social.instagram && siteConfig.social.instagram !== "#" && (
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  className="rounded-full p-3 ring-2 ring-foreground transition-all hover:scale-110 hover:ring-primary"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              )}
              {siteConfig.social.facebook && siteConfig.social.facebook !== "#" && (
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  className="rounded-full p-3 ring-2 ring-foreground transition-all hover:scale-110 hover:ring-primary"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="rounded-full p-3 ring-2 ring-foreground transition-all hover:scale-110 hover:ring-primary"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block variant-small font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block variant-small font-medium mb-2">
                  Your Organization Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block variant-small font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block variant-small font-medium mb-2">
                  Phone (Optional)
                </label>
                <div className="flex gap-2">
                  <select className="px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>IN</option>
                    <option>US</option>
                    <option>UK</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="00000 00000"
                    className="flex-1 px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Social Link */}
              <div>
                <label htmlFor="socialLink" className="block variant-small font-medium mb-2">
                  Your Social Link (Optional)
                </label>
                <input
                  type="url"
                  id="socialLink"
                  name="socialLink"
                  value={formData.socialLink}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block variant-small font-medium mb-2">
                  Select a Budget (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services */}
              <div>
                <label className="block variant-small font-medium mb-4">
                  What services are you interested in?
                </label>
                <div className="grid gap-3 md:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-input hover:bg-muted/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-primary"
                      />
                      <span className="variant-small">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block variant-small font-medium mb-2">
                  Tell us more about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background variant-p focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <AnimatedButton type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send"}
              </AnimatedButton>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}

