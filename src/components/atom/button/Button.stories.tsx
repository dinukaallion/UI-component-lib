// Button.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '@mui/material/Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    children: {
      control: 'text',
    },
    color:{
        control:"select",
        options: ['primary', 'secondary', 'warning'],
    }
  },
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  children: 'Button',
};

export default meta;
