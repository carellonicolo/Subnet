import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Subnet Calculator | IPv4 & IPv6 Subnetting Tool",
  description: "Calcolatore professionale di subnet IPv4 e IPv6 con supporto VLSM, visualizzatore e export PDF. Perfetto per studenti e amministratori di rete.",
  keywords: ["subnet calculator", "VLSM", "IPv4", "IPv6", "CIDR", "subnetting", "network", "calcolo subnet"],
  openGraph: {
    title: "Subnet Calculator | IPv4 & IPv6",
    description: "Calcolatore professionale di subnet con VLSM, visualizzatore e export PDF.",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
