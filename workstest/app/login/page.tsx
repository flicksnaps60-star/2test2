"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6 lg:px-10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-indigo-900/20 via-violet-900/10 to-rose-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="flex items-center gap-2.5 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-xl shadow-indigo-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-bold text-white">Finance<span className="text-gradient">Flow</span></span>
        </Link>

        <div className="rounded-[2.5rem] glass-card p-8 lg:p-10">
          <h1 className="text-3xl font-display font-bold text-white mb-2">Welcome back</h1>
          <p className="text-white/30 text-sm mb-8">Sign in to access your dashboard and insights.</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/50 mb-2">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3.5 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all" />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-white/50 mb-2">Password</label>
              <input id="password" type={show ? "text" : "password"} placeholder="Enter your password" className="w-full px-4 py-3.5 rounded-2xl glass-card text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all pr-12" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 translate-y-[-2px] text-white/20 hover:text-white/40 transition-colors">
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-white/30">Don't have an account? <Link href="/signup" className="text-violet-400 hover:text-violet-300 font-medium">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
