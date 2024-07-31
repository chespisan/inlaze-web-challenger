import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "app/styles/globals.scss";
import { HeaderComponent } from "app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INLAZE Movies",
  description: "Challenger by Inlaze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
