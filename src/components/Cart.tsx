import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { PRICE } from "@/utils/constants";

interface CartProps {
  src: StaticImageData;
  productName: string;
  size: string;
  quantity: string;
  price: string;
  className?: string;
  imageClassName?: string;
}

export const Cart: FC<CartProps> = ({
  src,
  productName,
  size,
  quantity,
  price,
  className,
  imageClassName,
}) => {
  return (
    <div className={`w-full flex gap-1 justify-between ${className}`}>
      <div className="flex flex-row gap-2">
        <Image
          className={`w-[129px] h-[133px] ${imageClassName}`}
          src={src}
          alt="Product Image"
        />
        <div className="flex flex-col text-left justify-between p-1">
          <div className="font-semibold font-sans text-[22px]">{productName}</div>
          <div className="text-[14px]">Size: {size}</div>
          <div className="text-[14px]">Quantity: {quantity}</div>
          <div className="font-semibold text-[22px]">{PRICE}{price}</div>
        </div>
      </div>
      <div className="flex self-end">
        <Link className='text-[14px] underline underline-offset-auto' href="#">Remove</Link>
      </div>
    </div>
  );
};
