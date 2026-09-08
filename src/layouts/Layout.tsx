import { type ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CookiePreferenceCenter } from "../components/CookiePreferenceCenter";
import { ScrollToTop } from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookiePreferenceCenter />
    </div>
  );
}
