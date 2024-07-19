"use client";

import { FC, useState } from "react";

import sample1 from "../../public/image copy.png";
import sample2 from "../../public/image copy 2.png";
import sample3 from "../../public/image copy 3.png";
import sample4 from "../../public/image copy 4.png";

import { Carousel } from "@/components/CaroUsel";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import EcommerceScreen from "./EcommerceScreen";

const Home: FC = (): JSX.Element => {
  const colors = ["red", "green", "blue", "gray", "yellow"];
  const images = [sample1, sample2, sample3, sample4];
  const sizes = ["L", "M", "XL", "XXL"];
  const Description = `Please enter your registered email address Where we'll send you an OTP to reset Password`;
  const buttonName = "Send OTP";
  const options = ["Mern", "full stack", "ml", "ds"];
  const steps = ["Address", "Shipping", "Payment"];
  const currentStatus = "Payment";

  const date = "27-07-2024";
  const description =
    "It was a gift for a friend and she completely loved it and her warm and stylish she could wear it with almost everything that she has in her wardrobe.She uses it for many things including hiking and put it through the test of actual outdoors being involved in her purchase.And Whenever she doesn't use it for the outdoors she uses it casually, which is a great alternative for her because she likes to be diversified in her closet.";
  const title = "Amazing and durable jacket";
  const feedBack =
    "was this review helpful? Yes(4) No(0)  |  Flag as inapproriate";
  const userName = "Ryan M";
  const className = "";
  const rating = 5;
   const ecommercedes="Create Screens directly in Method or Add your images from Sketch or Figma.You can even Sync designs from your cloud storage!";
  const EbuttonName="Shop All"
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    // <ProductReviews
    //   date={date}
    //   description={description}
    //   feedBack={feedBack}
    //   userName={userName}
    //   className={className}
    //   rating={rating}
    //   title={title}
    // />
    // <Cart src={sample1} productName="Men's Jacket" size="L" quantity="2" price="22" className="p-1" />
    // <HomePage/>
   
    <>
      {/* <LoginPage /> */}
      <EcommerceScreen title="Better Clothing for the Planet" description={ecommercedes} buttonName={EbuttonName}  />
    </>
  );
};

export default Home;
