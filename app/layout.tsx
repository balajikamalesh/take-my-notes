import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TakeMyNotes",
  description: "Note taking made easy!!",
  icons: {
    icon: [
      {
        url: "/next.svg",
        href: "/next.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="takemynotes-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
