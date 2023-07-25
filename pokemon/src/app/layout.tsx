import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokedex",
  description: "A pokedex app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
