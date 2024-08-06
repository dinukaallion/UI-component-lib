// CustomGrid.tsx

import React from "react";
import { Grid, Paper, Box } from "@mui/material";

interface CustomGridProps {
  container?: boolean;
  spacing?: number;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

const CustomGrid: React.FC<CustomGridProps> = ({
  container = true,
  spacing = 2,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  wrap = "wrap",
}) => (
  <Grid
    container={container}
    spacing={spacing}
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
    wrap={wrap}>
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        <Box p={2}>Item 1</Box>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        <Box p={2}>Item 2</Box>
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        <Box p={2}>Item 3</Box>
      </Paper>
    </Grid>
  </Grid>
);

export default CustomGrid;
