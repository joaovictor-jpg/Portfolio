import { Burger, Flex, Switch, Title } from "@mantine/core";
import { IconMoon, IconSunLow } from '@tabler/icons-react';

export function Header() {
    return (
        <Flex>
            <Title order={1}>Portfolio</Title>
            <Switch size="md" onLabel={<IconSunLow />} offLabel={<IconMoon />} />
            <Burger aria-label="Toggle navigation" title="Hamburger menu" />
        </Flex>
    )
}