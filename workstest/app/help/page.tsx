"use client";

import { useState } from "react";
import { HelpCircle, Search, ChevronRight } from "lucide-react";

const categories = ["Getting Started", "Features", "Account", "Billing", "Security"];
const faqItems = [
  { q: "How do I connect my bank account?", a: "Go to Settings > Accounts > Connect Bank. We use secure encrypted connections through our banking partner." },
  { q: "Can I export my data?", a: "Yes. Visit Reports to download PDF or CSV exports of any time period." },
  { q: "Is my data secure?", a: "Yes. We use bank-level AES-256 encryption. We never sell or share your data." },
];

export default function HelpPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl shadow-cyan-500/20">
            <HelpCircle className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Help Center</h1>
            <p className="text-white/30">Find answers and get support</p>
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input
            type="text"
            placeholder="Search help articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all text-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {categories.map((cat) => (
            <a key={cat} href="#" className="p-5 rounded-2xl glass-card hover:glass-card-hover transition-all flex items-center justify-between group">
              <span className="text-white font-medium">{cat}</span>
              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/40 transition-colors" />
            </a>
          ))}
        </div>

        <div className="rounded-3xl glass-card overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/[0.02]">
            <h2 className="text-sm font-bold text-white">Frequently Asked</h2>
          </div>
          {faqItems.map((item, i) => (
            <div key={i} className="p-5 border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
              <h3 className="text-white font-medium mb-2">{item.q}</h3>
              <p className="text-sm text-white/30">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
