"use client";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode, useState } from "react";
import { theme } from "@/styles/theme";

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
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 999,
          }}
        >
          Toggle
        </button>

        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
