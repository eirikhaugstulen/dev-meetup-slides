import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Meetup Slides",
  description: "Presentation deck for the developer meetup.",
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
