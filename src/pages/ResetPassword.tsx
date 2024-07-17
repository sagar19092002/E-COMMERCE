import React from "react";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import Button from "../components/Button";
import CheckBox from "@/components/CheckBox";

interface ResetPasswordProps {
  title: string;
  palceholder1: string;
  placeholder2: string;
  placeholder3: string;
  buttonname: string;
}

const ResetPassword = () => {
  return (
    <div className="w-full h-full">
      <div>
        <NavBar />
      <div className="w-full h-[92%]">
        <div className="flex-col items-center justify-center bg-yellow-400">
          <div className='mt-[30px] ml-[30px] font-medium text-base'>Reset Password</div>
          <Input
            className="w-[398px] h-[40px] ml-[29px] mt-[11px]"
            type="text"
            placeholder="Enter otp"
          />
          <Input
            className="w-[398px] h-[40px] ml-[29px] mt-[11px]"
            type="password"
            placeholder="Password"
          />
          <Input
            className="w-[398px] h-[40px] ml-[29px] mt-[11px]"
            type="password"
            placeholder="Confirm Password"
          />
          <CheckBox className='ml-[29px]' label="Remember me" />
          <Button className='ml-[177px] mt-[20px]' buttonName="Reset Password" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
