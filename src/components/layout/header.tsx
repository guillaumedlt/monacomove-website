"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 pt-3">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/[0.03] border border-border-default"
            : "bg-white/50 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="text-lg font-bold tracking-tight text-text-primary">
          Monaco<span className="text-accent">Move</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navigation.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(group.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={group.href}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium text-text-secondary hover:text-text-primary hover:bg-surface transition-all"
              >
                {group.label}
                {group.items.length > 0 && (
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === group.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {group.items.length > 0 && activeMenu === group.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-52 rounded-2xl bg-white p-2 shadow-xl shadow-black/[0.08] border border-border-default">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 text-[13px] text-text-secondary hover:bg-surface hover:text-text-primary transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button href="/outils/test-eligibilite" size="sm">Commencer</Button>
          </div>
          <button
            className="lg:hidden p-2 rounded-full text-text-primary hover:bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-white/95 backdrop-blur-xl overflow-y-auto rounded-t-3xl">
          <nav className="p-6 space-y-1">
            {navigation.map((group) => (
              <MobileNavGroup key={group.label} group={group} onNavigate={() => setMobileOpen(false)} />
            ))}
            <div className="pt-6">
              <Button href="/outils/test-eligibilite" size="lg" className="w-full">Commencer gratuitement</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavGroup({ group, onNavigate }: { group: (typeof navigation)[0]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  if (group.items.length === 0) {
    return (
      <Link href={group.href} onClick={onNavigate} className="block rounded-2xl px-4 py-3.5 text-[15px] font-medium text-text-primary hover:bg-surface transition-colors">
        {group.label}
      </Link>
    );
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-text-primary hover:bg-surface transition-colors">
        {group.label}
        <ChevronDown className={`h-4 w-4 text-text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-4 space-y-0.5 pb-2">
          {group.items.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} className="block rounded-xl px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
