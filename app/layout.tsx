
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DARLING in the FRANXX: Resonance of the Soul",
  description: "The official landing page for the continuation of the legend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
