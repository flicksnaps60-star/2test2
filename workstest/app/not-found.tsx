import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500 via-indigo-500 to-rose-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/20">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-6xl font-display font-extrabold text-gradient mb-2">404</h1>
        <h2 className="text-xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-white/30 mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-white text-sm font-medium hover:glass-card-hover transition-all">
          Back Home
        </Link>
      </div>
    </div>
  );
}
