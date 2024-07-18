"use client";
import React, { useState, FC } from "react";
import { validateEmail, validatePassword } from "../utils/helper";
import { EMAIL, PASSWORD, NUMERIC } from "../utils/constants";

interface InputProps {
  className?: string;
  placeholder: string | undefined;
  type: string;
  errorMsg?: string;
  state?: string;
  validator?: (value: string) => boolean;
  onChange?: (value: string) => void;
}

const getErrorMsg: any = {
  [EMAIL]: "Invalid Email",
  [PASSWORD]: "Invalid Password",
  [NUMERIC]: "Invalid",
};

const getValidator: any = {
  [EMAIL]: validateEmail,
  [PASSWORD]: validatePassword,
  [NUMERIC]: (value: string) => !isNaN(Number(value)),
};

export const Input: FC<InputProps> = ({
  className,
  type,
  state,
  placeholder,
  errorMsg,
  validator,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    const validationFunc = validator || getValidator[type];
    if (validationFunc) {
      const isValid = validationFunc(value);
      setIsValid(isValid);
      setErrorMessage(isValid ? null : errorMsg || getErrorMsg[type]);
    }

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        className={`w-[100%] h-[21px] border-[1px] border-[black] ${className}`}
      />
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
    </div>
  );
};
