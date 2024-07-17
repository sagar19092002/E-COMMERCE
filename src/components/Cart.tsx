import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CartProps{
    src:StaticImageData;
    productName:string;
    size:string;
    quantity:string;
    price:string;
    className?:string;
}

export const Cart:FC<CartProps> = ({src,productName,size,quantity,price,className}) => {
  return (
    <div className={'w-[401px] h-[133px] flex items-center justify-between'+className}>
      <Image className='w-[129px] h-[133px]'src={src} alt="Error"/>
      <div className='ml-2 mt-3'>
        <div className='w-[189px] h-[30px]'>{productName}</div>
        <div className='mt-[7px] h-[20px]'>{size}</div>
        <div className='mt-[7px] h-[20px]'>{quantity}</div>
        <div className='mt-[7px] w-[81px] h-[30px]'>{price}</div>
        </div>
      <div>
        <button>Remove</button>
        <div></div>
        </div>
    </div>
  )
}
