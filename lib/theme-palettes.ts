import type { CSSProperties } from "react";

export type ThemePaletteEntry = {
  id: string;
  label: string;
  /** Градиент на кнопке-«иконочке» переключателя */
  swatch: readonly [string, string];
  style: CSSProperties;
};

function vars(v: Record<string, string>): CSSProperties {
  const out: Record<string, string> = {};
  for (const [k, val] of Object.entries(v)) {
    out[`--${k}`] = val;
  }
  return out as CSSProperties;
}

/** Единая тёплая система: персик, латте, карамель, роза, какао, мёд */
export const THEME_PALETTES: ThemePaletteEntry[] = [
  {
    id: "peach",
    label: "Персик",
    swatch: ["#ffe4d9", "#c65d48"],
    style: vars({
      background: "#fff5f2",
      foreground: "#342524",
      primary: "#c65d48",
      "primary-foreground": "#fff8f6",
      muted: "#fdeae4",
      "muted-foreground": "#6b534e",
      border: "#f0c9bc",
      accent: "#fff0ea",
      "accent-foreground": "#4a3532",
      ring: "#e8927a",
    }),
  },
  {
    id: "latte",
    label: "Латте",
    swatch: ["#f5ebe0", "#8b5e3c"],
    style: vars({
      background: "#faf6f0",
      foreground: "#2c2520",
      primary: "#8b5e3c",
      "primary-foreground": "#fff9f3",
      muted: "#f0e6db",
      "muted-foreground": "#5c4d42",
      border: "#e0d0c0",
      accent: "#f5ebe0",
      "accent-foreground": "#3d322a",
      ring: "#a67c52",
    }),
  },
  {
    id: "caramel",
    label: "Карамель",
    swatch: ["#ffeacc", "#b45309"],
    style: vars({
      background: "#fffaf3",
      foreground: "#3d2f1f",
      primary: "#b45309",
      "primary-foreground": "#fffbeb",
      muted: "#fff0da",
      "muted-foreground": "#7c4a12",
      border: "#f3d5a5",
      accent: "#fff0da",
      "accent-foreground": "#422006",
      ring: "#d97706",
    }),
  },
  {
    id: "rose",
    label: "Пыльная роза",
    swatch: ["#ffdce5", "#b84d67"],
    style: vars({
      background: "#fff5f8",
      foreground: "#3b2430",
      primary: "#b84d67",
      "primary-foreground": "#fff5f7",
      muted: "#ffe4ec",
      "muted-foreground": "#7a3d52",
      border: "#f3b8c8",
      accent: "#ffe4ec",
      "accent-foreground": "#461f2d",
      ring: "#e87996",
    }),
  },
  {
    id: "cocoa",
    label: "Какао",
    swatch: ["#5c4a42", "#e8a88c"],
    style: vars({
      background: "#2a2320",
      foreground: "#faf4ef",
      primary: "#e8a88c",
      "primary-foreground": "#3b241c",
      muted: "#3d3430",
      "muted-foreground": "#d6cbc4",
      border: "#524640",
      accent: "#3d3430",
      "accent-foreground": "#fef3eb",
      ring: "#f0b9a0",
    }),
  },
  {
    id: "honey",
    label: "Мёд",
    swatch: ["#fff2c9", "#c27803"],
    style: vars({
      background: "#fffbf2",
      foreground: "#3b2f12",
      primary: "#c27803",
      "primary-foreground": "#fffbeb",
      muted: "#fff2d6",
      "muted-foreground": "#7d5209",
      border: "#f4d88a",
      accent: "#fff0c2",
      "accent-foreground": "#422006",
      ring: "#eab308",
    }),
  },
];
