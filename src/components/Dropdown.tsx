import { FC } from "react";

interface DropdownProps {
  options: string[];
  className?:string;
}

export const Dropdown: FC<DropdownProps> = ({ options,className }) => {
  return (
    <div className={`${className}`}>
      <select>
        <option value="" disabled selected hidden>
          Please Choose...
        </option>
        {options.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
