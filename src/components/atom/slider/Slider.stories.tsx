import Slider from "@mui/material/Slider";
import { Meta, StoryFn } from "@storybook/react/*";

type sliderMarksType = {
  value: number;
  label: string;
};
interface SliderProps {
  disableSwap: boolean;
  marks?: Array<sliderMarksType>;
  max: number;
  min: number;
  disable: boolean;
  defaultValue: number;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  orientation?: "horizontal" | "vertical";
  "aria-label": string;
}

const meta = {
  title: "Slider",
  component: Slider,
  tags:["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
  },
} satisfies Meta<typeof Slider>;




const Template: StoryFn<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  "aria-label": "Always visible",
  defaultValue: 10,
  min: 10,
  max: 100,
  disableSwap: false,
  orientation: "horizontal",
};

export const Temp = Template.bind({});
Temp.args = {
  ...Default.args,
  marks: [
    {
      value: 20,
      label: "20°C",
    },
    {
      value: 37,
      label: "37°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ],
};

export default meta;
