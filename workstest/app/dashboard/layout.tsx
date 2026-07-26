import type { Metadata } from "next";
import AppLayout from "@/components/layout/app-sidebar";

export default function AppRootLayout({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
