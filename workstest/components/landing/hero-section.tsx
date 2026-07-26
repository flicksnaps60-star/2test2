"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, -40, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-rose-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 60, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-tl from-emerald-600/20 via-cyan-600/20 to-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[40%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-violet-500/10 blur-[100px]"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Text */}
          <motion.div style={{ y, opacity }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white/70">New AI Financial Insights</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/40" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8">
              <span className="block text-white">Take Control</span>
              <span className="block text-gradient">Of Your Money</span>
              <span className="block text-white/30 text-4xl sm:text-5xl lg:text-6xl mt-2">Like Never Before</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/50 leading-relaxed mb-10 max-w-lg">
              AI-powered finance tracking that helps you budget, save, invest, and grow your wealth with stunning design and intelligent predictions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-rose-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                Start Free <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass-card text-white font-medium hover:glass-card-hover transition-all duration-300"
              >
                <Play className="w-4 h-4" /> Watch Demo
              </Link>
            </div>
          </motion.div>

          {/* Right: Animated Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&h=650&fit=crop"
                alt="Dashboard"
                className="w-full h-auto object-cover"
              />
              {/* Floating stats card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 glass-card rounded-2xl p-4 w-48 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-white/40 font-medium">Net Worth</span>
                </div>
                <p className="text-2xl font-bold text-white">$284,500</p>
                <p className="text-xs text-emerald-400 font-medium">+12.4% this month</p>
              </motion.div>
              {/* Floating chart card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 left-6 glass-card rounded-2xl p-4 w-56 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">Growth</span>
                </div>
                <div className="flex items-end gap-2 h-12">
                  {[40, 55, 48, 72, 65, 85, 78, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 4 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 rounded-full bg-gradient-to-t from-indigo-500/60 to-violet-400/80"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
