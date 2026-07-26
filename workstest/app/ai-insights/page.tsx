"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck, BrainCircuit, ArrowRight } from "lucide-react";

export default function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-rose-500 flex items-center justify-center shadow-xl shadow-violet-500/20">
            <BrainCircuit className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">AI Financial Insights</h1>
            <p className="text-white/30">Personalized recommendations powered by AI</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-8 rounded-3xl glass-card bg-gradient-to-br from-emerald-900/20 to-emerald-900/5 border-emerald-500/10">
            <Sparkles className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Financial Health Score</h3>
            <div className="text-5xl font-display font-extrabold text-emerald-400 mb-2">82</div>
            <p className="text-sm text-white/40">Your score is excellent. Keep up the savings rate above 40% and your debt-to-income ratio will improve.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="p-8 rounded-3xl glass-card bg-gradient-to-br from-violet-900/20 to-violet-900/5 border-violet-500/10">
            <TrendingUp className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Monthly Forecast</h3>
            <div className="text-5xl font-display font-extrabold text-violet-400 mb-2">$2,200</div>
            <p className="text-sm text-white/40">Predicted surplus for August based on historical patterns. Consider allocating $500 to investments.</p>
          </motion.div>
        </div>

        <div className="p-8 rounded-3xl glass-card">
          <h2 className="text-xl font-bold text-white mb-6">Smart Recommendations</h2>
          <div className="space-y-4">
            {[
              { title: "Reduce Dining Out by 20%", desc: "You spent $712 on food this month. Reducing dining out could save $142/month.", tag: "Savings" },
              { title: "Rebalance Portfolio", desc: "Your ETF allocation is 68% of portfolio. Consider adding more diversification.", tag: "Investment" },
              { title: "Pay Off Credit Card", desc: "At 18.9% APR, paying off $2,840 saves $536/year in interest.", tag: "Debt" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.08] transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-rose-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 font-medium">{item.tag}</span>
                  </div>
                  <p className="text-sm text-white/30">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
