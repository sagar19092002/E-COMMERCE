import { FC } from 'react';

interface ColorProps {
  className?: string;
  colors: string[];
  onColorSelect: (color: string) => void;
}

export const ColorPicker: FC<ColorProps> = ({ className, colors, onColorSelect }) => (
  <div className={className}>
    <div className="font-bold text-[18px] opacity-50">Colors</div>
    <div className="mt-[20px] grid grid-cols-5 gap-3">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-button w-[30px] h-[30px] rounded-[20px] border-black border-[1px]"
          style={{ backgroundColor: color }}
          onClick={() => {console.log( color,'hello') ;onColorSelect(color)}}
        ></div>
      ))}
    </div>
  </div>
);
