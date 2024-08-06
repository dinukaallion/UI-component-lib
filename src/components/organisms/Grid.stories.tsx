// Grid.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomGrid from './CustomGridComponent';

const meta: Meta<typeof CustomGrid> = {
  title: 'Grid',
  component: CustomGrid,
  argTypes: {
    container: {
      control: 'boolean',
      defaultValue: true,
    },
    spacing: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      defaultValue: 2,
    },
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      defaultValue: 'row',
    },
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      defaultValue: 'flex-start',
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      defaultValue: 'stretch',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      defaultValue: 'wrap',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A customizable Material UI Grid component with various features.',
      },
    },
  },
};

const Template: StoryFn<typeof CustomGrid> = (args) => <CustomGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  container: true,
  spacing: 2,
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  wrap: 'wrap',
};

export const CustomSpacing = Template.bind({});
CustomSpacing.args = {
  ...Default.args,
  spacing: 4,
};

export const RowReverse = Template.bind({});
RowReverse.args = {
  ...Default.args,
  direction: 'row-reverse',
};

export const Column = Template.bind({});
Column.args = {
  ...Default.args,
  direction: 'column',
};

export const ColumnReverse = Template.bind({});
ColumnReverse.args = {
  ...Default.args,
  direction: 'column-reverse',
};

export default meta;
