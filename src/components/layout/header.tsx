"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navigation } from "@/lib/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "h-14 bg-white/80 backdrop-blur-xl border-b border-border-default shadow-sm"
          : "h-16 bg-dark"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
        >
          Monaco<span className={scrolled ? "text-monaco-500" : "text-monaco-400"}>Move</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(group.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={group.href}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-text-secondary hover:text-text-primary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {group.label}
                {group.items.length > 0 && (
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeMenu === group.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {group.items.length > 0 && activeMenu === group.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-52 rounded-lg border border-border-default bg-white p-1.5 shadow-xl shadow-black/10">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-text-secondary hover:bg-surface-tertiary hover:text-text-primary transition-colors"
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center gap-2 rounded-lg px-4 h-9 text-sm font-medium transition-all duration-500 ${
              scrolled
                ? "bg-monaco-500 text-white hover:bg-monaco-600"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
            }`}
          >
            Nous contacter
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-text-primary" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-40 bg-white overflow-y-auto">
          <nav className="p-4 space-y-1">
            {navigation.map((group) => (
              <MobileNavGroup key={group.label} group={group} onNavigate={() => setMobileOpen(false)} />
            ))}
            <div className="pt-4 border-t border-border-default mt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-monaco-500 text-white font-medium text-[15px]"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
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
      <Link href={group.href} onClick={onNavigate} className="block px-3 py-3 text-base font-medium text-text-primary hover:bg-surface-tertiary rounded-lg transition-colors">
        {group.label}
      </Link>
    );
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-text-primary hover:bg-surface-tertiary rounded-lg transition-colors">
        {group.label}
        <ChevronDown className={`h-4 w-4 text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 space-y-0.5 pb-2">
          {group.items.map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} className="block px-3 py-2 text-sm text-text-secondary hover:text-text-primary rounded-md transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
