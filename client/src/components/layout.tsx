import { Link, useLocation } from "wouter";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground pb-20 md:pb-0">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-6 sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
          ELITE.
        </div>
        <div className="flex gap-8">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <a className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}>
                  <Icon size={18} />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-orange-400" />
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-6 md:pt-10 max-w-6xl animate-in fade-in duration-500 slide-in-from-bottom-4">
        {children}
      </main>

      {/* Mobile Navigation (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-white/10 z-50 pb-safe">
        <div className="flex justify-around items-center p-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <a className="flex flex-col items-center gap-1 p-2 relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={24} className={cn("transition-colors relative z-10", isActive ? "text-primary" : "text-muted-foreground")} />
                  <span className={cn("text-[10px] font-medium relative z-10", isActive ? "text-primary" : "text-muted-foreground")}>
                    {item.label}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
