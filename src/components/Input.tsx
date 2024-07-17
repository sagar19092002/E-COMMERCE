"use client";
import React, { useState, FC } from "react";
import { validateEmail, validatePassword } from "../utils/helper";
import { EMAIL, PASSWORD, NUMERIC } from "../utils/constants";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  placeholder: string | undefined;
  type: string;
  errorMsg?: string;
  state?: string;
  validator?: (value: string) => boolean;
  onChange?: () => {};
}
const getErrorMsg = {
  [EMAIL]: "Invalid Email",
  [PASSWORD]: "Invalid Password",
  [NUMERIC]: "Invalid",
};

const getValidation = {
  [EMAIL]: ({
    validator,
    value,
  }: {
    validator: (value: string) => boolean;
    value: string;
  }) => {
    return validator(value);
  },
  [PASSWORD]: ({
    validator,
    value,
  }: {
    validator: (value: string) => boolean;
    value: string;
  }) => {
    return validator(value);
  },
  [NUMERIC]: ({
    validator,
    value,
  }: {
    validator: (value: string) => boolean;
    value: string;
  }) => {
    return validator(value);
  },
};

const getValidator = {
  [EMAIL]: validateEmail,
  [PASSWORD]: validatePassword,
  [NUMERIC]: !isNaN,
};

export const Input: FC<InputProps> = ({
  className,
  type,
  state,
  placeholder,
  errorMsg,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleChange}
        className={`w-[100%] h-[21px] ${className}`}
      />
      {errorMessage && <div className="text-red-600">{errorMessage}</div>}
    </div>
  );
};
