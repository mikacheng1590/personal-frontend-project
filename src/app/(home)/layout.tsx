import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import '../globals.css';
import '../home.css';

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mika Cheng",
  description: "Something about Mika Cheng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
