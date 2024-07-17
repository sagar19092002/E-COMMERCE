import { FC } from 'react';
import NavBar from '../components/NavBar';
import Image, { StaticImageData } from 'next/image';
import Button from '../components/Button';
import Input from '../components/Input';

interface AdminDashboard07Props{
    src:StaticImageData;
    editName:string;
    editQuantity:string;
    editPrice:string;
    editSize:string;
    editDescription:string;
    editColors:string;
    editCategory:string;
}

const AdminDashboard07:FC<AdminDashboard07Props> = ({src}) => {
  return (
    <div className='flex-col'>
      <NavBar/>
      <div className='h-[92%]'>
        <div className='w-[519px] h-[54px] ml-[145px] mt-[94px]'>Edit Product</div>
        <div className='flex ml-[145px] mt-[77px'>
            <Image className='w-[337px] h-[341px] ]' src={src} alt='Error'/>
            <div>
                <div className='flex'>
                    <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Name"/>
                    <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Quantity"/>
                </div>
                <div className='flex'>
                <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Sizes"/>
                <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Price"/>
                </div>
                <div className='flex'>
                <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Colours"/>
                <Input  className='ml-[42px] mt-[17px] w-[280px] h-[40px]' type="text" placeholder="Edit Category"/>
                </div>
                <Input className='w-[614px] h-[120px] ml-[42px] mt-[30px]' type="text" placeholder='Edit Description'/>
            </div>
        </div>
        <div className='flex mt-[158px]'>
            <Button  className=' ml-[515px]' buttonName='Save'/>
            <Button  className='ml-[45px]'buttonName='Back'/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard07;
