"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Command } from "lucide-react";
import Link from "next/link";

const commands = [
  { label: "Dashboard", href: "/dashboard", desc: "Overview of your finances" },
  { label: "Budget", href: "/budget", desc: "Track monthly budgets" },
  { label: "Expenses", href: "/expense", desc: "Review spending" },
  { label: "Income", href: "/income", desc: "Track revenue" },
  { label: "Savings", href: "/savings", desc: "Goals progress" },
  { label: "Investments", href: "/investment", desc: "Portfolio overview" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white shadow-2xl shadow-violet-500/20 hover:glass-card-hover transition-all hover:scale-105">
        <Command className="w-6 h-6" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xl flex items-start justify-center pt-[20vh] px-6" onClick={() => setOpen(false)}>
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.2 }} className="w-full max-w-xl rounded-3xl glass-card overflow-hidden shadow-2xl shadow-violet-900/30" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <Search className="w-5 h-5 text-white/20" />
                <input autoFocus className="flex-1 bg-transparent text-white placeholder-white/20 outline-none text-lg" placeholder="Search pages..." value={query} onChange={e => setQuery(e.target.value)} />
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md bg-white/[0.05] text-white/20 text-xs">Ctrl K</kbd>
              </div>
              <div className="max-h-[50vh] overflow-y-auto py-2">
                {filtered.map(cmd => (
                  <Link key={cmd.href} href={cmd.href} onClick={() => setOpen(false)} className="flex items-center gap-4 px-5 py-3 hover:bg-white/[0.03] transition-colors group">
                    <div className="w-2 h-2 rounded-full bg-violet-400/40 group-hover:bg-violet-400 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{cmd.label}</p>
                      <p className="text-xs text-white/20">{cmd.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-white/30 transition-colors" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
