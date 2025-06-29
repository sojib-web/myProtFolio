import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation Contact.json";

const ContactSuccessAnimation = () => {
  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mt-16">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
};

export default ContactSuccessAnimation;
