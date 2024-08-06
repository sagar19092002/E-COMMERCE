import { FC, useState } from "react";

interface SizeProps {
  className?: string;
  sizes?: string[];
  onSizeSelect?: () => void;
}

export const SizePicker: FC<SizeProps> = ({
  className,
  sizes,
}) => {
  const [selectedSize, setSelectedSize] = useState("");

  const onSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className={`${className}`}>
      {sizes?.map((size: any, index: any) => (
        <button
          key={index}
          className={
            selectedSize === size
              ? "bg-[black] text-[white] w-10 h-10 border border-black cursor-pointer m-1.5"
              : ""
          }
          onClick={() => onSizeSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};
