import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokeswar | Software Engineer",
  description: "Portfolio of Lokeswar, a Full-Stack Software Engineer specializing in modern web development.",
  openGraph: {
    title: "Lokeswar | Software Engineer",
    description: "Portfolio of Lokeswar, a Full-Stack Software Engineer.",
    url: "https://example.com",
    siteName: "Lokeswar Portfolio",
    images: [
      {
        url: "https://example.com/og.png",
        width: 1200,
        height: 630,
        alt: "Lokeswar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background text-foreground selection:bg-primary/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}