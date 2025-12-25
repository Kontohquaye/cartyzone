import React from "react";
import Navbar from "../components/Navbar";
import { SiteFooter } from "../components/Footer";

export default function StoreLayout({
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
