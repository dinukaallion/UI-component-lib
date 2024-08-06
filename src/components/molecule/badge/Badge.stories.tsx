import { Badge } from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface BadgeProps {
  badgeContent: number;
  color: "primary" | "secondary" | "warning";
  iconType: "Mail" | "ShoppingCart";
  invisible: boolean;
  variant: "dot" | "standard";
  overlap: "circular" | "rectangular";
}

const meta: Meta<BadgeProps> = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "warning"],
    },
    iconType: {
      control: "select",
      options: ["Mail", "ShoppingCart"],
      description: "Select the icon to display inside the badge",
      defaultValue: "Mail",
    },
    variant: {
      control: "select",
      options: ["dot", "standard"],
    },
    overlap: {
      control: "select",
      options: ["circular", "rectangular"],
    },
  },
} satisfies Meta<BadgeProps>;

const Template: StoryFn<BadgeProps> = ({
  badgeContent,
  color,
  iconType,
  invisible,
  variant,
  overlap
}) => {
  let icon;

  switch (iconType) {
    case "Mail":
      icon = <MailIcon color="action" />;
      break;
    case "ShoppingCart":
      icon = <ShoppingCartIcon />;
      break;
    default:
      icon = null;
  }

  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      invisible={invisible}
      variant={variant}
      overlap={overlap}>
      {icon}
    </Badge>
  );
};

export const Default = Template.bind({});
Default.args = {
  badgeContent: 4,
  color: "primary",
  iconType: "Mail",
  invisible: true,
};

export default meta;
