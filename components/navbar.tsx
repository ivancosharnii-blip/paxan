"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SoftClose, SoftLogoChart, SoftMenu } from "@/components/soft-icons";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Обо мне", href: "#about", mark: "О" },
  { label: "Услуги", href: "#services", mark: "У" },
  { label: "Кейсы", href: "#cases", mark: "К" },
  { label: "Навыки", href: "#skills", mark: "Н" },
  { label: "Контакты", href: "#contact", mark: "@" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/35 ring-2 ring-white/45">
            <SoftLogoChart className="text-primary-foreground" />
          </div>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Иван <span className="text-primary">Кошарный</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-primary/10 text-xs font-bold text-primary shadow-inner ring-1 ring-primary/20"
                  aria-hidden
                >
                  {item.mark}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contact">Связаться</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full bg-muted/90 ring-1 ring-border/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <SoftClose /> : <SoftMenu />}
        </Button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-border bg-background transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-[28rem] border-b" : "max-h-0 border-b-0"
        )}
      >
        <ul className="container mx-auto flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-primary/10 text-sm font-bold text-primary shadow-inner ring-1 ring-primary/20"
                  aria-hidden
                >
                  {item.mark}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Связаться
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
