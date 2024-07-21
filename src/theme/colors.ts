import { Colors } from "./types";

export const baseColors = {
  failure: "#ed4b4b",
  primary: "#ffffff",
  primaryBright: "#146c09",
  primaryDark: "#235094",
  secondary: "#235094",
  success: "#235094",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f8f8f8",
  backgroundDisabled: "#a8a8a8",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#235094",
  background: "#808080",
  backgroundDisabled: "#4b4e5a",
  contrast: "#FFFFFF",
  invertedContrast: "#212d46",
  input: "#0d1320",
  primaryDark: "#0098A1",
  tertiary: "#212d46",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#235094",
  card: "#151b28",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a3854 100%)",
  },
};
