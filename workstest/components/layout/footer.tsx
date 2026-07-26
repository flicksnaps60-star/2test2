import { Sparkles, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent via-black/30 to-black/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Finance<span className="text-gradient">Flow</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium AI-powered finance tracking. Build wealth, control spending, and secure your future with elegant design.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Product</h4>
            <ul className="space-y-3">
              {["Dashboard", "Budget", "Expenses", "Investments", "AI Insights"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Press Kit", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Connect</h4>
            <div className="flex gap-3 mb-6">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:glass-card-hover transition-all" aria-label="Social link">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/20">© 2026 FinanceFlow AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
