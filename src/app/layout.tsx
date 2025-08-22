import type { Metadata } from "next";
import "./globals.css";

import Toaster from "@/components/ui/toaster";      // default import
import { AuthProvider } from "@/providers/auth-provider"; // named import

export const metadata: Metadata = {
  title: "Lucrofy",
  description: "Sua plataforma de análise de lucro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-body antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
