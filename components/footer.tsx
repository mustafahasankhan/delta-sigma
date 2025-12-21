import Link from "next/link"
import { AnimatedLink } from "./ui/animated-button"
import { getSiteConfig, getConfig } from "@/lib/config"
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const siteConfig = getSiteConfig()
  const config = getConfig()
  
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="variant-h2 font-semibold">
              {config.footer.heading}
            </h3>
            <div className="space-y-4">
              <AnimatedLink href="/contact" variant="outline" size="sm">
                {config.footer.getInTouchLabel}
              </AnimatedLink>
              <div className="space-y-2">
                <p className="variant-small text-muted-foreground">New Business :</p>
                <a 
                  className="block variant-p font-semibold hover:text-primary transition-colors" 
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation & Social */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Navigation Links */}
            <nav>
              <ul className="flex flex-col gap-4 md:gap-6">
                <li>
                  <Link href="/work" className="variant-p hover:text-primary transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="variant-p hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="variant-p hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="variant-p hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Links */}
            <div>
              <ul className="flex flex-col gap-4 md:gap-6">
                {siteConfig.social.instagram && siteConfig.social.instagram !== "#" && (
                  <li>
                    <Link
                      href={siteConfig.social.instagram}
                      target="_blank"
                      className="variant-p hover:text-primary transition-colors"
                    >
                      Instagram
                    </Link>
                  </li>
                )}
                {siteConfig.social.facebook && siteConfig.social.facebook !== "#" && (
                  <li>
                    <Link
                      href={siteConfig.social.facebook}
                      target="_blank"
                      className="variant-p hover:text-primary transition-colors"
                    >
                      Linkedin
                    </Link>
                  </li>
                )}
                {siteConfig.social.twitter && siteConfig.social.twitter !== "#" && (
                  <li>
                    <Link
                      href={siteConfig.social.twitter}
                      target="_blank"
                      className="variant-p hover:text-primary transition-colors"
                    >
                      Twitter
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="variant-p hover:text-primary transition-colors"
                  >
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="variant-small text-muted-foreground">
            {siteConfig.copyright}
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {siteConfig.links.privacyPolicy && siteConfig.links.privacyPolicy !== "#" && (
              <Link className="variant-small text-muted-foreground hover:text-foreground transition-colors" href={siteConfig.links.privacyPolicy}>
                Privacy Policy
              </Link>
            )}
            {siteConfig.links.termsAndConditions && siteConfig.links.termsAndConditions !== "#" && (
              <Link className="variant-small text-muted-foreground hover:text-foreground transition-colors" href={siteConfig.links.termsAndConditions}>
                Terms & Conditions
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

