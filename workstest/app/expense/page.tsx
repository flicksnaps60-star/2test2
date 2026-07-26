"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Search, Filter, Plus, Trash2, Edit2 } from "lucide-react";
import { TRANSACTIONS } from "@/lib/mock-data";

export default function ExpensePage() {
  const [search, setSearch] = useState("");
  const expenses = TRANSACTIONS.filter(t => t.type === "expense");

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Expense Tracker</h1>
            <p className="text-white/30">Manage and review your spending</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Expense
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all"
            />
          </div>
          <button className="px-4 py-3 rounded-2xl glass-card text-white/40 hover:text-white hover:glass-card-hover transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <div className="rounded-3xl glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="border-b border-white/5 bg-white/[0.02]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Account</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {expenses.map((t, i) => (
                <motion.tr
                  key={t.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="hover:bg-white/[0.01] transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-white font-medium">{t.description}</td>
                  <td className="px-6 py-4 text-sm text-white/40">{t.category}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{t.date}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{t.account}</td>
                  <td className="px-6 py-4 text-sm text-rose-400 font-bold text-right">-${Math.abs(t.amount).toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white/30 hover:text-white hover:glass-card-hover transition-all" aria-label="Edit"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-white/30 hover:text-rose-400 hover:glass-card-hover transition-all" aria-label="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
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
