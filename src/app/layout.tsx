import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://links.theacob.com"),
  title: "ACOB LinksHub",
  description:
    "Every way to connect with Applied Cognitio Olympiad Bangladesh. Curiosity over memorisation.",
  applicationName: "ACOB Links",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "ACOB LinksHub",
    description: "Every way to connect with ACOB, in one place.",
    url: "https://links.theacob.com",
    siteName: "ACOB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ACOB LinksHub",
    description: "Every way to connect with ACOB, in one place.",
  },
};
export const viewport: Viewport = {
  themeColor: "#f2f0e9",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
