import { theme } from "@/theme/Theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A portfolio website showcasing my projects, skills, and contact information.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const cookieStore = await cookies();
  const cookieScheme = cookieStore.get("mantine-color-scheme")?.value as
    | "light"
    | "dark"
    | undefined;

  const colorScheme = cookieScheme ?? "dark";

  return (
    <html lang="en" data-mantine-color-scheme={colorScheme}>
      <head>
        <ColorSchemeScript
          defaultColorScheme={colorScheme}
          forceColorScheme={colorScheme}
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
