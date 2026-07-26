"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, CheckCircle } from "lucide-react";
import { SAVINGS_GOALS } from "@/lib/mock-data";

export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-xl shadow-amber-500/20">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Savings Goals</h1>
            <p className="text-white/30">Track progress toward your dreams</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAVINGS_GOALS.map((g, i) => {
            const pct = Math.round((g.current / g.target) * 100);
            return (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-8 rounded-3xl glass-card relative overflow-hidden ${g.completed ? "border-emerald-500/20" : ""}`}
              >
                {g.completed && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/10 flex items-center justify-center mb-5">
                  <Target className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{g.title}</h3>
                <p className="text-xs text-white/20 mb-5">{g.category} · Due {g.deadline}</p>

                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white/50">${g.current.toLocaleString()}</span>
                  <span className="text-white/20">${g.target.toLocaleString()}</span>
                </div>
                <div className="h-3 rounded-full bg-white/[0.05] overflow-hidden mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                  />
                </div>
                <p className="text-sm font-bold text-white/60">{pct}% Complete</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
