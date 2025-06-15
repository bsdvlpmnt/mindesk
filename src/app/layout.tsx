import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mindesk",
  description: "Have a good day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
