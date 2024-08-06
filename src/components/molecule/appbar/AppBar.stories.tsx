// src/stories/AppBar.stories.tsx
import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import AppBarComponent from './AppBar';
import { AppBarProps } from './AppBarProps';

export default {
  title: 'Example/AppBar',
  component: AppBarComponent,
  argTypes: {
    title: { control: 'text' },
    position: { 
      control: 'select',
      options: ['fixed', 'absolute', 'sticky', 'static', 'relative'],
    },
    color: { 
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'default', 'transparent'],
    },
    children: { control: 'text' },
  },
} as Meta<typeof AppBarComponent>;

const Template: StoryFn<typeof AppBarComponent> = (args: AppBarProps) => <AppBarComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'App Bar Title',
  position: 'static',
  color: 'primary',
  children: 'Additional content',
};
