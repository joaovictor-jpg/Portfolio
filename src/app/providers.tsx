"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode, useState } from "react";
import { theme } from "@/styles/theme";
import { Header } from "@/components/Header";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: Readonly<ProvidersProps>) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <MantineProvider theme={theme} forceColorScheme={colorScheme}>
      <ModalsProvider>
        <Notifications />
        <Header />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
