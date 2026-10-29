import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./site-config";
export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description:
    "The personal website of Deepak Agashe. Projects, notes, and writing.",
  metadataBase: new URL(siteConfig.origin),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
