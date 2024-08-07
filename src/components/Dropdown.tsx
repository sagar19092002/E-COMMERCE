import { FC } from "react";

interface DropdownProps {
  options: string[];
  className?: string;
  isPlaceholder?: boolean;
  placeholder?:string;
}

export const Dropdown: FC<DropdownProps> = ({
  options= ["Mern", "full stack", "ml", "ds"],
  className,
  isPlaceholder = false,
  placeholder
}) => {

  return (
    <div className={``}>
      <select className={` border-[black] border-[1px] ${className}`}>
        {isPlaceholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
