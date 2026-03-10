"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-default transition-all duration-300 ${
        scrolled ? "h-14 shadow-[0_1px_3px_rgba(0,0,0,0.04)]" : "h-16"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight text-text-primary">
          MonacoMove
        </Link>

        {/* Desktop nav */}
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
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {group.label}
                {group.items.length > 0 && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      activeMenu === group.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {group.items.length > 0 && activeMenu === group.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 rounded-xl border border-border-default bg-white p-2 shadow-lg shadow-black/[0.04] animate-in fade-in slide-in-from-top-1 duration-200">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
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

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-sm font-medium text-text-muted cursor-pointer hover:text-text-primary transition-colors">
            FR
          </span>
          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              Nous contacter
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-40 bg-white overflow-y-auto">
          <nav className="p-4 space-y-1">
            {navigation.map((group) => (
              <MobileNavGroup
                key={group.label}
                group={group}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <div className="pt-4 border-t border-border-default mt-4">
              <Button href="/outils/test-eligibilite" size="lg" className="w-full">
                Tester mon éligibilité
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileNavGroup({
  group,
  onNavigate,
}: {
  group: (typeof navigation)[0];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (group.items.length === 0) {
    return (
      <Link
        href={group.href}
        onClick={onNavigate}
        className="block rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-surface transition-colors"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-surface transition-colors"
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 text-text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="ml-3 space-y-1 pb-2">
          <Link
            href={group.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2 text-sm font-medium text-monaco-500 hover:bg-monaco-50 transition-colors"
          >
            Vue d&apos;ensemble
          </Link>
          {group.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface hover:text-text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
