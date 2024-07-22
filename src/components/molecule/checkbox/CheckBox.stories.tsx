import { Meta, StoryFn } from '@storybook/react';
import CheckboxComponent from './CheckBox';
import CheckboxProps from './checkboxTypes';

export default {
    title: 'Checkbox',
    component: CheckboxComponent,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      color: {
        control: 'select',
        options: ['primary', 'secondary', 'default'],
      },
      options: {
        control: 'object',
      },
      disabled: {
        control: 'boolean',
      },
    },
  } satisfies Meta<typeof CheckboxComponent>;
  
  const Template: StoryFn<CheckboxProps> = (args) => <CheckboxComponent {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    label: 'Choose options',
    color: 'primary',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    disabled: false,
  };
  