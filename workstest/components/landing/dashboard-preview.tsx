"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight, ShieldCheck, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function DashboardPreview() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-br from-indigo-900/20 via-violet-900/10 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
              <span className="text-white">Live Dashboard</span>
              <br />
              <span className="text-gradient">That Feels Alive</span>
            </h2>
            <p className="text-white/40 text-lg mb-8 leading-relaxed">
              Every number tells a story. Watch your wealth grow in real-time with interactive charts, smart predictions, and personalized insights that update continuously.
            </p>

            <div className="space-y-5">
              {[
                { icon: TrendingUp, label: "Real-time Analytics", desc: "Charts update instantly as new transactions occur" },
                { icon: ShieldCheck, label: "AI Health Score", desc: "Get a personalized score with improvement recommendations" },
                { icon: Lightbulb, label: "Smart Insights", desc: "AI detects patterns and suggests optimizations" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.label}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/dashboard" className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-xl glass-card text-white font-medium hover:glass-card-hover transition-all hover:-translate-y-0.5">
              Open Dashboard <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/20 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
            {/* Overlay stats */}
            <div className="absolute top-6 right-6 glass-card rounded-2xl p-4 shadow-2xl">
              <p className="text-xs text-white/40">This Month</p>
              <p className="text-xl font-bold text-white">+23%</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span className="text-xs text-emerald-400">vs last month</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 glass-card rounded-2xl p-4 shadow-2xl">
              <p className="text-xs text-white/40">Savings Rate</p>
              <p className="text-xl font-bold text-white">42%</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingDown className="w-3 h-3 text-rose-400 rotate-180" />
                <span className="text-xs text-rose-400">down 3%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
