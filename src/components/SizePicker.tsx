import { FC, useState } from "react";

interface SizeProps {
  className?: string;
  sizes?: string[];
  onSizeSelect?: (size: string) => void;
}

export const SizePicker: FC<SizeProps> = ({
  className = "",
  sizes = [],
  onSizeSelect,
}) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size);
    }
  };

  return (
    <div>
      <div className="font-normal text-[18px] m-1.5 text-[#000000] opacity-50">
        Size
      </div>
      <div className={`${!className ? "flex gap-3 mt-[11px]" : className}`}>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`w-[50px] h-[50px] border-[1px] cursor-pointer m-1.5 flex items-center justify-center ${
              selectedSize === size
                ? "border-[black] bg-[white] text-[black]"
                : "border-gray-300"
            }`}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};
