import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Flex, Title } from "@mantine/core";
import styles from "./Header.module.css";
import { Nav } from "@/components/Nav";

export function Header() {

  return (
    <Flex className={styles.header}>
      <Title order={1}>JVM</Title>
      <Flex><Nav /></Flex>
      <ThemeSwitch />
    </Flex>
  );
}
