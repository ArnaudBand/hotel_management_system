import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hotel Management System",
  description: "Manage your hotel with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
