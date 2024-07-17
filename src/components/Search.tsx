import { StaticImageData } from "next/image";
import React, { FC } from "react";
import Image from "next/image";
import { Input } from "./Input";
import SearchImg from '../../public/Search (1).svg';

interface SearchProps {
  className?: string;
  inputClassName?: string;
  imageClassName?: string;
  placeholder?: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state?: string | undefined;
  width?: string;
  height?: string;
  src?: string | StaticImageData;
}

const Search: FC<SearchProps> = ({
  imageClassName,
  inputClassName,
  className,
  onChange,
  placeholder,
  width,
  height,
  src,
}) => {
  return (
    <div
      className={`ml-[32px] mr-[553px] mt-[18px] mb-[21px] w-[81px] h-[21px] flex ${className}`}
    >
      <Image
        className={`w-[15.85px] h-[16px] mt-[3px] mb-[5px] bg-black ${imageClassName}`}
        src={SearchImg}
        alt="search icon"
      />
      <Input
        className={`bg-black color text-white ${inputClassName}`}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Search;

