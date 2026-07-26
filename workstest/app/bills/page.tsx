"use client";

import { motion } from "framer-motion";
import { BellRing, Calendar, Clock } from "lucide-react";
import { BILLS } from "@/lib/mock-data";

export default function BillsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shadow-xl shadow-cyan-500/20">
            <BellRing className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Bills & Subscriptions</h1>
            <p className="text-white/30">Never miss a payment again</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Upcoming Payments</p>
            <p className="text-3xl font-display font-extrabold text-cyan-400">5</p>
            <p className="text-xs text-white/20">In the next 7 days</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Monthly Recurring</p>
            <p className="text-3xl font-display font-extrabold text-white">$440</p>
            <p className="text-xs text-white/20">Subscriptions included</p>
          </div>
          <div className="p-6 rounded-3xl glass-card">
            <p className="text-sm text-white/30 mb-1">Due Soon</p>
            <p className="text-3xl font-display font-extrabold text-amber-400">3</p>
            <p className="text-xs text-white/20">Within 48 hours</p>
          </div>
        </div>

        <div className="rounded-3xl glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead className="border-b border-white/5 bg-white/[0.02]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Bill</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Category</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Due Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-white/30 uppercase text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {BILLS.map((b, i) => (
                <motion.tr key={b.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{b.name}</td>
                  <td className="px-6 py-4 text-sm text-white/40">{b.category}</td>
                  <td className="px-6 py-4 text-sm text-white/30">{b.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      b.status === "paid" ? "bg-emerald-500/10 text-emerald-400" : b.status === "overdue" ? "bg-rose-500/10 text-rose-400" : "bg-amber-500/10 text-amber-400"
                    }`}>{b.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-white font-bold text-right">${b.amount.toFixed(2)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
