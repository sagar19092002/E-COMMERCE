import React from "react";
import ImageGrid from "../components/MultipleProducts";
import NextImage, { StaticImageData } from "next/image";
import fav from "../../public/Vector.svg";
import group from "../../public/Side.svg";
import Counter from "../components/Quantity";
import MainButton from "../components/Button";
import  ColorPickerList  from "../components/ColorPicker";
import Sizepicker from "../components/SizePicker";

interface ProductProps {
  images: StaticImageData;
}

const Product: React.FC<ProductProps> = ({ images }) => {
  return (
    <div className="bg-[#EFF2F6] pt-[135px] h-screen">
      <div className=" px-[7%]">
        <div className="flex gap-10">
          <div className="w-[50%]">
            <ImageGrid images={images} />
          </div>
          <div className="flex pl-[76px] flex-col w-[50%]">
            <div className="flex justify-start">
              <div className="flex items-center space-x-4">
                <div className="font-sans pr-1 font-semibold text-[36px]">
                  Men’s winter jacket
                </div>
                <NextImage
                  className="w-[28.89px] h-[25.84px]"
                  src={fav}
                  alt={"Image not found"}
                />
                <NextImage
                  className="w-[32px] h-[32px]"
                  src={group}
                  alt={"Image not found"}
                />
              </div>
            </div>
            <div className="flex">
              <div className="font-primary font-normal w-[46px] text-[18px]">
                $99
              </div>
              <div className="border border-[#C4C4C4] w-[304px] h-[28px]">
                <div className="font-primary pl-[11px] font-normal text-[13px]">
                  or 4 interest-free payments of $25.00. <u>Learn more</u>
                </div>
              </div>
            </div>
            <div className="font-primary font-normal text-[18px] w-[357px] pt-[22px]">
              Revamp your style with the latest designer trends in men’s
              clothing or achieve a perfectly curated wardrobe thanks to our
              line-up of timeless pieces.
            </div>
            <div className="pt-[7px]">
              <ColorPickerList colors={["#DF9167", "#0D0D0D"]} className={""} />
            </div>
            <div className="pt-[11px]">
              {/* <Sizepicker /> */}
            </div>
            <div className="pt-[27px] font-primary font-normal text-[13px] text-[#000000]">
              <u>Size & Fit Guide</u>
            </div>
            <div className="pt-[12px] font-inter font-normal text-[14px] w-[350px]">
              Height of model: 189 cm./6&#39;2&#34; Size 41
            </div>

            <div className="flex items-center space-x-4 bg-[red]">
              {/* <div className=""> */}
              <MainButton
                className={
                  "bg-[#0D0D0D] text-[#FFFFFF] font-primary font-semibold text-[16px] flex items-center justify-center"
                }
                buttonName={"Add to Cart-$250"}
                onClick={function (): void {}}
                width={"350px"}
                height={"50px"}
              />
              {/* </div> */}
              {/* <div className=""> */}
              {/* <div className=" pl-[18px]"> */}
              <Counter />
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="flex pt-[12px]">
              <div className="font-inter font-normal text-[14px] text-[#000000]">
                Free Standard Shopping
              </div>
              <div className="font-inter pl-[14px] font-normal text-[14px] text-[#000000]">
                <u>Free Returns</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;