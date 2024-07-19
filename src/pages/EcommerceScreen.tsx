import React,{FC} from 'react';
import Image from 'next/image';
import {Button} from '../components/Button';

import MainImg from '../../public/pexels-wdnet-230544.jpg';
import Image1 from '../../public/image 5.svg';
import Image2 from '../../public/image 6.svg';
import Image3 from '../../public/image 7.svg';
import Image4 from '../../public/image 8.svg';


interface EcommerceScreenProps{
    title:string;
    description:string;
    buttonName:string;
    className?:string;
}

const EcommerceScreen:FC<EcommerceScreenProps> = ({title,buttonName,description,className}) => {
  return (
    <div className={`flex flex-col w-full p-10 items-center ${className}`}>
      <div className="flex justify-center">{title}</div>
      <div className="flex justify-center mt-[19px]">{description}</div>
      <div className="flex items-center">
        <Button
          buttonClassName={`text-semibold text-[16px]`}
          buttonName={buttonName}
        />
      </div>
      <Image
        className="mt-[40px] max-w-[1114px] max-h-[521px]"
        src={MainImg}
        alt="Error"
      />
      <div className="flex flex-row justify-items-stretch gap-3 mt-[31px] max-w-[855px] max-h-[67px]">
        <Image className="w-[229.84px] h-[" src={Image1} alt="Error" />
        <Image className="w-[119px] h-[32px]" src={Image2} alt="Error" />
        <Image className="w-[152px] h-[33px]" src={Image3} alt="Error" />
        <Image className="w-[186px] h-[67px]" src={Image4} alt="Error" />
      </div>
    </div>
  );
}

export default EcommerceScreen;
