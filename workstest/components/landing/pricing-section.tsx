"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for individuals just getting started with budgeting.",
    features: [
      "Basic budget tracking",
      "Expense categorization",
      "Monthly reports",
      "Up to 50 transactions",
      "Mobile access",
    ],
    popular: false,
    color: "from-indigo-400 to-violet-400",
    btnClass: "glass-card text-white hover:glass-card-hover",
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    desc: "For serious savers and investors who want AI insights.",
    features: [
      "Unlimited transactions",
      "AI financial insights",
      "Investment tracking",
      "Savings goals",
      "Debt tracker",
      "Bill reminders",
      "Priority support",
      "Export to CSV/PDF",
    ],
    popular: true,
    color: "from-violet-400 to-rose-400",
    btnClass: "bg-gradient-to-r from-violet-500 to-rose-500 text-white shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40",
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    desc: "For families and businesses with complex financial needs.",
    features: [
      "Everything in Pro",
      "Multi-user accounts",
      "Advanced forecasting",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
      "White-label options",
    ],
    popular: false,
    color: "from-amber-400 to-rose-400",
    btnClass: "glass-card text-white hover:glass-card-hover",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vw] rounded-full bg-gradient-to-b from-indigo-900/20 via-violet-900/10 to-transparent blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            <span className="text-gradient">Simple, Transparent</span> Pricing
          </h2>
          <p className="text-white/30 max-w-xl mx-auto">Start free. Upgrade when you need more power. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-[2.5rem] p-8 lg:p-10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.05] hover:border-white/[0.1] transition-all ${plan.popular ? "shadow-2xl shadow-violet-900/20 scale-[1.02]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500 to-rose-500 text-white text-xs font-bold shadow-lg shadow-violet-500/20 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-display font-extrabold text-white">{plan.price}</span>
                <span className="text-white/30 text-sm">{plan.period}</span>
              </div>
              <p className="text-white/30 text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/signup" className={`block text-center py-3.5 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 ${plan.btnClass}`}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
