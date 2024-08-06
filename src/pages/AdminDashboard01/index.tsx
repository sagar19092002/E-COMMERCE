import React, { FC } from "react";
import { Button } from "../components/Button";

const AdminDashboard01 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col w-[40%] h-[40%] justify-between itep-3">
        <Button
          buttonClassName="text-semibold p-4"
          buttonName="Add Product"
        ></Button>
        <Button
          buttonClassName="mt-[72px] text-semibold p-4"
          buttonName="View Products"
        ></Button>
        <Button
          buttonClassName="mt-[72px] text-semibold p-4"
          buttonName="View Orders"
        ></Button>
      </div>
    </div>
  );
};

export default AdminDashboard01;
