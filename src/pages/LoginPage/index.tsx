import { useState, FC } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Link from "next/link";
import { CheckBox } from "@/components/CheckBox";
import { useRouter } from "next/router";
import { postApi } from "../api/AxiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage: FC = (): JSX.Element => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await postApi({
        endUrl: `/login`,
        body: { email, password },
      });
      if (response.status === true) {
        localStorage.setItem("response", response);
        router.push({ pathname: "/EcommerceScreen" });
      } else {
        toast(response?.response?.data?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="form w-[30%] flex-col items-center p-4">
        <div className="title mt-[30px] font-sans text-[22px] font-semibold">
          Welcome Back!
        </div>
        <div className="w-[120px] h-[26px] text-[16px] text-gray-500">
          Login with email
        </div>
        <Input
          className="mt-[14px] p-4"
          type="email"
          placeholder="Email"
          onChange={(value) => setEmail(value)}
        />
        <Input
          className="mt-[10px] p-4 text-[14px]"
          type="password"
          placeholder="Password"
          onChange={(value) => setPassword(value)}
        />
        <div>
          <div className="flex justify-between">
            <CheckBox label="Remember me" />
            <Link className="font-bold text-sm" href="/ForgotPassword">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[25%] p-2 text-[white]"
            buttonName="Login"
            onClick={handleLogin}
          />
        </div>
      </div>
      <Link
        className="font-normal text-[14px] text-gray-500 mt-[14px]"
        href="/RegistrationScreen"
      >
        Or create an account
      </Link>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
