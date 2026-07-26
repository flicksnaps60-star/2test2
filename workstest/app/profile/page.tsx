"use client";

import { User, Shield, Globe, Bell, CreditCard } from "lucide-react";
import { CURRENT_USER } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 lg:px-10 py-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-rose-500 flex items-center justify-center shadow-xl shadow-violet-500/20">
            <User className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white">Profile</h1>
            <p className="text-white/30">Manage your account details</p>
          </div>
        </div>

        <div className="rounded-3xl glass-card p-8 mb-6">
          <div className="flex items-center gap-6 mb-8">
            <img src={CURRENT_USER.avatar} alt="Profile" className="w-20 h-20 rounded-2xl ring-2 ring-white/10 object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-white">{CURRENT_USER.name}</h2>
              <p className="text-white/30">{CURRENT_USER.email}</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-rose-500/20 text-violet-200 text-xs font-semibold border border-violet-500/10">{CURRENT_USER.plan}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <Shield className="w-5 h-5 text-violet-400" />
              <div>
                <p className="text-sm font-medium text-white">Account Security</p>
                <p className="text-xs text-white/20">Two-factor authentication enabled</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <Globe className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">Language</p>
                <p className="text-xs text-white/20">English (US)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <Bell className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-sm font-medium text-white">Notifications</p>
                <p className="text-xs text-white/20">All notifications enabled</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03]">
              <CreditCard className="w-5 h-5 text-rose-400" />
              <div>
                <p className="text-sm font-medium text-white">Subscription</p>
                <p className="text-xs text-white/20">Pro Plan · $12/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
