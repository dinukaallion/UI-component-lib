// Checkbox.stories.tsx

import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import CheckboxProps from './checkboxTypes';



const CheckboxComponent: React.FC<CheckboxProps> = ({ label, color, options, disabled }) => {
  const [checked, setChecked] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                color={color}
                value={option.value}
                checked={checked.includes(option.value)}
                onChange={handleChange}
                disabled={disabled}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxComponent
