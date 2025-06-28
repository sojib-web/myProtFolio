// @ts-nocheck
import React from "react";
import profileImage from "../assets/myPic.png";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white relative flex items-center justify-center pl-20 md:pl-32">
      <div className="max-w-7xl w-full grid md:grid-cols-2 px-6 gap-10 items-center z-0">
        {/* Left - Image */}
        <div className="relative rounded-xl overflow-hidden bg-red-500">
          <div className="m-2 bg-black rounded-xl p-2">
            <img
              src={profileImage}
              alt="profile"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right - Text */}
        <Banner />
      </div>
    </section>
  );
};

export default Home;
