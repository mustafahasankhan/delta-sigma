import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InitialLoader } from "@/components/initial-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteConfig } from "@/lib/config";

const siteConfig = getSiteConfig()

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <InitialLoader>
            <main>{children}</main>
          </InitialLoader>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
