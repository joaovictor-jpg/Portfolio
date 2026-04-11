import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { ReactNode } from "react";
import { theme } from "@/styles/theme";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
