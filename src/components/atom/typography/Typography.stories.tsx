import ComponentTypography from "./ComponentTypography";
import type {Meta } from "@storybook/react"

const meta = {
  title: "Typography",
  component: ComponentTypography,
  tags: ["autodocs"],
  
} satisfies Meta<typeof ComponentTypography> ;
export default meta;

export const H1Typography = () => (
  <ComponentTypography content="typography content for H1" type="h1" />
);
export const H2Typography = () => (
  <ComponentTypography content="typography content for H2" type="h2" />
);
export const H3Typography = () => (
  <ComponentTypography content="typography content for H3" type="h3" />
);
export const H4Typography = () => (
  <ComponentTypography content="typography content for H4" type="h4" />
);
export const H5Typography = () => (
  <ComponentTypography content="typography content for H5" type="h5" />
);
export const H6Typography = () => (
  <ComponentTypography content="typography content for H6" type="h6" />
);
export const Subtitle1Typography = () => (
  <ComponentTypography
    content="typography content for subtitle1"
    type="subtitle1"
  />
);
export const Subtitle2Typography = () => (
  <ComponentTypography
    content="typography content for subtitle2"
    type="subtitle2"
  />
);
export const Body1Typography = () => (
  <ComponentTypography content="typography content for body1" type="body1" />
);
export const Body2Typography = () => (
  <ComponentTypography content="typography content for body2" type="body2" />
);
export const ButtonTypography = () => (
  <ComponentTypography content="typography content for button" type="button" />
);
export const CaptionTypography = () => (
  <ComponentTypography
    content="typography content for caption"
    type="caption"
  />
);
export const OverlineTypography = () => (
  <ComponentTypography
    content="typography content for overline"
    type="overline"
  />
);
