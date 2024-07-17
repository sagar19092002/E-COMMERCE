import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ButtonProps {
  buttonName: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonClassName?: string;
  imageClassName?:string;
  src?: StaticImageData;
}

 const Button: FC<ButtonProps> = ({
  buttonName,
  onClick,
  buttonClassName,
  imageClassName,
  src,
}) => {
  return (
    <button
      className={`w-full flex items-center justify-center bg-black text-white  ${buttonClassName}`}
      onClick={onClick}
    >
      {src && <Image src={src} alt="Buttonrelatedimage" className={`mr-2 w-4 h-4 ${imageClassName}`} />}
      {buttonName}
    </button>
  );
};

export default Button;

