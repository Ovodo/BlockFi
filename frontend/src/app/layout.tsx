import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import App from "@/components/App";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlockFinance",
  description:
    "An example application to show how to use several charts in a nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-platinum flex w-full h-screen items-center justify-center`}
      >
        <SideBar />
        <App>{children}</App>
      </body>
    </html>
  );
}
