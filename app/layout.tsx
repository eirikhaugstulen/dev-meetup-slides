import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Meetup - AI-assisted Development",
  description: "This is the presentation deck made for the developer meetup on October 9th, 2025, regarding AI-assisted Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
