import React,{FC} from 'react';
import Image,{StaticImageData} from 'next/image';

interface ProductProps{
    image:StaticImageData;
    productName:string;
    price:string;
    size:string;
    className?:string;
}

export const Product:FC<ProductProps> = ({image,productName,price,size,className}) => {
  return (
    <div className={`flex flex-col w-full h-28 ${className}`}>
      <Image src={image} alt="Error"/>
      <div className='flex gap-x-60'>
        <div>{productName}</div>
        <div className='text-right'>{size}</div>
      </div>
      <div>{price}</div>
    </div>
  )
}

