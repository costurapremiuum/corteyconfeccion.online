import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academia Costura Premium",
  description: "Plataforma educativa premium de corte y confección",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
