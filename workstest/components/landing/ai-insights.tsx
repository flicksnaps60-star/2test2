"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight } from "lucide-react";

export default function AIInsights() {
  return (
    <section id="ai-insights" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-transparent blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-16 bg-gradient-to-br from-indigo-950/60 via-violet-950/40 to-rose-950/30 border border-white/5">
          {/* Decorative dots */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-rose-400 flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/30"
              >
                <BrainCircuit className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6">
                <span className="text-white">AI That</span>
                <br />
                <span className="text-gradient">Understands You</span>
              </h2>

              <p className="text-white/40 text-lg leading-relaxed mb-8">
                Our AI analyzes your spending patterns, predicts future expenses, and provides personalized recommendations to help you reach your goals faster. It learns from you continuously.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Spending pattern analysis with weekly summaries",
                  "Predictive forecasting for upcoming expenses",
                  "Personalized savings recommendations",
                  "Investment risk analysis and portfolio suggestions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all">
                Try AI Insights <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-violet-900/20">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop" alt="AI Insights" className="w-full h-auto" />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/30 to-indigo-500/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
