"use client";

import { ThemeProvider } from "next-themes";
import { ProfessionProvider } from "@/hooks/use-profession";
import { LayoutTransitionProvider } from "./layout-transition-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProfessionProvider>
        <LayoutTransitionProvider>{children}</LayoutTransitionProvider>
      </ProfessionProvider>
    </ThemeProvider>
  );
}