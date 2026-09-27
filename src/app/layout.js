import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Redux/Provaidar";
import AppShell from "./Comnonent/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechLearning — Practical Tech Skills & Career Accelerator",
  description: "Master modern software engineering, web development, UI/UX, and freelance skills with industry mentors and guaranteed career placement support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07090e] text-slate-100 min-h-screen`}
      >
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}