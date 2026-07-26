"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Is FinanceFlow AI really free?", a: "Yes! The Starter plan is completely free forever. It includes basic budget tracking, expense categorization, and monthly reports. Upgrade anytime for AI insights and unlimited transactions." },
  { q: "How secure is my financial data?", a: "We use bank-level AES-256 encryption. We never sell your data, and we don't store raw bank credentials — only encrypted tokens through our secure partner." },
  { q: "Can I import data from other apps?", a: "Yes! We support CSV import from Mint, YNAB, Copilot, and most other finance apps. You can also export your data anytime in CSV or PDF format." },
  { q: "Does it support multiple currencies?", a: "Absolutely. FinanceFlow supports over 150 currencies with real-time exchange rate updates via our financial data partners." },
  { q: "What platforms can I use it on?", a: "FinanceFlow works on web, iOS, Android, and as a PWA you can install on your desktop. Everything syncs instantly." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-center mb-4">
          <span className="text-gradient">Common Questions</span>
        </h2>
        <p className="text-white/30 text-center mb-16">Everything you need to know about FinanceFlow AI.</p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl glass-card overflow-hidden transition-all">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-semibold text-base">{faq.q}</span>
                <span className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-white/40 shrink-0 ml-4">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/40 text-sm leading-relaxed">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
