// LoginPage.tsx
import { FC } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import CheckBox from "@/components/CheckBox";

const LoginPage: FC = (): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center  grid-row-2 grid-flow-row">
        <div className="w-[456px] flex-col justify-center bg-[#FFFFFF]">
          <div className="title w-[147px] h-[30px] mt-[30px] ml-[30.46px] font-sans text-base font-medium">
            Welcome Back!
          </div>
          <div className="login w-[120px] h-[26px] ml-[30.46px]">
            Login with email
          </div>
          <Input
            className="w-[398px] h-[40px] mt-[14px] ml-[30.46px]"
            type="email"
            placeholder="Email"
          />
          <Input
            className="w-[398px] h-[40px] mt-[10px] ml-[30.46px]"
            type="password"
            placeholder="Password"
          />
          <div className="ml-[30.46px]">
            <div className="flex w-[398px] h-[40px]">
              <CheckBox label="Remember me" />
              <Link
                className="ml-[100px] w-[115px] h-[16px] font-bold text-sm"
                href=""
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <Button
            buttonClassName="w-[95px] h-[31px] mt-[21px] ml-[182px]"
            buttonName="Login"
          />
        </div>
      </div>
  );
};

export default LoginPage;
