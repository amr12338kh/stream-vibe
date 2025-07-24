import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  style: "normal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "StreamVibe - Watch Movies Online",
  description:
    "StreamVibe is your go-to platform for streaming the latest movies in high quality. Enjoy an immersive viewing experience with a seamless and intuitive interface.",
  icons: "/meta-logo.svg",
  metadataBase: new URL("https://streamvibe-ak.vercel.app"),
  openGraph: {
    title: "StreamVibe - Watch Movies & TV Shows Online",
    description:
      "Discover and stream the latest movies on StreamVibe. Enjoy a seamless viewing experience with high-quality content.",
    url: "https://streamvibe-ak.vercel.app",
    siteName: "StreamVibe",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className} dark`}>
      <body className=" bg-black-8">
        <Header />
        {children}
        <Toaster />
        <footer className="pt-16 sm:pt-20">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
