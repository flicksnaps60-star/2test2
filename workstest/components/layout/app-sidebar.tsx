"use client";

import { LayoutDashboard, Wallet, TrendingUp, ShieldCheck, ArrowUpRight, ArrowDownRight, CreditCard, BarChart3, Bell, User, Settings, Sparkles } from "lucide-react";
import Link from "next/link";
import { CURRENT_USER } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Budget", href: "/budget", icon: Wallet },
  { label: "Expenses", href: "/expense", icon: ArrowDownRight },
  { label: "Income", href: "/income", icon: ArrowUpRight },
  { label: "Savings", href: "/savings", icon: ShieldCheck },
  { label: "Investments", href: "/investment", icon: TrendingUp },
  { label: "Debt", href: "/debt", icon: CreditCard },
  { label: "Bills", href: "/bills", icon: Bell },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/5 bg-gradient-to-b from-black/40 to-transparent sticky top-0 h-screen">
        <div className="flex items-center gap-2.5 px-6 py-6 h-[72px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold text-white">Finance<span className="text-gradient">Flow</span></span>
        </div>
        <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white hover:bg-white/5 transition-all">
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/5">
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
            <img src={CURRENT_USER.avatar} alt="Profile" className="w-8 h-8 rounded-full ring-2 ring-white/10 object-cover" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{CURRENT_USER.name}</p>
              <p className="text-xs text-white/20 truncate">{CURRENT_USER.plan}</p>
            </div>
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
