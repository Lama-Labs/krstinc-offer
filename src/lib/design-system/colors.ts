/**
 * Krštinc d.o.o. — Color Tokens
 * Source: Figma design system
 *
 * These tokens are the programmatic source of truth.
 * CSS variables in globals.css are derived from these values.
 */

export const colors = {
  primary: {
    red: "#ec1d24",
    orangeRed: "#f2551a",
    orange: "#f88b10",
  },

  neutral: {
    black: "#000000",
    blackDark: "#161616",
    font: "#2c2c2c",
    gray800: "#5e5e5e",
    gray700: "#666666",
    gray600: "#808080",
    gray400: "#a4a4a4",
    gray300: "#cccccc",
    gray200: "#d8d8d8",
    gray100: "#e5e5e5",
    gray50: "#e9e9e9",
    bgGray: "#f5f5f5",
    bgLight: "#f2f2f2",
    white: "#ffffff",
  },

  semantic: {
    error: "#ec1d24",
    focus: "#4394e7",
    success: "#27ae60",
    link: "#0074cc",
    visited: "#722599",
    pdf: "#cb0606",
    plenum: "#1f6246",
    orange: "#f2551a",
    amber: "#e69f27",
    brown: "#614533",
  },

  overlay: {
    black40: "rgba(0, 0, 0, 0.40)",
    black60: "rgba(0, 0, 0, 0.60)",
    black70: "rgba(0, 0, 0, 0.70)",
    black80: "rgba(0, 0, 0, 0.80)",
    white50: "rgba(255, 255, 255, 0.50)",
    white60: "rgba(255, 255, 255, 0.60)",
    gray40: "rgba(164, 164, 164, 0.40)",
  },

  brand: {
    rendamax: "#002f55",
    bosch: "#ea0117",
    unical: "#e41713",
    buderus: "#0060af",
    weishoupt: "#c50000",
  },

  gradients: {
    brand: "linear-gradient(to right, #ec1d24, #f2551a, #f88b10)",
    txe: "linear-gradient(to right, #f88b10, #ec1d24)",
    logoDefault: "linear-gradient(to right, #e10717, #fdc90a)",
  },

  navigation: {
    selected: "#ec1d24",
    hover: "#f2551a",
    dropdownBg: "#f5f5f5",
    dropdownBgHover: "#ffffff",
    dropdownDivider: "#cccccc",
    buttonBgDark: "#a4a4a4",
    buttonBgLight: "#f2f2f2",
  },

  form: {
    borderDefault: "#cccccc",
    borderHover: "#808080",
    borderFocus: "#4394e7",
    borderError: "#ec1d24",
    labelDefault: "#666666",
    labelHover: "#2c2c2c",
    labelError: "#ec1d24",
    labelFocus: "#4394e7",
    labelFilled: "#5e5e5e",
  },

  divider: {
    light: "#cccccc",
    dark: "#808080",
    footer: "rgba(128, 128, 128, 0.20)",
    grayBlock: "#2c2c2c",
    popup: "#e9e9e9",
  },
} as const;

export type Colors = typeof colors;
