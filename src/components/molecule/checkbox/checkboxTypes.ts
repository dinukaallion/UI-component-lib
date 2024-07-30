export default interface CheckboxProps {
    label: string;
    color: 'primary' | 'secondary' | 'default';
    options: { value: string; label: string }[];
    disabled: boolean;
  }