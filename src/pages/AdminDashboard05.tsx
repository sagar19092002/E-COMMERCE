import NavBar from '@/components/NavBar';
import React from 'react'
import Steps from '../components/Steps';

const AdminDashboard05 = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <div>
            <div>Order Status</div>
            <div>Order Id</div>
            <div></div>
            <div></div>
            <div><Steps/></div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard05;
