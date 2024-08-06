import { FC, useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { postApi } from "../api/AxiosClient";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface ForgotPasswordProps {}

const ForgotPassword: FC<ForgotPasswordProps> = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleChange = async () => {
    try {
      const response = await postApi({
        endUrl: `/generate-otp`,
        body: { email },
      });
      if (response.status === true) {
        toast(response.message);
      }
    } catch (err) {
      return err;
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center ">
      <div className="flex-col w-[456px] h-[252px] bg-white">
        <div className="mt-[30px] ml-[30px] font-[medium] text-[16px] text-[#A9ABBD]">
          Forgot Password
        </div>
        <div className="mt-[12px] ml-[29px] text-base font-medium text-[#A9ABBD]">
          Please enter your registered email address where we'll send you an OTP
          to reset password
        </div>
        <Input
          className="w-[398px] h-[40px] ml-[29px] mt-[11px] p-4"
          type="email"
          placeholder="Email"
          onChange={(value) => setEmail(value)}
        />
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[25%] p-2 text-[white]"
            buttonName="Send OTP"
            onClick={handleChange}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
