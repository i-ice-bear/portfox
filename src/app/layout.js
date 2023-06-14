import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anshu's Portfolio",
  description:
    "This is my portfolio where i described about my all skill sets with the help of my javascript skills in order to build this beautiful web-page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
