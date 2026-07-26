"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Wallet, TrendingUp, ShieldCheck, CreditCard,
  BarChart3, Bell, User, Settings, ChevronDown, ArrowUpRight,
  ArrowDownRight, Sparkles, Zap
} from "lucide-react";
import Link from "next/link";
import {
  AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid
} from "recharts";
import { TRANSACTIONS, BUDGETS, SAVINGS_GOALS, INVESTMENTS, CURRENT_USER } from "@/lib/mock-data";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Budget", href: "/budget", icon: Wallet },
  { label: "Expenses", href: "/expense", icon: ArrowDownRight },
  { label: "Income", href: "/income", icon: ArrowUpRight },
  { label: "Savings", href: "/savings", icon: ShieldCheck },
  { label: "Investments", href: "/investment", icon: TrendingUp },
  { label: "Debt", href: "/debt", icon: CreditCard },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

export default function DashboardPage() {
  const [expanded, setExpanded] = useState(true);

  const monthlyData = [
    { month: "Jan", income: 5400, expense: 3200 },
    { month: "Feb", income: 5800, expense: 3450 },
    { month: "Mar", income: 6200, expense: 3100 },
    { month: "Apr", income: 5900, expense: 3600 },
    { month: "May", income: 6400, expense: 3300 },
    { month: "Jun", income: 6800, expense: 3500 },
    { month: "Jul", income: 7000, expense: 3800 },
  ];

  const pieData = [
    { name: "Food", value: 35, color: "#ec4899" },
    { name: "Transport", value: 18, color: "#f59e0b" },
    { name: "Entertainment", value: 15, color: "#8b5cf6" },
    { name: "Health", value: 12, color: "#10b981" },
    { name: "Housing", value: 20, color: "#6366f1" },
  ];

  const totalBalance = 284500;
  const netWorthChange = 12.4;
  const savingsRate = 42;

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <aside className={`hidden lg:flex flex-col ${expanded ? "w-72" : "w-20"} shrink-0 border-r border-white/5 bg-gradient-to-b from-black/40 to-transparent transition-all duration-500`}>
        <div className="flex items-center gap-3 px-6 py-6 h-[72px]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className={`font-display font-bold text-xl text-white transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
            Finance<span className="text-gradient">Flow</span>
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                item.href === "/dashboard"
                  ? "bg-white/5 text-white shadow-inner shadow-indigo-500/5 border border-white/5"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Link href="/profile" className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors">
            <img src={CURRENT_USER.avatar} alt="Profile" className="w-9 h-9 rounded-full ring-2 ring-white/10 object-cover" />
            <div className={`transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}>
              <p className="text-sm font-semibold text-white truncate">{CURRENT_USER.name}</p>
              <p className="text-xs text-white/30">{CURRENT_USER.plan}</p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 backdrop-blur-2xl bg-black/20 border-b border-white/5 px-6 lg:px-10 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-display font-bold text-white">Dashboard</h1>
            <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/10 text-indigo-300 text-xs font-semibold">Pro Plan</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/notifications" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/50 hover:text-white hover:glass-card-hover transition-all relative">
              <Bell className="w-4.5 h-4.5" />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-rose-400" />
            </Link>
            <Link href="/profile" className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 hover:ring-white/20 transition-all">
              <img src={CURRENT_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
            </Link>
          </div>
        </header>

        <div className="px-6 lg:px-10 py-8 space-y-8">
          {/* Welcome + Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 blur-2xl -translate-y-1/4 translate-x-1/4" />
              <h3 className="text-sm font-medium text-white/40 mb-1">Total Net Worth</h3>
              <p className="text-3xl font-display font-extrabold text-white tracking-tight">${totalBalance.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="text-emerald-400 font-semibold">+{netWorthChange}%</span>
                <span className="text-white/20">vs last month</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/10 to-violet-500/5 blur-2xl -translate-y-1/4 translate-x-1/4" />
              <h3 className="text-sm font-medium text-white/40 mb-1">Savings Rate</h3>
              <p className="text-3xl font-display font-extrabold text-white tracking-tight">{savingsRate}%</p>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="text-violet-400 font-semibold">+3%</span>
                <span className="text-white/20">vs last month</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-rose-500/10 to-rose-500/5 blur-2xl -translate-y-1/4 translate-x-1/4" />
              <h3 className="text-sm font-medium text-white/40 mb-1">This Month</h3>
              <p className="text-3xl font-display font-extrabold text-white tracking-tight">$7,000</p>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <span className="text-rose-400 font-semibold">-$3,800</span>
                <span className="text-white/20">expenses</span>
              </div>
            </motion.div>
          </section>

          {/* Charts */}
          <section className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-3xl glass-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-white">Income vs Expenses</h2>
                <span className="text-xs text-white/20">Last 7 months</span>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <defs>
                      <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} />
                    <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `$${v / 1000}k`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "rgba(10,10,15,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={3} fill="url(#incomeGrad)" />
                    <Area type="monotone" dataKey="expense" stroke="#ec4899" strokeWidth={2} fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card">
              <h2 className="text-lg font-bold text-white mb-6">Spending Breakdown</h2>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%" cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: "rgba(10,10,15,0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {pieData.map((item) => (
                  <span key={item.name} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.name}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Transactions + AI Insights */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-3xl glass-card">
              <h2 className="text-lg font-bold text-white mb-5">Recent Transactions</h2>
              <div className="space-y-2">
                {TRANSACTIONS.slice(0, 5).map((t) => (
                  <div key={t.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.02] transition-colors">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.type === "income" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                      {t.type === "income" ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{t.description}</p>
                      <p className="text-white/20 text-xs">{t.account} · {t.category}</p>
                    </div>
                    <span className={`text-sm font-bold ${t.type === "income" ? "text-emerald-400" : "text-white"}`}>{t.type === "income" ? "+" : "-"}${Math.abs(t.amount).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-card bg-gradient-to-br from-violet-950/40 via-indigo-950/20 to-transparent border-violet-500/10">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-violet-400" />
                <h2 className="text-lg font-bold text-white">AI Insights</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs text-violet-200/50 font-medium mb-1">Budget Alert</p>
                  <p className="text-sm text-white/70">Entertainment budget is 97% used. Consider reducing subscriptions this month.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs text-violet-200/50 font-medium mb-1">Savings Tip</p>
                  <p className="text-sm text-white/70">Reduce dining out by 20% to reach Tokyo vacation goal 15 days faster.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-xs text-violet-200/50 font-medium mb-1">Investment</p>
                  <p className="text-sm text-white/70">Your S&P 500 ETF is up 5.8%. Consider rebalancing to maintain risk profile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
