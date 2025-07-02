import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2B Campaign Platform - AI-Powered Marketing Automation",
  description: "Transform your B2B marketing with AI-powered campaigns, lead extraction, email automation, and CRM integration.",
  keywords: "B2B marketing, lead generation, email automation, CRM integration, AI marketing",
  authors: [{ name: "B2B Campaign Platform" }],
  openGraph: {
    title: "B2B Campaign Platform",
    description: "AI-Powered B2B Marketing Automation Platform",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
