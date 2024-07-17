import React from 'react'
import Button from '../components/Button';
import Image, { StaticImageData } from 'next/image';
import Input from '../components/Input';
import NavBar from '@/components/NavBar';

interface AdminDashboardProps{
    image?:StaticImageData;
    button1Name?:string;
    button2Name?:string;
    editName?:string;
    editPrice?:string;
    editSize?:string;
    editQuantity?:string;
    editCategory?:string;
    editDescription?:string;
    title?:string;
}
const AdminDashboard = ({image,title,button1Name,button2Name,editCategory,editDescription,editName,editPrice,editQuantity,editSize,editPrice}) => {
  return (
    <div className='bg-green-600 w-full h-full'>
      <div><NavBar/></div>
      <div>{title}</div>
      <div>
        <div><Image src={image} alt="Error"/></div>
        <div className='content'>
            <div>
                <div><Input type="text" placeholder='Edit Name'/></div>
                <div><Input type="text" placeholder='Edit Quantity'/></div>
            </div>
            <div>
                <div><Input type="text"placeholder='Edit Size'/></div>
                <div><Input type="text"placeholder='Edit Price'/></div>
            </div>
            <div>
                <div><Input type="text" placeholder='Edit Colors'/></div>
                <div><Input type="text" placeholder='Edit Category'/></div>
            </div>
            <div>{editDescription}</div>
        </div>
      </div>
      <div>
        <div><Button buttonName={button1Name}/></div>
        <div><Button buttonName={button2Name}/></div>
      </div>
    </div>
  )
}

export default AdminDashboard
