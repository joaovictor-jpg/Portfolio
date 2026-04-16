"use client";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { Switch, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <Switch size="md" />;
  }
  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="md"
      onLabel={
        <IconSunFilled size={16} color="var(--mantine-color-yellow-4)" />
      }
      offLabel={
        <IconMoonFilled size={16} color="var(--mantine-color-blue-6)" />
      }
      color={colorScheme === "dark" ? "gray" : "dark"}
    />
  );
}