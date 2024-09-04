"use client";
import StoreProvider from "./StoreProvider";
import { IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from "next/font/google";

const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <div
        style={ibm.style}
        className='w-full md:w-[85%] bg-platinum h-screen overflow-y-scroll'
      >
        {children}
      </div>
    </StoreProvider>
  );
}
