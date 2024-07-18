// import { FC } from "react";

// interface SizeProps {
//   className?: string;
//   sizes: string[];
//   onSizeSelect?: (size: string) => void;
// }

// export const SizePicker: FC<SizeProps> = ({
//   className,
//   sizes,
//   onSizeSelect,
// }) => (
//   <div className={className}>
//     {sizes.map((size, index) => (
//       <button
//         key={index}
//         style={{
//           width: "40px",
//           height: "40px",
//           border: "1px solid black",
//           cursor: "pointer",
//           margin: "5px",
//         }}
//         onClick={() => onSizeSelect}
//       >
//         {size}
//       </button>
//     ))}
//   </div>
// );

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
