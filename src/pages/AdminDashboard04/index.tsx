import React from "react";
import NavBar from "../components/NavBar";
import Input from "../components/Input";
import Button from "../components/Button";

const AdminDashboard04 = () => {
  return (
    <div className="w-full h-full ">
      <div>
        <NavBar />
      </div>
      <div>
        <div className="form">
          <div>
            <div>Orders</div>
            <div>
              <Input
                placeholder="Search for order with order id or user id"
                type="text"
              />
            </div>
          </div>
          <div>
            <div>
              <div>Order ID:123</div>
              <div>User ID:A1</div>
            </div>
            <div>
              <Button buttonName="view order" />
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <div>Order ID:124</div>
              <div>User ID:A2</div>
            </div>
            <div>
              <Button buttonName="view order" />
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <div>Order ID:125</div>
              <div>User ID:A3</div>
            </div>
            <div>
              <Button buttonName="view order" />
            </div>
          </div>
          <div>
            <div>
              <Button buttonName="Load more Orders" />
              <Button buttonName="Back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard04;
