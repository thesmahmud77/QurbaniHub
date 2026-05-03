import React from "react";
import customerPhotos from "../../assets/customers.png";
import cowImg from "../../assets/Home-hero-image.jpg";

const HomeHero = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            100% Verified Farms
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
            Find Your Perfect <br />
            Qurbani Animal <br />
            <span className="text-blue-500">Effortlessly.</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
            Verified livestock from the best farms delivered to your doorstep.
            Safe, secure, and stress-free.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btnPrimary">Browse Animals</button>
            <button className="btnSecondary">How it Works</button>
          </div>

          {/* Trust Stats */}
          <div className="flex items-center gap-4 pt-4">
            <div className="avatar-group -space-x-4 rtl:space-x-reverse">
              <img src={customerPhotos} alt="" />
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-800">2,000+</span> happy
              customers last year
            </p>
          </div>
        </div>

        {/* Right Side: Image with Floating Card */}
        <div className="relative group">
          <div className="rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img src={cowImg} className="w-full h-[750px] object-cover" />
          </div>

          {/* Floating Price Card */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl flex justify-between items-center border border-white/20">
            <div className="space-y-1">
              <p className="text-blue-600 text-sm font-bold uppercase tracking-wider">
                Featured Animal
              </p>
              <h3 className="text-xl font-bold text-slate-800">
                Premium Brahman Bull
              </h3>
            </div>
            <div className="text-2xl font-black text-slate-900">$1,200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
