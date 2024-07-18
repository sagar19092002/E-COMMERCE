import { FC, useState } from "react";

interface CollapseProps {
  title: string;
  children: any;
  className?:string;
}

export const Collapse: FC<CollapseProps> = ({ title, children,className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border border-gray-300 rounded-md mb-4 ${className}`}>
      <button
        className="w-full p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={toggleCollapse}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>
      {isOpen && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  );
};

