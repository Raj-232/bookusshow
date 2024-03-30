import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import NavBar from "@/layout/NavBar";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "BookUsShow",
  description: "Event Orginization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col h-screen">
          <NavBar />
          <main className="flex-1">
            <StoreProvider>
              {children}
            </StoreProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
