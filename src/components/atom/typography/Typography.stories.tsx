// Typography.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "@mui/material/Typography";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline";
  text: string;
}

const TypographyComponent: React.FC<TypographyProps> = ({ variant, text }) => {
  return <Typography variant={variant}>{text}</Typography>;
};

export default {
  title: "Typography",
  component: TypographyComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "overline",
      ],
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => (
  <TypographyComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "h1",
  text: "Typography Example",
};
