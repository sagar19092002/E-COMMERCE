import { FC } from "react";
import { CheckBox } from "@/components/CheckBox";
import { Button } from "@/components/Button";
import { Search } from "@/components/Search";
import { SingleProduct } from "@/components/SingleProduct";

import { PRICE } from "../utils/constants";

interface AdminDashboard03Props {
  filtersList: string[];
}

const AdminDashboard03: FC<AdminDashboard03Props> = ({ filtersList }) => {
  const array = [1, 2, 3];
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center ">
      <div className="w-[80%] h-[80%] bg-green-500 p-4">
        <div className="flex flex-row justify-between">
          <div className="font-semibold text-[36px]">Product List</div>
          <Search placeholder="Search for a product with name or ID" />
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row">
              <div>Filters</div>
              <div>clear filters</div>
            </div>
            <div>Categories</div>
            <div>
              {filtersList.map((item, index) => (
                <CheckBox label={item} />
              ))}
            </div>
          </div>
          <div>
            {array.map((item, index) => (
              <div className="flex flex-row">
                <SingleProduct
                  className="w-[528px] h-[121px]"
                  productName="Men's Winter Jacket"
                  price={`${PRICE}22`}
                />
                <div className="flex flex-row">
                  <Button buttonName="Edit"></Button>
                  <Button buttonName="Delete"></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center gap-6">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[15%] p-3"
            buttonName="Load more Products"
          />
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[8%] p-3"
            buttonName="Back"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard03;
