import { MantineColorsTuple } from "@mantine/core";

export interface ThemeColors {
  primary: MantineColorsTuple;
  secondary: MantineColorsTuple;
  tertiary: MantineColorsTuple;
  neutral: MantineColorsTuple;
  success: MantineColorsTuple;
  warning: MantineColorsTuple;
  error: MantineColorsTuple;
  gray: MantineColorsTuple;
}

export type ThemeColorName = keyof ThemeColors;

export const portfolioColors: ThemeColors = {
  primary: [
    "#EEF0FF",
    "#E0E2FF",
    "#C7CAFF",
    "#A5A9FF",
    "#858AFF",
    "#6366F1",
    "#5558E6",
    "#4F46E5",
    "#3F39C9",
    "#2E2AA3",
  ],
  secondary: [
    "#F6ECFF",
    "#EBD9FF",
    "#D9B8FF",
    "#C696FF",
    "#B373FF",
    "#9333EA",
    "#8428D8",
    "#741FC3",
    "#5D179D",
    "#451177",
  ],
  tertiary: [
    "#FFEAF4",
    "#FFD4E9",
    "#FFADD3",
    "#FF85BD",
    "#F85FA6",
    "#DB2777",
    "#C21F69",
    "#A61A5B",
    "#7E1444",
    "#570E2E",
  ],
  neutral: [
    "#FCFCFD",
    "#F6F6F8",
    "#ECECF0",
    "#E4E4E8",
    "#D1D1D6",
    "#A1A1AA",
    "#71717A",
    "#52525B",
    "#3F3F46",
    "#27272A",
  ],
  success: [
    "#ECFDF5",
    "#D1FAE5",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#059669",
    "#047857",
    "#065F46",
    "#064E3B",
  ],
  warning: [
    "#FFF7ED",
    "#FFEDD5",
    "#FED7AA",
    "#FDBA74",
    "#FB923C",
    "#F97316",
    "#EA580C",
    "#C2410C",
    "#9A3412",
    "#7C2D12",
  ],
  error: [
    "#FFF1F2",
    "#FFE4E6",
    "#FECDD3",
    "#FDA4AF",
    "#FB7185",
    "#D4183D",
    "#BE123C",
    "#9F1239",
    "#881337",
    "#4C0519",
  ],
  gray: [
    "#F4F4F5",
    "#E4E4E7",
    "#D4D4D8",
    "#A1A1AA",
    "#71717A",
    "#52525B",
    "#3F3F46",
    "#27272A",
    "#18181B",
    "#09090B",
  ],
};

export const themesMap = {
    Portfolio: portfolioColors
}

export type ThemeName = keyof typeof themesMap;
