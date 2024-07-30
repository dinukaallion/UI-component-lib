import { Button, ButtonGroup } from "@mui/material";

const meta = {
  title: "Button Groups",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export const ContainedButtonGroup = () => (
  <ButtonGroup orientation="vertical">
    <Button variant="contained" color="secondary">SOme Button</Button>
    <Button variant="outlined">SOme Button</Button>
    <Button variant="text">SOme Button</Button>
  </ButtonGroup>
);

export default meta;
