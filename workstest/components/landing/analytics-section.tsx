"use client";

import { motion } from "framer-motion";
import { PieChart, LineChart, BarChart3, Activity } from "lucide-react";

const analytics = [
  { icon: PieChart, title: "Category Breakdown", desc: "Visualize where your money goes with interactive donut charts." },
  { icon: LineChart, title: "Monthly Trends", desc: "Track income and expense trends across any time period." },
  { icon: BarChart3, title: "Yearly Analysis", desc: "Compare this year to previous years with beautiful bar charts." },
  { icon: Activity, title: "Heat Maps", desc: "See daily spending patterns with calendar heat maps." },
];

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            <span className="text-gradient">Analytics</span> That Speak
          </h2>
          <p className="text-white/30 max-w-xl mx-auto">Deep insights into every aspect of your financial life, presented with beautiful interactive charts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {analytics.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-3xl glass-card hover:glass-card-hover transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <a.icon className="w-7 h-7 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
