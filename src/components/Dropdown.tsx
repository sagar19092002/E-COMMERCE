import React,{FC} from 'react'

interface DropdownProps{
  options:string[];
}

export const Dropdown:FC<DropdownProps>=({options})=> {
  return (
    <div>
      <select>
        {options.map((item,index)=>(
          <div key={index}>{item}</div>
        ))}
    </select>
    </div>
  )
}

