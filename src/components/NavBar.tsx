import { FC } from "react";
import Link from "next/link";
import { Search } from "../components/Search";
import Vector from "../../public/Vector.svg";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
  const navItems = [
    {
      title: "E-Commerce",
      ref: "e-commerce",
    },
    {
      title: "Shop",
      ref: "e-commerce",
    },
    {
      title: "Stories",
      ref: "e-commerce",
    },
    {
      title: "About",
      ref: "e-commerce",
    },
  ];
  return (
    <div
      className={`flex items-center justify-between w-full bg-black h-[8%] fixed ${className}`}
    >
      <div className="flex space-x-8 ml-[145px] items-center justify-center h-full text-[17px]">
        {navItems.map((item, index) => {
          return (
            <Link href={item?.ref} className="text-white hover:bg-gray-700">
              {item?.title}
            </Link>
          );
        })}
        {/* <Link href="/e-commerce" className="text-white hover:bg-gray-700">
          E-Commerce
        </Link>
        <Link href="/ForgotPassword" className="text-white hover:bg-gray-700">
          Shop
        </Link>
        <Link href="/stories" className="text-white hover:bg-gray-700">
          Stories
        </Link>
        <Link href="/about" className="text-white hover:bg-gray-700">
          About
        </Link> */}
        <Search className="bg-black text-white" placeholder="Search" />
      </div>
      <div className="flex text-[17px]">
        <Image
          className="w-[18.04px] h-[21.01px] ml-[5px]"
          src={Vector}
          alt="Vector Icon"
        />
        <div className="ml-[7.72px] text-white">3</div>
        <div className="ml-[22px] text-white mr-[141.25px] ">Login</div>
      </div>
    </div>
  );
};
