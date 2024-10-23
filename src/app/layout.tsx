import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mikuy",
  description: "Mikuy es una plataforma para compartir alimentos sobrantes de forma segura y ecológica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titleFont.className}>{children}</body>
    </html>
  );
}
