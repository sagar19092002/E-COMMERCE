import Image from 'next/image';
import { FC } from 'react';
import { PRICE } from '@/utils/constants';

interface ShopItemProps{
    src?:string;
    productName?:string;
    size?:string;
    price?:number;
}

export const ShopItem:FC<ShopItemProps> = ({src,productName,size,price}) => {
  return (
    <div className='flex flex-col'>
      <Image className='fixed-size' width={265} height={265} src={src || ""} alt="Error"/>
      <div className='flex justify-between'>
        <div>{productName}</div>
        <div>{size}</div>
      </div>
      <div>{PRICE}{price}</div>
    </div>
  )
}

