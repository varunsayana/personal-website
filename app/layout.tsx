import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun's Portfolio",
  description: "Built by Varun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
