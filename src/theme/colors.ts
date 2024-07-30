import { common } from "@mui/material/colors";
import { alpha, PaletteOptions } from "@mui/material/styles";

const primaryColor = "#1976d2";
const colorPalette: PaletteOptions = {
  background: {
    // default: "#7b1fa2",
    paper: "#64b5f6",
  },
  common: {
    black: common.black,
    white: common.white,
  },
  action: {
    active: "#263238",
    hover: "#37474f",
    selected: "#455a64",
    disabledBackground: "#546e7a",
    focus: "#607d8b",
    disabled: "#78909c",
  },
  divider: "#37474f",
  text: {
    primary: "#263238",
    secondary: "#455a64",
    disabled: "#607d8b",
  },
  primary: {
    main: primaryColor,
    dark: "#0d47a1",
    light: "#64b5f6",
    contrastText: "#e3f2fd",
    focus: alpha(primaryColor, 0.12),
    hover: alpha(primaryColor, 0.04),
    selected: alpha(primaryColor, 0.08),
    focusVisible: alpha(primaryColor, 0.3),
    outlineBorder: alpha(primaryColor, 0.5),
  },
  secondary: { main: "#7b1fa2", dark: "#4a148c", light: "#ba68c8" },
  success: { main: "#00897b", dark: "#004d40", light: "#80cbc4" },
  info: { main: "#cddc39", dark: "#827717", light: "#f0f4c3" },
  error: { main: "#e53935", dark: "#b71c1c", light: "#e57373" },
  warning: { main: "#ff1744", dark: "#d50000", light: "#ff8a80" },
};

export default colorPalette;
