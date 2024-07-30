export default interface RadioButtonProps {
    label: string;
    color: "primary" | "secondary" | "default";
    options: { value: string; label: string }[];
    disabled: boolean;
  }


  