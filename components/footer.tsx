import Link from "next/link"
import { AnimatedButton as Button } from "./ui/animated-button"
import { Card } from "./ui/card"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { getSiteConfig, getConfig } from "@/lib/config"

export function Footer() {
  const siteConfig = getSiteConfig()
  const config = getConfig()
  
  return (
    <section>
      <div className="container py-8 md:py-huge">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 md:space-y-8">
            <h3 className="text-2xl font-semibold leading-tight sm:text-3xl md:max-w-[47.917vw] md:text-[2.778vw]">
              {config.footer.heading}
            </h3>
            <div className="space-y-2 md:space-y-4">
              <p className="text-sm md:text-base">{config.footer.getInTouchLabel}</p>
              <a className="block text-base font-semibold md:text-lg" href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
              <a className="block text-base font-semibold md:text-lg" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              <p className="text-base font-semibold md:text-lg">{siteConfig.contact.address}</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 md:w-[40%] md:max-w-[27.938vw] md:gap-10">
            <Card className="flex items-center gap-4 bg-foreground text-background md:gap-6">
              <h5 className="me-auto text-base md:text-xl">{config.footer.followUs.title}</h5>
              {siteConfig.social.instagram && (
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Instagram size={20} className="md:size-6" />
                </Link>
              )}
              {siteConfig.social.facebook && (
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Facebook size={20} className="md:size-6" />
                </Link>
              )}
              {siteConfig.social.twitter && (
                <Link
                  href={siteConfig.social.twitter}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Twitter size={20} className="md:size-6" />
                </Link>
              )}
            </Card>
            <Card className="flex flex-col items-center gap-3 md:gap-4">
              <h3 className="text-xl font-semibold md:text-2xl">{config.footer.cta.heading}</h3>
              <p className="text-center text-sm md:text-base">{config.footer.cta.description}</p>
              <Button className="mt-4 w-full md:mt-6" size="sm">
                {config.footer.cta.buttonText}
              </Button>
            </Card>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row md:items-center md:gap-8">
          <Link className="block text-sm text-muted md:me-auto md:pt-8 md:text-base" href="#">
            {siteConfig.copyright}
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {siteConfig.links.privacyPolicy && (
              <Link className="block text-sm text-muted md:text-base" href={siteConfig.links.privacyPolicy}>
                Privacy Policy
              </Link>
            )}
            {siteConfig.links.termsAndConditions && (
              <Link className="block text-sm text-muted md:text-base" href={siteConfig.links.termsAndConditions}>
                Terms & Conditions
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

