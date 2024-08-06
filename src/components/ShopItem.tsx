import Image,{ StaticImageData } from 'next/image';
import React,{FC} from 'react';
import SampleImg from '../../public/image copy.png';
import { PRICE } from '@/utils/constants';

interface ShopItemProps{
    src?:StaticImageData;
    productName?:string;
    size?:string;
    price?:string;
}

export const ShopItem:FC<ShopItemProps> = ({src,productName,size,price}) => {
  return (
    <div className='flex flex-col'>
      <Image src={SampleImg} alt="Error"/>
      <div className='flex justify-between'>
        <div>Men's Winter Jacket</div>
        <div>M</div>
      </div>
      <div>{PRICE}22</div>
    </div>
  )
}

