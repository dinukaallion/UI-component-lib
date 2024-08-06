import { Meta, StoryFn } from "@storybook/react/*";
import AlertDialog from "./DialogBox";
import AlertBoxProps from "./DialogBoxProps";

const meta = {
  title: "DialogBox",
  component: AlertDialog,
  argTypes: {
    buttonVariant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },

    buttonColor: {
      control: "select",
      options: ["primary", "secondary", "warning"],
    },
  },
} satisfies Meta<typeof AlertDialog>;

const Template: StoryFn<AlertBoxProps> = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Some text",
  description: "Some description",
  buttonTitle: "button title",
  buttonFailMessage: "Fail",
  buttonSucessMessage: "sucess",
};

export default meta;
