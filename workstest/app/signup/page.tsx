"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 lg:px-10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[60vw] rounded-full bg-gradient-to-t from-violet-900/20 via-indigo-900/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="flex items-center gap-2.5 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-xl shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-bold text-white">Finance<span className="text-gradient">Flow</span></span>
        </Link>

        <div className="rounded-[2.5rem] glass-card p-8 lg:p-10">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Get Started</h1>
          <p className="text-white/30 text-sm mb-8">Create your account and start tracking in minutes.</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First name" className="px-4 py-3 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all" />
              <input type="text" placeholder="Last name" className="px-4 py-3 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all" />
            </div>
            <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all" />
            <input type="password" placeholder="Create a password" className="w-full px-4 py-3 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all" />
            <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-white/30">Already have an account? <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
