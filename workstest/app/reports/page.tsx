"use client";

import { motion } from "framer-motion";
import { BarChart3, Download, FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-400 flex items-center justify-center shadow-xl shadow-violet-500/20">
            <BarChart3 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Financial Reports</h1>
            <p className="text-white/30">Export detailed reports and summaries</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Monthly Summary", desc: "Full income and expense breakdown for July 2026", icon: FileText, color: "from-violet-500 to-fuchsia-500" },
            { title: "Quarterly Analysis", desc: "Q3 2026 trends, savings rate, and investment growth", icon: BarChart3, color: "from-amber-400 to-orange-400" },
            { title: "Tax Ready Report", desc: "Categorized transactions ready for filing", icon: Download, color: "from-emerald-400 to-cyan-400" },
          ].map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl glass-card hover:glass-card-hover transition-all group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-5 shadow-lg`}>
                <r.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{r.title}</h3>
              <p className="text-white/30 text-sm mb-6">{r.desc}</p>
              <button className="w-full py-3 rounded-xl glass-card text-white font-medium hover:glass-card-hover transition-all flex items-center justify-center gap-2 group-hover:-translate-y-0.5">
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
