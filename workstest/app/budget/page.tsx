"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, Plus, TrendingUp, TrendingDown, Target } from "lucide-react";
import { BUDGETS } from "@/lib/mock-data";

export default function BudgetPage() {
  const [active, setActive] = useState("monthly");

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-xl shadow-violet-500/20">
            <Wallet className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Budget Planner</h1>
            <p className="text-white/30">Track and manage all your categories</p>
          </div>
        </div>

        <div className="grid gap-6">
          {/* Budget Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUDGETS.map((b, i) => {
              const pct = Math.min(Math.round((b.spent / b.limit) * 100), 100);
              const isOver = b.spent > b.limit;
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-7 rounded-3xl glass-card relative overflow-hidden group hover:glass-card-hover transition-all"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-20" style={{ backgroundColor: b.color }} />
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-white font-semibold">{b.category}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] text-white/40 border border-white/5">{b.period}</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-display font-extrabold text-white">${b.spent.toLocaleString()}</span>
                    <span className="text-white/20 text-sm">/ ${b.limit.toLocaleString()}</span>
                  </div>
                  <div className="mb-4">
                    <div className="h-3 rounded-full bg-white/[0.05] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + i * 0.08 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: b.color }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${isOver ? "text-rose-400" : "text-emerald-400"}`}>
                      {isOver ? `Over by $${(b.spent - b.limit).toFixed(0)}` : `${pct}% used`}
                    </span>
                    <span className="text-white/20">${(b.limit - b.spent).toFixed(0)} remaining</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
