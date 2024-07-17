import React, { FC } from 'react';
import Link from 'next/link';
import Input from './Input'; // Ensure the path is correct based on your project structure

interface FooterProps {
  title: string;
  description: string;
  Field1: string;
  Field2: string;
  Field3: string;
  fields1: string[];
  fields2: string[];
  fields3: string[];
  className?:string;
}

export const Footer: FC<FooterProps> = ({ title, description, Field1, Field2, Field3, fields1, fields2, fields3 ,className}) => {
  return (
    <div className='w-full h-full bg-#EFF2F6'>
    <div className='flex mt-12 ml-36'>
      <div>
        {/* First Tag */}
        <div className='w-401px h-44px text-4xl font-normal'>{title}</div>
        <div className='mt-3 w-400px h-32px'>{description}</div>
        <div className=' mt-6 w-96 h-10 focus:border-black border-2 border-solid relative flex items-center'><Input className='focus:outline-none' type="email" placeholder="Enter email" />
        <button className='absolute w-400px h-32px text-sm mt-0 ml-80 justify-center'><b>Sign Up</b></button>
        </div>
      </div>
      <div className={'decoration-2 ml-20'}>
        {/* Second Tag */}
        <div><b>{Field1}</b></div>
        <div className='mt-3'>{fields1.map((field, index) => (
          <div key={index}>
            <Link href={"/" + field}>{field}</Link>
          </div>
        ))}</div>
      </div>
      <div className={'decoration-2 ml-20'}>
        {/* Third Tag */}
        <div className='decoration-2'><b>{Field2}</b></div>
        <div className='mt-3'>{fields2.map((field, index) => (
          <div key={index}><Link href={"/" + field}>{field}</Link></div>
        ))}</div>
      </div>
      <div className={'decoration-2 ml-20'}>
        {/* Fourth Tag */}
        <div className='decoration-2'><b>{Field3}</b></div>
        <div className='mt-3'>{fields3.map((field, index) => (
          <div key={index}><Link href={"/" + field}>{field}</Link></div>
        ))}</div>
      </div>
    </div>
    </div>
  );
}
