import { useState, useEffect } from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { patchApi } from "../../api/AxiosClient";
import "react-toastify/dist/ReactToastify.css";


const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [id, setId] = useState<string | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id as string);
    }
  }, [router.isReady, router.query.id]);

  const handlePassword = async () => {
    setError(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await patchApi({
        endUrl: "/reset-password",
        body: { new_password:password, otp, user_id:id },
      });
      if (response?.status === true) {
        router.push("/LoginPage");
      } else {
        toast(response?.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <div className="flex-col items-center justify-center bg-white p-4">
        <div className="mt-[30px] ml-[30px] font-medium text-[14px] text-[#A9ABBD]">
          Reset Password
        </div>
        <Input
          className="mt-[14px] p-4"
          type="numeric"
          placeholder="Enter OTP"
          onChange={(value) => setOtp(value)}
        />
        <Input
          className="mt-[14px] p-4"
          type="password"
          placeholder="Password"
          onChange={(value) => setPassword(value)}
        />
        <Input
          className="mt-[14px] p-4"
          type="password"
          placeholder="Confirm Password"
          onChange={(value) => setConfirmPassword(value)}
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[50%] p-2 text-white"
            buttonName="Reset Password"
            onClick={handlePassword}
          />
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
