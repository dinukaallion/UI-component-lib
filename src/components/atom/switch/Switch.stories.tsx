import Switch from "@mui/material/Switch";
import { Meta, StoryFn } from "@storybook/react/*";

interface SwitchProps {
  checked: boolean;
  disabled: boolean;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
} satisfies Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
  disabled: false,
};

export default meta;
