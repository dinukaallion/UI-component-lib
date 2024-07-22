import { Button, CssBaseline, Radio, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
        <Button variant="text" color="warning">
          Text
        </Button>
        <Radio color="primary"/>
        <Radio color="secondary"/>
        <Typography variant="button">Content for button</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
