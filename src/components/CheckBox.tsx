import React,{FC} from 'react';

interface CheckBoxProps{
  label:string;
  className?:string;
}

const CheckBox:FC<CheckBoxProps> = ({ label,className }) => {
  return (
    <div className="">
      <label className={`flex gap-x-1 ${className}`}>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckBox;
