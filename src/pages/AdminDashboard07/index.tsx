import React, { FC } from "react";
import { Button } from "@/components/Button";
import { Input } from "../components/Input";
import Image from "next/image";

interface AdminDashboard02 {}

const AdminDashboard02 = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
      <div className="w-[70%] h-[70%] flex flex-col bg-yellow-300">
        <div className="text-semibold text-[36px]">Add Products</div>
        <div className="flex flex-row mt-[77px] justify-between">
          <div className="bg-black  w-[337px] h-[341px]">
            <Image />
            <Button buttonName="Add Images" />
          </div>
          <div className="flex flex-col w-[60%] h-[60%] bg-blue-600 justify-stretch">
            <div className="flex flex-row justify-between">
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Name"
              ></Input>
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Quantity"
              ></Input>
            </div>
            <div className="flex flex-row mt-[24px] justify-between">
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Available sizes"
              ></Input>
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Price"
              ></Input>
            </div>
            <div className="flex flex-row mt-[24px] justify-between">
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Available colours"
              ></Input>
              <Input
                className="font-normal text-[14px] p-4"
                type="text"
                placeholder="Category"
              ></Input>
            </div>
            <textarea
              className="font-normal text-[14px] p-4 mt-[24px] w-[100%] h-[100%]"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-center gap-6">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[15%] p-2"
            buttonName="Add"
          />
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[15%] p-2"
            buttonName="Back"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard02;
