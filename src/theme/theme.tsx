import { createTheme } from "@mui/material";
import typographyTypes from "./typography";
import colorPalette from "./colors";
import shadows from "./shadows";
// src/theme/palette.d.ts

const theme = createTheme({
  palette: colorPalette,
  typography: typographyTypes,
  shadows: shadows,
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          '&:not(:last-of-type)': {
            margin: '8px', // Adjust the margin as needed
          },
        },
      },
    },
  },
});

export default theme;
