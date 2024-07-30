import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    focus: string;
    hover: string;
    selected: string;
    focusVisible: string;
    outlineBorder: string;
  }

  interface SimplePaletteColorOptions {
    focus?: string;
    hover?: string;
    selected?: string;
    focusVisible?: string;
    outlineBorder?: string;
  }
}
