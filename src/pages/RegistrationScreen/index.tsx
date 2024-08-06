import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "@/components/Button";
import { CheckBox } from "@/components/CheckBox";
import { postApi } from "../api/AxiosClient";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validator, setValidator] = useState(true);

  const router = useRouter();

  const handleRegistration = async () => {
    try {
      const response = await postApi({
        endUrl: "/user/create-user",
        body: {
          full_name: userName,
          email: email,
          password: password,
        },
      });
      if (response?.status === true) {
        router.push("/LoginPage");
      } else {
        toast.error(response?.response?.data?.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleConfirmPassword = (value: any) => {
    if (password === value) {
      setValidator(false);
    } else {
      setValidator(true);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex-col w-[25%] p-4 bg-white">
        <div className="font-sans font-medium text-base text-[16px] text-[#A9ABBD]">
          Create an account
        </div>
        <Input
          className="mt-[16px] p-4 text-[14px]"
          type="text"
          placeholder="Name"
          onChange={(value) => setUserName(value)}
        />
        <Input
          className="mt-[14px] p-4 text-[14px]"
          type="email"
          placeholder="Email"
          onChange={(value) => setEmail(value)}
        />
        <Input
          className="mt-[14px] p-4 text-[14px]"
          type="password"
          placeholder="Password"
          onChange={(value) => setPassword(value)}
        />
        <Input
          className="mt-[14px] p-4 text-[14px]"
          type="password"
          placeholder="Confirm Password"
          onChange={(value) => handleConfirmPassword(value)}
        />
        <div className="flex justify-between">
          <CheckBox label="Remember me" />
        </div>
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[30%] p-2 text-[white]"
            buttonName="Sign up"
            onClick={handleRegistration}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
