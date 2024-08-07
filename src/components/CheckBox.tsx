import React,{FC} from 'react';

interface CheckBoxProps{
  label:string;
  className?:string;
  onClick:(label:string)=>void;
}

export const CheckBox:FC<CheckBoxProps> = ({ label,className,onClick }) => {
  return (
    <div onClick={()=>onClick(label)}>
      <label className={`flex gap-x-1 ${className}`}>
        <input type="checkbox" />
        <span className='font-normal text-[13px]'>{label}</span>
      </label>
    </div>
  );
};

