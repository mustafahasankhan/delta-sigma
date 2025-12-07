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
      <div className="container py-huge">
        <div className="flex items-start justify-between gap-8">
          <div className="space-y-8">
            <h3 className="variant-h3 max-w-[47.917vw] text-[2.778vw]">
              {config.footer.heading}
            </h3>
            <div className="space-y-4">
              <p>{config.footer.getInTouchLabel}</p>
              <a className="variant-h4 block font-semibold" href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
              <a className="variant-h4 block font-semibold" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              <p className="variant-h4 font-semibold">{siteConfig.contact.address}</p>
            </div>
          </div>
          <div className="flex w-[40%] min-w-[400px] max-w-[27.938vw] flex-col gap-10">
            <Card className="flex items-center gap-6 bg-foreground text-background">
              <h5 className="variant-h5 me-auto text-xl">{config.footer.followUs.title}</h5>
              {siteConfig.social.instagram && (
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Instagram size={24} />
                </Link>
              )}
              {siteConfig.social.facebook && (
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Facebook size={24} />
                </Link>
              )}
              {siteConfig.social.twitter && (
                <Link
                  href={siteConfig.social.twitter}
                  target="_blank"
                  className="block rounded-full ring-0 ring-transparent ring-offset-0 ring-offset-foreground transition-all duration-300 hover:scale-125 hover:ring-2 hover:ring-primary hover:ring-offset-8">
                  <Twitter size={24} />
                </Link>
              )}
            </Card>
            <Card className="flex flex-col items-center gap-4">
              <h3 className="variant-h3">{config.footer.cta.heading}</h3>
              <p>{config.footer.cta.description}</p>
              <Button className="mt-6 w-full" size="sm">
                {config.footer.cta.buttonText}
              </Button>
            </Card>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-8">
          <Link className="variant-p me-auto block pt-8 text-muted" href="#">
            {siteConfig.copyright}
          </Link>
          {siteConfig.links.privacyPolicy && (
            <Link className="variant-p block text-muted" href={siteConfig.links.privacyPolicy}>
              Privacy Policy
            </Link>
          )}
          {siteConfig.links.termsAndConditions && (
            <Link className="variant-p block text-muted" href={siteConfig.links.termsAndConditions}>
              Terms & Conditions
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

