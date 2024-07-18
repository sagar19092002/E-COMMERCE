import { FC } from 'react';
import Navbar from '../components/NavBar';
import Input from '../components/Input';
import Button from '../components/Button';

interface ForgotPasswordProps{
    description:string;
    buttonName:string;
}

const forgotPassword:FC<ForgotPasswordProps>=({description,buttonName})=>{
    return(
        <div className='h-full w-full '>
        <Navbar/>
        <div className='w-full h-[92%] flex justify-center items-center'>
        <div className='flex-col w-[456px] h-[252px] '>
            <div className='mt-[30px] ml-[30px] font-medium text-base'>Forgot Password</div>
            <div className='mt-[12px] ml-[29px] text-base font-medium'>{description}</div>
            <Input className='w-[398px] h-[40px] ml-[29px] mt-[11px]' type='email' placeholder='Email'/>
            <Button className='mt-[20px] ml-[148px] w-[100px] h-[31px]' buttonName={buttonName}/>
        </div>
        </div>
    </div>
    )
}

export default forgotPassword;