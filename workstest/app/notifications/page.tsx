"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle, AlertTriangle, Info, Sparkles } from "lucide-react";
import { NOTIFICATIONS } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-rose-400 flex items-center justify-center shadow-xl shadow-violet-500/20">
            <Bell className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Notifications</h1>
            <p className="text-white/30">Stay updated on your finances</p>
          </div>
        </div>

        <div className="space-y-4">
          {NOTIFICATIONS.map((n, i) => {
            const Icon = n.type === "success" ? CheckCircle : n.type === "warning" ? AlertTriangle : n.type === "error" ? AlertTriangle : Info;
            const color = n.type === "success" ? "text-emerald-400" : n.type === "warning" ? "text-amber-400" : n.type === "error" ? "text-rose-400" : "text-violet-400";
            return (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-5 rounded-3xl glass-card flex gap-4 transition-all hover:glass-card-hover ${!n.read ? "border-violet-500/20" : ""}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0 ${!n.read ? "ring-1 ring-violet-500/20" : ""}`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">{n.title}</h3>
                    {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />}
                  </div>
                  <p className="text-sm text-white/40">{n.message}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
