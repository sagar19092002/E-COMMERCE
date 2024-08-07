import { FC } from "react";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";
import { Quantity } from "@/components/Quantity";
import { Carousel } from "@/components/CaroUsel";
import { PRICE } from "@/utils/constants";

import sample1 from "../../../public/image copy.png";
interface Product02Props {}

const Product02: FC<Product02Props> = () => {
  const options = ["Mern", "full stack", "ml", "ds"];
  const images = [sample1, sample1, sample1, sample1];
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex w-[80%] gap-10">
        <div className="w-[50%]">
          <Carousel images={images} />
        </div>
        <div className="w-[50%]">
          <div className="font-semibold text-[36px]">Men's Winter Jacket</div>
          <div>{PRICE}99</div>
          <div className="mt-[15px] w-[70%]">
            Revamp your style with the latest design trends in men's clothing or
            achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </div>
          <div className="mt-[15px] flex w-[70%]">
            <Quantity className="w-[45%]" />
            <Dropdown className="w-[45%]" options={options} />
          </div>
          <div className="mt-[16px] font-normal text-[14px] opacity-50">
            Height of model: 189cm./6'2" Size 41
          </div>
          <div className="mt-[23px] flex gap-3">
            <Button
              buttonClassName="w-[40%] p-4"
              buttonName="Add to Cart-$250"
            />
            <Button
              buttonClassName="w-[40%] p-4 bg-[#2F80ED]"
              buttonName="Buy Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product02;
