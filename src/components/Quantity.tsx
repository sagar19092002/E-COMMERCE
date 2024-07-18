import React, { useState } from "react";

interface QuantityProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
  className?:string;
}

export const Quantity: React.FC<QuantityProps> = ({
  min = 1,
  max = 100,
  onChange,
  className
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      if (onChange) onChange(quantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
      if (onChange) onChange(quantity);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      if (onChange) {
        onChange(value);
      }
    }
  };

  return (
    <div className={`flex w-20 items-center justify-center border-[1px] border-[black] px-4 py-2 ${className}`}>
      <div onClick={handleDecrement} className=" text-gray-700 cursor-pointer">
        -
      </div>
      <input
        type="string"
        value={quantity}
        onChange={handleChange}
        className="w-10 text-center flex justify-center items-center"
        min={min}
        max={max}
      />
      <div onClick={handleIncrement} className=" text-gray-700 cursor-pointer">
        +
      </div>
    </div>
  );
};
