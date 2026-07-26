"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, TrendingUpIcon } from "lucide-react";
import { INVESTMENTS } from "@/lib/mock-data";

export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/20">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Investment Portfolio</h1>
            <p className="text-white/30">Track stocks, crypto, and more</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Total Portfolio Value</p>
            <p className="text-3xl font-display font-extrabold text-white">$142,850</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Total Gain</p>
            <p className="text-3xl font-display font-extrabold text-emerald-400">+8.4%</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Days Held</p>
            <p className="text-3xl font-display font-extrabold text-white">312</p>
          </div>
        </div>

        <div className="rounded-3xl glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="border-b border-white/5 bg-white/[0.02]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Asset</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Type</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Quantity</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Price</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {INVESTMENTS.map((inv, i) => (
                <motion.tr key={inv.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{inv.assetName}</td>
                  <td className="px-6 py-4 text-sm text-white/40">{inv.type}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{inv.quantity}</td>
                  <td className="px-6 py-4 text-sm text-white">${inv.pricePerUnit.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-bold text-right">
                    <span className={inv.changePercent >= 0 ? "text-emerald-400" : "text-rose-400"}>{inv.changePercent >= 0 ? "+" : ""}{inv.changePercent}%</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
