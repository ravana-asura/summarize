import type { Metadata } from "next";
import {DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmsans=DM_Sans({
  subsets: ["latin"],
 
});
export const metadata: Metadata = {
  title: "Summarize",
  description: "Summarize your pdf with the power of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dmsans.classname antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          </ThemeProvider>
       
      </body>
    </html>
  );
}
