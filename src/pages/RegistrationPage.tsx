import {NavBar} from '@/components/NavBar';
import React,{FC} from 'react'
import {Input} from '../components/Input';
import {Button} from '@/components/Button';
import {CheckBox} from '@/components/CheckBox';
import Link from 'next/link';

interface RegistrationPageProps{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}


const RegistrationPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex-col w-[25%] p-4 bg-white">
        <div className="font-sans font-medium text-base text-[16px] ">
          create an account
        </div>
        <Input
          className=" mt-[16px] p-4 text-[14px]"
          type="text"
          placeholder="Name"
        />
        <Input
          className=" mt-[14px] p-4 text-[14px]"
          type="email"
          placeholder="Email"
        />
        <Input
          className=" mt-[14px] p-4 text-[14px]"
          type="password"
          placeholder="Password"
        />
        <Input
          className=" mt-[14px] p-4 text-[14px]"
          type="password"
          placeholder="Confirm Password"
        />
        <div className="flex justify-between">
          <CheckBox label="Remember me" />
          <Link className="font-bold" href="">
            Forgot Password?
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <Button
            buttonClassName="flex flex-row justify-center mt-[21px] !w-[25%] p-2"
            buttonName="Sign up"
          />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
