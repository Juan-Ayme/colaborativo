import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurante de comidas",
  description: "En este restaurante se sirven comidas deliciosas",
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
