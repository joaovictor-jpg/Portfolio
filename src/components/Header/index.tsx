import { Flex, NavLink, Switch, Title } from "@mantine/core";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import styles from "./Header.module.css";

const data = ["About", "Skills", "Projects", "Contact"];

export function Header() {
  const links = data.map((item, index) => (
    <NavLink key={`${item}-${index}`} label={item} />
  ));

  return (
    <Flex className={styles.header}>
      <Title order={1}>JVM</Title>
      <Flex>{links}</Flex>
      <Switch
        size="md"
        color="dark.4"
        onLabel={
          <IconSunFilled size={16} color="var(--mantine-color-yellow-4)" />
        }
        offLabel={
          <IconMoonFilled size={16} color="var(--mantine-color-blue-6)" />
        }
      />
    </Flex>
  );
}
