import { TextField } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react/*";

interface TextFieldProps {
  required?: boolean;
  disable?: boolean;
  variant: "filled" | "standard"| "outlined";
  label: string;
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  focused: boolean;
  type: string,
  multiline:boolean,
  rows?: number,
  placeholder?:string,
  fullWidth:boolean,
  size:"medium"
}

const meta = {
  title: "Text Field",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "standard", "outlined"],
    },
    color:{
        control:"select",
        options:["primary","secondary","error","info","success","warning"]
    },
    type:{
        control:"select",
        options:["password", "search"]
    }, 
    size:{
        control:"select",
        options:["medium", "small"] 
    }
  },
} satisfies Meta<typeof TextField>;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  required: true,
  multiline:false,
  rows:1,
  label: "Typography Example",
  placeholder:"Sample placeholder",
  fullWidth: false
};

export default meta;
