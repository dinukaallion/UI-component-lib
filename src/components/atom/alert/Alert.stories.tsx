import { Alert } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react/*";

interface AlertProps {
  variant: "outlined" | "filled";
  severity: "success" | "info" | "error" | "warning";
  children: React.ReactNode;
}

const meta = {
  title: "Alert",
  component: Alert,
  tags:["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "filled"],
    },
    severity: {
      control: "select",
      options: ["success", "info", "error", "warning"],
    },
  },
} satisfies Meta<typeof Alert>;

const Template: StoryFn<AlertProps> = (args) => (
  <Alert {...args}>{args.children}</Alert>
);


export const Default = Template.bind({});
Default.args = {
  children: "Some text",
};

export default meta;
