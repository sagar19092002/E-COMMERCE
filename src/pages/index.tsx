"use client";

import { FC,useState } from "react";
import React from "react";

import sample1 from "../../public/image copy.png";
import sample2 from "../../public/image copy 2.png";
import sample3 from "../../public/image copy 3.png";
import sample4 from "../../public/image copy 4.png";

import LoginPage from "./LoginPage";
import ToggleSwitch from "@/components/ToggleSwitch";
import Steps from '../components/Steps'
import Search from "@/components/Search";
import {NavBar} from '../components/NavBar';
import { SizePicker } from "@/components/SizePicker";


const Home: FC = (): JSX.Element => {
  const colors = ["red", "green", "blue", "gray", "yellow"];
  const images = [sample1, sample2, sample3, sample4];
  const sizes = ["L", "M", "XL", "XXL"];
  const Description = `Please enter your registered email address Where we'll send you an OTP to reset Password`;
  const buttonName = "Send OTP";
  const options=["Mern","full stack","ml","ds"];
  const steps = ["Address","Shipping","Payment"];
  const currentStatus="Payment";

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };


  return (
    <Search/>
  )
};

export default Home;
