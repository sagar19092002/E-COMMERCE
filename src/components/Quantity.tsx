import React, { useState } from "react";

interface QuantityProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export const Quantity: React.FC<QuantityProps> = ({
  min = 1,
  max = 100,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity+1);
      if (onChange) onChange(quantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity-1);
      if (onChange) onChange(quantity);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      if (onChange) {onChange(value)};
    }
  };

  return (
    <div className="flex w-20 items-center">
      <button
        onClick={handleDecrement}
        className="bg-gray-200 text-gray-700 w-10 rounded-l"
        disabled={quantity <= min}
      >
        -
      </button>
      <input
        type="string"
        value={quantity}
        onChange={handleChange}
        className="w-10 text-center flex justify-center items-center"
        min={min}
        max={max}
      />
      <button
        onClick={handleIncrement}
        className="bg-gray-200 text-gray-700 w-10 rounded-r"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

