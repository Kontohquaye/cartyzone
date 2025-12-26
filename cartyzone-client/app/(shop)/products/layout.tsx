import React from "react";
import Navbar from "@/app/components/Navbar";
import { SiteFooter } from "@/app/components/Footer";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="store-layout">
      <Navbar />
      {children}
      <SiteFooter />
    </main>
  );
}
