import React, { FC } from 'react';

interface SizeProps {
  className?: string;
  sizes: string[];
  onSizeSelect?: (size: string) => void;
}

export const SizePicker: FC<SizeProps> = ({ className, sizes, onSizeSelect }) => (
  <div className={className}>
    {sizes.map((size, index) => (
      <button
        key={index}
        style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer', margin: '5px' }}
        onClick={() => onSizeSelect?.(size)}
      >
        {size}
      </button>
    ))}
  </div>
);

