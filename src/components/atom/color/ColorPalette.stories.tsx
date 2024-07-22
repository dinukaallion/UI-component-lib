// ColorPalette.stories.tsx

import React, { useState } from 'react';
import { Meta, StoryFn  } from '@storybook/react';
import { SwatchesPicker, ColorResult } from 'react-color';
import { JSX } from 'react/jsx-runtime';

interface ColorPaletteProps {
  colors: string[][];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<ColorResult | null>(null);

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <SwatchesPicker colors={colors} onChangeComplete={handleColorChange} />
      {selectedColor && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Hex:</strong> {selectedColor.hex}</p>
          <p>
            <strong>RGB:</strong> {selectedColor.rgb.r}, {selectedColor.rgb.g}, {selectedColor.rgb.b}
          </p>
        </div>
      )}
    </div>
  );
};

export default {
  title: 'ColorPalette',
  component: ColorPalette,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn <ColorPaletteProps> = (args: JSX.IntrinsicAttributes & ColorPaletteProps) => <ColorPalette {...args} />;

export const Default = Template.bind({});
Default.args = {
  colors: [
    ['#FF0000', '#FF6666', '#FF9999'],
    ['#00FF00', '#66FF66', '#99FF99'],
    ['#0000FF', '#6666FF', '#9999FF'],
    // Add more colors and shades as needed
  ],
};
