import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductProps {
  className?: string;
  images: StaticImageData[];
}

export const MultipleProducts: FC<ProductProps> = ({ className, images }) => {

  const handleImages = () => {
    return images.map((image, index) => (
      <Image key={index} src={image} alt="Error" />
    ));
  };

  return (
    <div className={`grid grid-cols-2 ${className}`}>
      {handleImages()}
    </div>
  );
};

