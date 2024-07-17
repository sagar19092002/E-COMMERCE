import { FC } from 'react';
import Link from 'next/link';
import Search from '../components/Search';
import SearchImg from '../../public/Search (1).svg';
import Vector from "../../public/Vector.svg";
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

 export const NavBar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-around w-full bg-black h-[8%] fixed  ${className}`}>
      <div className="flex space-x-8 ml-[145px] justify-center h-full">
        <Link href="/e-commerce" className="text-white hover:bg-gray-700 h-full flex items-center">E-Commerce</Link>
        <Link href="/shop" className="text-white hover:bg-gray-700 h-full flex items-center">Shop</Link>
        <Link href="/stories" className="text-white hover:bg-gray-700 h-full flex items-center">Stories</Link>
        <Link href="/about" className="text-white hover:bg-gray-700 h-full flex items-center">About</Link>
      </div>
        <Search className='bg-black text-white' placeholder="Search" />
        <div className='flex'>
        <Image className='w-[18.04px] h-[21.01px] ml-[5px]' src={Vector} alt="Vector Icon" />
      <div className='ml-[7.72px] text-white'>3</div>
      <div className='ml-[22px] text-white mr-[141.25px]'>Login</div>
        </div>
    </div>
  );
}