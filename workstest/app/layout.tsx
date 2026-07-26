import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import CommandPalette from "@/components/ui/command-palette";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "FinanceFlow AI — Premium Finance Tracker",
  description: "AI-powered finance tracking. Budget, save, invest, and grow your wealth with stunning design.",
  openGraph: {
    title: "FinanceFlow AI",
    description: "Premium AI-powered finance tracking.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-[#0a0a0f] text-[#f0f0f5] antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
