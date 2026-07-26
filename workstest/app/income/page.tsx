"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import { TRANSACTIONS } from "@/lib/mock-data";

export default function IncomePage() {
  const income = TRANSACTIONS.filter(t => t.type === "income");
  const total = income.reduce((s, t) => s + t.amount, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-xl shadow-emerald-500/20">
            <ArrowUpRight className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Income Tracker</h1>
            <p className="text-white/30">Track all your revenue sources</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Total Income</p>
            <p className="text-3xl font-display font-extrabold text-emerald-400">${total.toLocaleString()}</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Primary Source</p>
            <p className="text-xl font-bold text-white">Salary</p>
            <p className="text-xs text-white/20">TechCorp · Monthly</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Freelance</p>
            <p className="text-xl font-bold text-white">$1,200</p>
            <p className="text-xs text-white/20">UI Design Project</p>
          </div>
        </div>

        <div className="rounded-3xl glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="border-b border-white/5 bg-white/[0.02]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Source</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Account</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {income.map((t, i) => (
                <motion.tr key={t.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{t.description}</td>
                  <td className="px-6 py-4 text-sm text-white/40">{t.category}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{t.date}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{t.account}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-bold text-right">+${t.amount.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
