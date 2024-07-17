import NavBar from '@/components/NavBar';
import React,{FC} from 'react'
import Input from '../components/Input';
import Button from '@/components/Button';
import CheckBox from '@/components/CheckBox';
import Link from 'next/link';

interface RegistrationPageProps{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}


const RegistrationPage = () => {
  return (
    <div className='w-full h-full'>
      <NavBar/>
      <div className='w-full h-[92%] flex justify-center items-center '>
        <div className='flex-col w-[456px] h-[376px]'>
          <div className='w-[133px] h-[26px] ml-[30.46px] font-sans font-medium text-base'>create an account</div>
            <Input className="w-[398px] h-[40px] mt-[16px] ml-[30.46px]" type="text" placeholder="Name"/>
            <Input className="w-[398px] h-[40px] mt-[14px] ml-[30.46px]" type="email" placeholder="Email"/>
            <Input className="w-[398px] h-[40px] mt-[14px] ml-[30.46px]" type="password" placeholder="Password"/>
            <Input className="w-[398px] h-[40px] mt-[14px] ml-[30.46px]" type="password" placeholder="Confirm Password"/>
            <div className="flex w-[398px] h-[40px]  ml-[30.46px]">
            <CheckBox label="Remember me"/>
            <Link className='ml-[133px] w-[115px] h-[16px] font-bold' href=''>Forgot Password?</Link>
            </div>
            <Button className="w-[95px] h-[31px] mt-[21px] ml-[182px]" buttonName="Sign Up" />
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage;
