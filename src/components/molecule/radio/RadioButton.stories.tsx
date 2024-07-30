// RadioButton.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import RadioButtonComponent from "./RadioButtonGroup";
import RadioButtonProps from "./RadioButtonGroupTypes";

export default {
  title: "RadioButton",
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: "text" },
    color: {
      control: "select",
      options: ["primary", "secondary", "default"],
    },
    options: {
      control: "object",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof RadioButtonComponent>;

const Template: StoryFn<RadioButtonProps> = (args) => (
  <RadioButtonComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Choose an option",
  color: "primary",
  options: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  disabled: false,
};
