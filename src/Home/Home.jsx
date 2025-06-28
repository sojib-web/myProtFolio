// @ts-nocheck
import React from "react";
import Lottie from "lottie-react";
import profileImage from "../assets/pic.png";
import Banner from "../Banner/Banner";

// Animation imports
// import topLeftAnimation from "../assets/Animation.json";
// import bottomRightAnimation from "../assets/Animation.json";

const Home = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white relative flex items-center justify-center pl-20 md:pl-32">
      <div className="max-w-7xl w-full grid md:grid-cols-2 px-6 gap-10 items-center z-0">
        {/* Left - Image with Animations */}
        <div className="relative rounded-xl overflow-hidden">
          {/* Top Left Animation */}
          {/* <div className="absolute -top-10 -left-10 w-32 h-32 z-100 pointer-events-none">
            <Lottie animationData={topLeftAnimation} loop={true} />
          </div> */}

          {/* Bottom Right Animation */}
          {/* <div className="absolute -bottom-100 -right-30 w-32 h-32 z-0 pointer-events-none">
            <Lottie animationData={bottomRightAnimation} loop={true} />
          </div> */}

          {/* Image Container */}
          <div className="relative z-10 m-2 bg-[#0f0f0f] rounded-xl p-2 border border-gray-400">
            <img
              src={profileImage}
              alt="profile"
              className="rounded-xl object-cover w-full h-[600px]"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <Banner />
      </div>
    </section>
  );
};

export default Home;
