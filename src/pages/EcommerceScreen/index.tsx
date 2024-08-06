import { FC } from "react";
import Image from "next/image";
import { Button } from "../../components/Button";
import MainImg from "../../../public/pexels-wdnet-230544.jpg";
import Image1 from "../../../public/image 5.svg";
import Image2 from "../../../public/image 6.svg";
import Image3 from "../../../public/image 7.svg";
import Image4 from "../../../public/image 8.svg";

import sample1 from "../../../public/image copy.png";
import sample2 from "../../../public/image copy 2.png";
import sample3 from "../../../public/image copy 3.png";
import { useRouter } from "next/router";
import { getApi } from "../api/AxiosClient";

interface EcommerceScreenProps {
  className?: string;
}

const EcommerceScreen: FC<EcommerceScreenProps> = ({ className }) => {
  const router = useRouter();
  const Images = [sample1, sample2, sample3];

  const getProducts = async () => {
    try {
      const response = await getApi({
        endUrl: `/product/:product-id`,
      });
    } catch (err) {
      return err;
    }
  };

  return (
    <div className={`${className}`}>
      <div className="w-full flex justify-center text-[56px] font-semibold">
        Better clothing for the planet
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row text-center justify-center mt-[19px] font-normal text-[20px] text-[#A9ABBD] w-[50%]">
          Create screens directly in method or add your images from Sketch or
          Figma. You can even sync designs from your cloud storage!
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          buttonClassName="flex flex-row justify-center mt-[21px] !w-[10%] p-2 bg-white !text-black border-[1px] border-black"
          buttonName="Shop All"
          onClick={() => router.push("/ShopPage")}
        />
      </div>
      <Image
        className="mt-[40px] w-[80%] h-[521px] ml-[145px]"
        src={MainImg}
        alt="Main Image"
      />
      <div className="flex flex-row items-center justify-center gap-14 mt-[31px]">
        <Image className="w-[229.84px] h-[34px]" src={Image1} alt="Image 1" />
        <Image className="w-[119px] h-[32px]" src={Image2} alt="Image 2" />
        <Image className="w-[152px] h-[33px]" src={Image3} alt="Image 3" />
        <Image className="w-[186px] h-[67px]" src={Image4} alt="Image 4" />
      </div>
      <div className="w-full flex justify-center text-[56px] font-semibold">
        Our latest arrivals
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row text-center justify-center mt-[19px] font-normal text-[20px] text-[#A9ABBD] w-[50%]">
          Create screens directly in method or add your images from Sketch or
          Figma. You can even sync designs from your cloud storage!
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          buttonClassName="flex flex-row justify-center mt-[21px] !w-[10%] p-2 bg-white !text-black border-[1px] border-black"
          buttonName="Shop All"
          onClick={() => router.push("/ShopPage")}
        />
      </div>
      <div className="w-[80%] flex mt-[66px] ml-[145px] justify-between">
        {Images.map((image, index) => (
          <Image
            key={index}
            className={
              index === 1
                ? "w-[368px] h-[571px] pb-[50px]"
                : "w-[368px] h-[571px] pt-[50px]"
            }
            src={image}
            alt={`Sample Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EcommerceScreen;
