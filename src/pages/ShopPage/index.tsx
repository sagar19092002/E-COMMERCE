import React, { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { ColorPicker } from "@/components/ColorPicker";
import { Dropdown } from "@/components/Dropdown";
import { ShopItem } from "../../components/ShopItem";
import { CheckBox } from "@/components/CheckBox";

import { getApi } from "../api/AxiosClient";

interface Product {
  product_id: string;
  product_name: string;
  description: string;
  images: string[];
  size_ids: string[];
  color_ids: string[];
  price: number;
  category_id: string;
  product_status: "available";
  rating: number;
  quantity: number;
}

interface ProductApiResponse {
  products: Product[];
  sizes: string[];
  total_pages: number;
  current_page: number;
  total_products: number;
}

const ShopPage = ({}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sortBy,setSortBy]=useState<string>();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories,setSelectedCategories]=useState<string[]>([]);
  const [selectedSortBy,setSelectedSortBy]=useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filterState, setFilterState] = useState({
    categories: [],
    colors: [],
    sort_by: "",
  });

  const handleFilters = async () => {
    try {
      const response = await getApi({
        endUrl: `/get-product-parameters`,
      });
      setColors(response.data.colors.map((key: any) => key.color_code));
      setCategories(response.data.categories.map((key: any) => key.category_name));
    } catch (err) {
      console.log(err);
    }
  };

  const handleColors = (color: any) => {
    setSelectedColors((prevColors) => {
      if (!prevColors.includes(color)) {
        return [...prevColors, color];
      }
      return prevColors;
    });
  };

  const handleCategories = (category: string) => {
  setCategories((prevCategories) => {
    if (!prevCategories.includes(category)) {
      return [...prevCategories, category];
    }
    return prevCategories;
  });
};

  const handleSortBy=(sortByValue:string)=>{
    setSortBy((prevSortBy)=>{
      if(sortByValue!=prevSortBy){
        return sortByValue;
      }
      return prevSortBy;
    })
  }

  const handleProducts = async () => {
    try {
      const response = await getApi({
        endUrl: `/list-products`,
      });
      console.log( response)
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFilters();
    handleProducts();
  }, [selectedColors,selectedCategories,selectedSortBy]);


  const options = ["Mern", "full stack", "ml", "ds"];

  return (
    <div>
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
      <div className="flex justify-center">
        <div className="flex justify-center w-[80%] gap-32">
          <div className="sticky top-0 h-[60vh]">
            <div className="flex items-center gap-3 mt-[43px]">
              <div className="font-semibold text-[22px]">Filters</div>
              <div className="font-normal text-[14px] text-[#C4C4C4] underline">
                clear filters
              </div>
            </div>
            <div className="font-bold text-[14px] mt-[19px]">Categories</div>
            <div className="flex flex-col mt-[20px]">
              {categories.map((category, index) => (
                
                <CheckBox key={index} label={category} onClick={handleCategories}/>
              ))}
            </div>
            <ColorPicker className="mt-[50px]" colors={colors} onColorSelect={handleColors} />
          </div>
          <div className=" text-right sticky top-0">
            <div className="h-[20vh] sticky top-0 bg-[white]">
              <Dropdown
                className="mt-[31px]"
                options={options}
                isPlaceholder={true}
                placeholder="Sort By"
              />
              <div className="mt-[24px] text-right">Showing 1003 products</div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-3 mt-[18px]">
                {products.map((product, index) => (
                  <ShopItem
                    key={index}
                    src={product.images[0]}
                    productName={product.product_name}
                    size={product.size_ids[0]}
                    price={product.price}
                  />
                ))}
              </div>
              <div className="w-full flex justify-center mb-[58px]">
                <Button
                  buttonClassName="flex flex-row justify-center mt-[21px] !w-[30%] p-2 !text-[black] !bg-[white] border-[black] border-[1px]"
                  buttonName="Load more products"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
