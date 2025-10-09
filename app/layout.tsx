import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Meetup - AI-assisted Development",
  description: "This is the presentation deck made for the developer meetup on October 9th, 2025, regarding AI-assisted Development. (Desktop only)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="hidden lg:block">{children}</div>
        <div className="lg:hidden flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="text-3xl font-semibold">Desktop Only</h1>
          <p className="text-lg text-muted-foreground">
            This presentation is designed for desktop displays. Please view it on a device with a larger
            screen.
          </p>
        </div>
      </body>
    </html>
  );
}
