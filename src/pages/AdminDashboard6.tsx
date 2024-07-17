import React from 'react'
import NavBar from '@/components/NavBar';
import Button from '../components/Button';
import Input from '../components/Input';
import Product from '../components/Product';

const AdminDAshboard6 = () => {
  return (
    <div className='w-full h-full bg-violet-400'>
      <div>
        <NavBar/>
      </div>
      <div>
        <div>
            <div>
                <div>Order123 Summary</div>
                <div><Input type='text' placeholder='search for a order with id'/></div>
            </div>
            <div>
                <div><Product/></div>
                <div><Button buttonName='view order status'/></div>
            </div>
            <div></div>
            <div>
                <div><Product/></div>
                <div><Button buttonName='view order status'/></div>
            </div>
            <div></div>
            <div>
                <div><Product/></div>
                <div><Button buttonName='view order status'/></div>
            </div>
            <div>
                <div><Button buttonName='Load more orders'/></div>
                <div><Button buttonName='Back'/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDAshboard6;
