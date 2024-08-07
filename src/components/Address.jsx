import React from 'react'
import {Input} from './Input';
import {Button} from './Button';
import {CheckBox} from './CheckBox';
import { Dropdown } from './Dropdown';

export const Address = () => {
  return (
    <div className='w-[50%] h-[100vh] flex flex-col items-center'>
     <div className=''>
         <div className='font-normal text-[20px]'>Shipping Information</div>
      <div className='flex flex-col mt-[12px] gap-[10px]'>
        <div className='flex gap-2'>
            <Input className='font-normal text-[14px] p-4' placeholder='FirstName'/>
            <Input className='font-normal text-[14px] p-4' placeholder='LastName'/>
        </div>
        <Input className='font-normal text-[14px] p-4' placeholder='Address'/>
        <Input className='font-normal text-[14px] p-4' placeholder='Apartment,suite,etc(optional)'/>
        <Input className='font-normal text-[14px] p-4' placeholder='City'/>
        <div className='flex gap-3'>
            <Dropdown className='font-normal text-[14px] p-4' placeholder='Country'/>
            <Dropdown className='font-normal text-[14px] p-4' placeholder='City'/>
            <Input className='font-normal text-[14px] p-4' placeholder='Zipcode'/>
        </div>
        <Input className='font-normal text-[14px] p-4' placeholder='Optional'/>
      </div>
      <CheckBox className='mt-[25px] p-4' placeholder='Save contact information'/>
      <Button className='font-normal text-[14px] bg-black text-[white] mt-[30px] p-4' buttonName='Continue to shipping'/></div>
    </div>
  )
}

