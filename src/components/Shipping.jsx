import React from 'react'

export const Shipping = () => {
  return (
    <div className='w-[50%]'>
      <div className='flex flex-col'>
        <div className='flex'>
            <Checkout label='UPS/USPS Superpost'/>
            <div>4-7 Buisiness Days</div>
        </div>
        <div className='flex'>
            <Checkout label='UPS Ground Shipping'/>
            <div>3-5 Buisiness Days</div>
        </div>
      </div>
      <Button/>
    </div>
  )
}

