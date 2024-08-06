import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      // Optional: You can configure specific a11y parameters here
    },
    docs: {
      description: {
        component: 'A customizable Material UI Button component with various features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    startIcon: {
      control: 'select',
      options: ['none', 'save', 'delete'],
    },
    endIcon: {
      control: 'select',
      options: ['none', 'save', 'delete'],
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

const Template: StoryFn<typeof Button> = (args) => {
  const startIconMap = {
    none: null,
    save: <SaveIcon />,
    delete: <DeleteIcon />,
  };
  const endIconMap = {
    none: null,
    save: <SaveIcon />,
    delete: <DeleteIcon />,
  };

  return (
    <Button
      {...args}
      startIcon={startIconMap[args.startIcon as keyof typeof startIconMap]}
      endIcon={endIconMap[args.endIcon as keyof typeof endIconMap]}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  children: 'Button',
  color: 'primary',
  size: 'medium',
  startIcon: 'none',
  endIcon: 'none',
  disabled: false,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  children: 'Loading...',
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  startIcon: 'save',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/XYZ123/ButtonDesign',
  },
};

export default meta;
