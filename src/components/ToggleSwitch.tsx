import React, { FC, useState } from 'react';

interface ToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: string;
  className?:string;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ isOn, handleToggle, onColor = "bg-blue-500", className }) => {
  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${isOn ? onColor : "bg-gray-300"}`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? "translate-x-6" : ""}`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
