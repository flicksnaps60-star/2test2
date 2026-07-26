"use client";

import { useState } from "react";
import { Settings, Moon, Sun, Monitor } from "lucide-react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center shadow-xl shadow-amber-500/20">
            <Settings className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Settings</h1>
            <p className="text-white/30">Customize your experience</p>
          </div>
        </div>

        <div className="rounded-3xl glass-card p-8">
          <h2 className="text-xl font-bold text-white mb-6">Theme</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Dark", desc: "Deep space theme", icon: Moon, value: "dark", active: theme === "dark" },
              { label: "Light", desc: "Clean and bright", icon: Sun, value: "light", active: theme === "light" },
              { label: "System", desc: "Follow OS preference", icon: Monitor, value: "system", active: theme === "system" },
            ].map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`p-5 rounded-2xl border transition-all text-left ${t.active ? "bg-white/[0.08] border-violet-500/30 shadow-lg shadow-violet-500/10" : "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1]"}`}
              >
                <t.icon className={`w-6 h-6 mb-3 ${t.active ? "text-violet-400" : "text-white/30"}`} />
                <h3 className="font-semibold text-white">{t.label}</h3>
                <p className="text-xs text-white/20">{t.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
