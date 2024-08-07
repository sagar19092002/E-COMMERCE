import { MultipleProducts } from "@/components/MultipleProducts";
import { Button } from "@/components/Button";
import { Quantity } from "@/components/Quantity";
import { SizePicker } from "@/components/SizePicker";
import Link from "next/link";
import { PRICE } from "@/utils/constants";
import { ColorPicker } from "@/components/ColorPicker";
import Image, { StaticImageData } from "next/image";

import sample1 from "../../../public/image copy.png";
import sample2 from "../../../public/image copy 2.png";
import sample3 from "../../../public/image copy 3.png";
import sample4 from "../../../public/image copy 4.png";
import HeartImg from "../../../public/Heart.svg";
import SideImg from "../../../public/Frame.png";

interface ProductScreenProps {
  images: StaticImageData[];
  productName: string;
  price: string;
  productdes: string;
  colors: string[];
  sizes: string[];
}

const ProductScreen = () => {
  const colors = ["green", "blue", "black", "yellow", "red", "gray"];
  const images = [sample1, sample2, sample3, sample4];
  const sizes = ["L", "M", "XL", "XXL"];

  return (
    <div className="w-[100vw] h-[100vh] flex flex-row gap-20 items-center justify-center p-20">
      <MultipleProducts className="w-[40%]" images={images} />
      <div className="w-[40%]">
        <div className="flex flex-row gap-5 items-center">
          <div className="font-semibold text-[36px]">Men's winter Jacket</div>
          <Image
            className="w-[28.89px] h-[25.84px]"
            src={HeartImg}
            alt="Error"
          />
          <Image src={SideImg} alt="Error" />
        </div>
        <div className="flex flex-row mt-[8px] gap-3">
          <div className="font-normal text-[18px]">{PRICE}295</div>
          <div className="border-[3px]">
            or 4 interest free-payments of $25.00.Learn more
          </div>
        </div>
        <div className="mt-[25px] font-normal text-[18px] w-[70%]">
          Revamp your style with the latest designer trends in men's clothing or
          achieve a perfectly curated wardrobe thanks to our line-up of timeless
          pieces.
        </div>
        <div className="max-w-48">
          <ColorPicker className="gap-3" colors={colors} />
        </div>
        <SizePicker className="flex gap-1" sizes={sizes} />
        <Link className="font-normal text-[13px] mt-[27px] underline" href="#">
          Size and Fit Guide
        </Link>
        <div className="font-normal text-[14px] mt-[12px] opacity-50">
          Height of model:189cm./6.2" size 41
        </div>
        <div className="flex justify-center  mt-[18px] gap-3">
          <div className="flex flex-col w-full justify-end">
            <Button
              buttonClassName="h-full"
              buttonName={`Add to Cart-${PRICE}${"295"}`}
            />
          </div>
          <Quantity />
        </div>
        <div className="flex flex-row gap-5 mt-[12px]">
          <div className="font-normal text-[14px] opacity-50">Free standard shipping</div>
          <Link className="font-normal text-[14px] opacity-50 underline" href="#">
            Free Returns
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
