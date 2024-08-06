// src/stories/Accordion.stories.tsx
import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import AccordionComponent from "./Accordion";
import { AccordionProps } from "./AccordionProps";

export default {
  title: "Accordion",
  tags:["autodocs"],
  component: AccordionComponent,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    expanded: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof AccordionComponent>;

const Template: StoryFn<typeof AccordionComponent> = (args: AccordionProps) => (
  <AccordionComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Accordion Title",
  content:
    "Accordion content goes here. This is the detailed content of the accordion.",
  expanded: false,
  disabled: false,
};
