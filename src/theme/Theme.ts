import { createTheme } from "@mantine/core";
import { portfolioColors } from "./themeVariable";

export const theme = createTheme({
  black: "#0A0A14",
  white: "#fafaff",
  autoContrast: true,
  cursorType: "pointer",
  defaultGradient: { from: "primary", to: "secondary" },
  primaryColor: "primary",
  colors: { ...portfolioColors },
});
