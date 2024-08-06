import React, { FC } from "react";
import Image from 'next/image';
import { Button } from "@/components/Button";
import { ColorPicker } from "@/components/ColorPicker";
import { Dropdown } from "@/components/Dropdown";
import { ShopItem } from "../../components/ShopItem";
import { StaticImageData } from "next/image";
import { CheckBox } from "@/components/CheckBox";

import sample1 from '../../../public/image copy.png';


interface ShopPageProps {
  images?: StaticImageData[];
}

const ShopPage: FC<ShopPageProps> = ({}) => {
  const array = [1, 2, 3, 4, 5, 6];
  const options = ["Mern", "full stack", "ml", "ds"];
  const filtersList = [
    "Jackets",
    "Fleece",
    "Sweatshirts and Hoodies",
    "Sweaters",
    "Shirts",
    "T-Shirts",
    "Pants and Jeans",
  ];
  const colors = ["red", "green", "blue", "gray", "yellow"];

  const handleChange=()=>{

  }

  return (
    <div className="">
      <div className="bg-[black] text-[white]">
        <div className="flex flex-col w-[40%] ml-[145px]">
          <div className="font-semibold text-[36px]">Shop Men's</div>
          <div className="font-normal text-[18px]">
            Revamp your style with the latest designer trends in men's clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[43px]">
        <div className="flex justify-center w-[80%] gap-32">
          <div className="">
            <div className="flex mt-[19px] items-center gap-3">
              <div className="font-semibold text-[22px]">Filters</div>
              <div
                className="font-normal text-[14px] text-[#C4C4C4]"
              >
                clear filters
              </div>
            </div>
            <div className="font-bold text-[14px] mt-[19px]">Categories</div>
            <div className="flex flex-col mt-[20px]">
              {filtersList.map((item, index) => (
                <CheckBox key={index} label={item} />
              ))}
            </div>
            <ColorPicker className="mt-[50px]" colors={colors} />
          </div>
          <div className="mt-[31px] text-right">
            <Dropdown options={options} />
            <div className="mt-[24px] text-right">Showing 1003 products</div>
            <div className="grid grid-cols-3 gap-4 mt-[18px]">
              {array.map((item, index) => (
                <ShopItem key={index} />
              ))}
            </div>
            <div className="w-full flex justify-center mb-[58px]">
              <Button
                buttonClassName="flex flex-row justify-center mt-[21px] !w-[30%] p-2 !text-[black] !bg-[white] border-[black] border-[1px]"
                buttonName="Load more products"
                onClick={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
