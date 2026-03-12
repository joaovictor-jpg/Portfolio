import { Burger, Flex, Switch, Title } from "@mantine/core";
import { IconMoon, IconSunLow } from "@tabler/icons-react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <Flex className={styles.header}>
      <Title order={1} className={styles.title}>Portfólio</Title>
      <Flex className={styles.menu}>
        <Switch size="md" onLabel={<IconSunLow />} offLabel={<IconMoon />} />
        <Burger aria-label="Toggle navigation" title="Hamburger menu" />
      </Flex>
    </Flex>
  );
}
