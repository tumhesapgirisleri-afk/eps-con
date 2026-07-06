import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Globe, Check } from "lucide-react";
import { EpsLogo } from "@/components/eps-logo";
import { useLanguage, useT, LANGUAGES } from "@/i18n/language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useT();
  const { lang, setLang } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const nav = [
    { to: "/", label: t("Home", "Anasayfa") },
    { to: "/services", label: t("Services", "Hizmetler") },
    { to: "/facilities", label: t("Plant & Construction", "Tesis & İnşaat") },
    { to: "/projects", label: t("Projects", "Projeler") },
    { to: "/about", label: t("Company", "Kurumsal") },
    { to: "/contact", label: t("Contact", "İletişim") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <EpsLogo className="h-11 w-auto opacity-95 transition-opacity hover:opacity-100" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium tracking-wide transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus:outline-none"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5" />
              {current.label}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40">
              {LANGUAGES.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onSelect={() => setLang(l.code)}
                  className="flex items-center justify-between gap-3"
                >
                  <span>{l.name}</span>
                  {lang === l.code && <Check className="h-4 w-4 text-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/contact"
            className="hidden rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t("Contact Our Engineers", "Mühendislere ulaşın")}
          </Link>
          <button
            className="lg:hidden rounded-md border border-border p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-gradient-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("Contact Our Engineers", "Mühendislere ulaşın")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
