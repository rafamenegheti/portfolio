import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Atmosphere from "@/components/Atmosphere";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rafael Menegheti — Full Stack Developer",
  description:
    "Personal portfolio showcasing full-stack development projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('theme');
                const theme = localStorage.getItem('portfolio-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  if (!theme) localStorage.setItem('portfolio-theme', 'dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M4YG7K2VF9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M4YG7K2VF9');
          `}
        </Script>
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              <Atmosphere />
              <ScrollProgress />
              {children}
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
