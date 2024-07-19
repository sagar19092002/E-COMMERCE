import { FC } from "react";
import { Input } from "../components/Input";
import {Button} from "../components/Button";
import Link from "next/link";
import {CheckBox} from "@/components/CheckBox";

const LoginPage: FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center justify-items-stretch">
      <div className="form w-[30%] flex-col items-center  p-4">
        <div className="title  mt-[30px] font-sans text-[22px] font-semibold">
          Welcome Back!
        </div>
        <div className="w-[120px] h-[26px] text-[16px] #A9ABBD">
          Login with email
        </div>
        <Input className=" mt-[14px] p-4" type="email" placeholder="Email" />
        <Input
          className=" mt-[10px] p-4 text-[14px]"
          type="password"
          placeholder="Password"
        />
        <div className="">
          <div className="flex justify-between">
            <CheckBox label="Remember me" />
            <Link className="font-bold text-sm" href="">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[25%] p-2"
            buttonName="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
