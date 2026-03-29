import { cn } from "@/lib/utils";

type IconProps = { className?: string };

/** Логотип: мягкие скруглённые столбики */
export function SoftLogoChart({ className }: IconProps) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="4" y="17" width="7" height="11" rx="3" className="fill-current opacity-95" />
      <rect
        x="12.5"
        y="11"
        width="7"
        height="17"
        rx="3"
        className="fill-current opacity-85"
      />
      <rect x="21" y="6" width="7" height="22" rx="3" className="fill-current opacity-75" />
    </svg>
  );
}

/** Три аккуратные «таблетки» */
export function SoftMenu({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="6" width="16" height="3.2" rx="1.6" className="fill-current" />
      <rect
        x="4"
        y="10.4"
        width="16"
        height="3.2"
        rx="1.6"
        className="fill-current opacity-85"
      />
      <rect
        x="4"
        y="14.8"
        width="16"
        height="3.2"
        rx="1.6"
        className="fill-current opacity-70"
      />
    </svg>
  );
}

/** Две пухлые линии */
export function SoftClose({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 6.5 L17.5 17.5"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M17.5 6.5 L6.5 17.5"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type SoftServiceKind = "analytics" | "doc" | "process" | "dashboard";

export function SoftServiceIcon({
  kind,
  className,
}: {
  kind: SoftServiceKind;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-muted text-primary shadow-inner shadow-primary/10 ring-1 ring-primary/15",
        className
      )}
    >
      {kind === "analytics" && (
        <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="6" y="22" width="7" height="12" rx="3" className="fill-primary/90" />
          <rect x="16.5" y="14" width="7" height="20" rx="3" className="fill-primary/75" />
          <rect x="27" y="8" width="7" height="26" rx="3" className="fill-primary/60" />
        </svg>
      )}
      {kind === "doc" && (
        <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="8" y="6" width="24" height="28" rx="5" className="fill-primary/25" />
          <rect x="12" y="12" width="16" height="3.5" rx="1.75" className="fill-primary/55" />
          <rect x="12" y="19" width="12" height="3.5" rx="1.75" className="fill-primary/40" />
          <rect x="12" y="26" width="14" height="3.5" rx="1.75" className="fill-primary/30" />
          <circle cx="30" cy="11" r="5" className="fill-primary/35" />
        </svg>
      )}
      {kind === "process" && (
        <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" aria-hidden>
          <circle cx="10" cy="20" r="6" className="fill-primary/80" />
          <circle cx="30" cy="12" r="5.5" className="fill-primary/55" />
          <circle cx="30" cy="28" r="5.5" className="fill-primary/55" />
          <path
            d="M16 19 Q22 14 24 13"
            className="stroke-primary/40"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M16 21 Q22 26 24 27"
            className="stroke-primary/40"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}
      {kind === "dashboard" && (
        <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none" aria-hidden>
          <rect x="6" y="6" width="12" height="12" rx="4" className="fill-primary/70" />
          <rect x="22" y="6" width="12" height="12" rx="4" className="fill-primary/45" />
          <rect x="6" y="22" width="12" height="12" rx="4" className="fill-primary/50" />
          <rect x="22" y="22" width="12" height="12" rx="4" className="fill-primary/35" />
        </svg>
      )}
    </div>
  );
}
