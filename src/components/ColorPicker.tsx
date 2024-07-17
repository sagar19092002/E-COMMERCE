import React, { FC } from 'react';

interface ColorProps {
  className?: string;
  colors: string[];
}

export const ColorPicker: FC<ColorProps> = ({ className, colors }) => (
  <div className={className}>
    {colors.map((color, index) => (
      <button
        key={index}
        className=''
      >{color}</button>
    ))}
  </div>
);
