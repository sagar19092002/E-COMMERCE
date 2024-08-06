import React, { FC } from "react";

interface ColorProps {
  className?: string;
  colors: string[];
}

export const ColorPicker: FC<ColorProps> = ({ className, colors }) => (
  <div className={` ${className}`}>
    <div className="font-bold text-[14px]">Colors</div>
    <div className="mt-[20px] flex flex-cols-5 gap-3">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-button w-[30px] h-[30px] rounded-[20px] border-black border-[1px]"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  </div>
);
