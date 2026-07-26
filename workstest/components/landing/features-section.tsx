"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingUp, Shield, BarChart3, Zap, Sparkles } from "lucide-react";

const features = [
  { icon: Wallet, title: "Smart Budgeting", desc: "AI-powered budgets that adapt to your lifestyle with real-time tracking.", color: "from-rose-500 to-orange-400" },
  { icon: TrendingUp, title: "Expense Intelligence", desc: "Categorize transactions automatically with machine learning accuracy.", color: "from-amber-400 to-yellow-300" },
  { icon: Shield, title: "Savings Goals", desc: "Track multiple goals with timelines, milestones, and progress analytics.", color: "from-emerald-400 to-cyan-300" },
  { icon: BarChart3, title: "Investment Tracking", desc: "Real-time portfolio analytics with risk analysis and predictions.", color: "from-indigo-400 to-violet-300" },
  { icon: Zap, title: "AI Insights", desc: "Personalized recommendations that help you grow wealth faster.", color: "from-violet-400 to-fuchsia-300" },
  { icon: Sparkles, title: "Financial Health", desc: "Get a personalized health score with actionable improvement steps.", color: "from-cyan-400 to-blue-300" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6"
          >
            <span className="text-white">Everything You Need</span>
            <br />
            <span className="text-gradient">To Master Your Money</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            From budgets to investments, our AI-driven platform handles the complexity so you can focus on your goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-3xl glass-card hover:glass-card-hover transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
