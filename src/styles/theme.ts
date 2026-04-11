import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    primary: [
      "#E6EEF8",
      "#C2D6F0",
      "#9BBCE7",
      "#73A1DE",
      "#4F89D6",
      "#2E5A9B",
      "#254A80",
      "#1C3A66",
      "#142A4D",
      "#0B1A33",
    ],

    secondary: [
      "#E6FAFF",
      "#BFF1FF",
      "#94E7FF",
      "#66DCFF",
      "#33D1FF",
      "#00D4FF",
      "#00A9CC",
      "#007F99",
      "#005566",
      "#002B33",
    ],

    tertiary: [
      "#E6F2FF",
      "#BFD9FF",
      "#94BFFF",
      "#66A6FF",
      "#338CFF",
      "#007BFF",
      "#0062CC",
      "#004A99",
      "#003166",
      "#001933",
    ],

    gray: [
      "#F5F7FA",
      "#E4E7EB",
      "#CBD2D9",
      "#9AA5B1",
      "#7B8794",
      "#5F6C7B",
      "#3E4C59",
      "#323F4B",
      "#1F2933",
      "#0B1117",
    ],
  },

  primaryColor: "primary",

  fontFamily: "Inter, sans-serif",

  headings: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
  },

  radius: {
    md: "10px",
  },

  defaultRadius: "md",
});
