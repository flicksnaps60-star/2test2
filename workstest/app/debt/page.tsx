"use client";

import { motion } from "framer-motion";
import { CreditCard, ArrowDownRight } from "lucide-react";
import { DEBTS } from "@/lib/mock-data";

export default function DebtPage() {
  const totalBalance = DEBTS.reduce((s, d) => s + d.balance, 0);

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center shadow-xl shadow-rose-500/20">
            <CreditCard className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Debt Tracker</h1>
            <p className="text-white/30">Monitor loans and payoff timelines</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Total Debt</p>
            <p className="text-3xl font-display font-extrabold text-rose-400">${totalBalance.toLocaleString()}</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Monthly Payments</p>
            <p className="text-3xl font-display font-extrabold text-white">$1,080</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Avg Interest</p>
            <p className="text-3xl font-display font-extrabold text-white">9.9%</p>
          </div>
        </div>

        <div className="grid gap-6">
          {DEBTS.map((d, i) => {
            const pct = Math.round(((d.originalBalance - d.balance) / d.originalBalance) * 100);
            return (
              <motion.div key={d.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-7 rounded-3xl glass-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{d.name}</h3>
                    <p className="text-sm text-white/30">{d.type} · {d.interestRate}% APR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-display font-extrabold text-white">${d.balance.toLocaleString()}</p>
                    <p className="text-sm text-white/20">Remaining</p>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-white/[0.05] overflow-hidden mb-3">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} className="h-full rounded-full bg-gradient-to-r from-rose-400 to-red-400" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">${d.monthlyPayment}/month · Next due {d.dueDate}</span>
                  <span className="text-white/30">{pct}% paid off</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
