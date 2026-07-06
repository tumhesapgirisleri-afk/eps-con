import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  to,
  href,
  children,
  className,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5",
    className,
  );
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <Link to={to ?? "/"} className={cls}>{children}</Link>;
}

export function GhostButton({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-steel sm:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:text-sm">
        {label}
      </div>
    </div>
  );
}
