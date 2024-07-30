import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import RadioButtonProps from "./RadioButtonGroupTypes";


const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  label,
  color,
  options,
  disabled,
}) => {
  const [value, setValue] = React.useState(options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup value={value} onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color={color} disabled={disabled} />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
 
export default RadioButtonComponent;
