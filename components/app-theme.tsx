"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { THEME_PALETTES } from "@/lib/theme-palettes";
import { cn } from "@/lib/utils";

type ThemeContextValue = {
  paletteIndex: number;
  setPaletteIndex: (i: number) => void;
  paletteId: string;
  paletteLabel: string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }
  return ctx;
}

function PaletteDock({
  paletteIndex,
  onSelect,
}: {
  paletteIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div
      className="fixed bottom-4 left-1/2 z-[60] flex max-w-[calc(100vw-1.25rem)] -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/70 bg-background/92 px-2.5 py-2 shadow-lg shadow-primary/10 backdrop-blur-md sm:gap-2 sm:px-3"
      data-theme-dock
      role="toolbar"
      aria-label="Палитра оформления"
    >
      <span className="hidden shrink-0 pl-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground sm:inline sm:text-[11px]">
        Цвет
      </span>
      <div className="flex max-w-[70vw] gap-1.5 overflow-x-auto py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none [&::-webkit-scrollbar]:hidden">
        {THEME_PALETTES.map((p, i) => {
          const active = i === paletteIndex;
          return (
            <button
              key={p.id}
              type="button"
              title={p.label}
              aria-label={`Палитра: ${p.label}`}
              aria-pressed={active}
              onClick={() => onSelect(i)}
              className={cn(
                "relative h-9 w-9 shrink-0 rounded-full border-2 shadow-md transition-all duration-200 sm:h-10 sm:w-10",
                active
                  ? "scale-110 border-foreground shadow-primary/25 ring-2 ring-ring ring-offset-2 ring-offset-background"
                  : "border-white/70 opacity-90 hover:scale-105 hover:opacity-100"
              )}
              style={{
                background: `linear-gradient(145deg, ${p.swatch[0]}, ${p.swatch[1]})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

type ProviderProps = { children: ReactNode };

export function AppThemeProvider({ children }: ProviderProps) {
  const [paletteIndex, setPaletteIndex] = useState(0);

  const style = useMemo(
    () => THEME_PALETTES[paletteIndex]?.style ?? THEME_PALETTES[0].style,
    [paletteIndex]
  );

  const entry = THEME_PALETTES[paletteIndex] ?? THEME_PALETTES[0];

  const setPaletteIndexSafe = useCallback((i: number) => {
    const n = THEME_PALETTES.length;
    if (n === 0) return;
    const j = ((i % n) + n) % n;
    setPaletteIndex(j);
  }, []);

  const ctx = useMemo(
    () => ({
      paletteIndex,
      setPaletteIndex: setPaletteIndexSafe,
      paletteId: entry.id,
      paletteLabel: entry.label,
    }),
    [paletteIndex, setPaletteIndexSafe, entry.id, entry.label]
  );

  return (
    <ThemeContext.Provider value={ctx}>
      <div
        className="flex min-h-screen flex-col bg-background text-foreground transition-[background,color,border-color] duration-500 ease-out"
        style={style}
      >
        {children}
        <PaletteDock
          paletteIndex={paletteIndex}
          onSelect={setPaletteIndexSafe}
        />
        <p
          className="pointer-events-none fixed bottom-[4.5rem] left-1/2 z-[55] -translate-x-1/2 px-3 text-center text-[10px] text-muted-foreground/85 sm:bottom-[4.75rem] sm:text-[11px]"
          aria-live="polite"
        >
          Палитра:{" "}
          <span className="font-medium text-foreground/90">{entry.label}</span>
        </p>
      </div>
    </ThemeContext.Provider>
  );
}
