import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import { AppThemeProvider } from "@/components/app-theme";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Иван Кошарный — бизнес-аналитик",
  description:
    "Портфолио бизнес-аналитика: данные, требования, процессы и отчётность.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AppThemeProvider>
          <Navbar />
          <div className="flex flex-1 flex-col pt-16">{children}</div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
