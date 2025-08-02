

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Up&Grow — Бизнес‑планы, Финансовые модели и Аналитика",
  description:
    "Up&Grow — профессиональные бизнес‑планы, финансовые модели и маркетинговые исследования. 16+ лет опыта, более 230 реализованных проектов и 2,45 млн $ привлеченных инвестиций. Помогаем запускать и развивать бизнес грамотно.",
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
