import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 gap-8 p-10 bg-slate-50 text-slate-700 min-h-[500px] items-center">
      <div class="col-span-12 md:col-span-3 space-y-4">
        <div class="flex items-center gap-2">
          <div class="bg-sky-600 p-1 rounded text-white font-bold text-xl">
            Q
          </div>
          <h2 class="text-2xl font-bold text-slate-900">QurbaniHub</h2>
        </div>
        <p class="text-sm leading-relaxed text-slate-500">
          Your trusted marketplace for premium, verified livestock. Making
          Qurbani simple, transparent, and hassle-free.
        </p>
        <div class="flex gap-3 pt-2">
          <span class="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-slate-200">
            f
          </span>
          <span class="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-slate-200">
            𝕏
          </span>
          <span class="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-slate-200">
            i
          </span>
        </div>
      </div>

      <div class="col-span-12 md:col-span-3">
        <h3 class="font-bold text-slate-900 mb-4">Marketplace</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li class="hover:underline cursor-pointer">All Animals</li>
          <li class="hover:underline cursor-pointer">Verified Farms</li>
          <li class="hover:underline cursor-pointer">Pricing & Delivery</li>
          <li class="hover:underline cursor-pointer">New Arrivals</li>
        </ul>
      </div>

      <div class="col-span-12 md:col-span-3">
        <h3 class="font-bold text-slate-900 mb-4">Company</h3>
        <ul class="space-y-2 text-sm text-slate-600">
          <li class="hover:underline cursor-pointer">About Us</li>
          <li class="hover:underline cursor-pointer">Quality Guarantee</li>
          <li class="hover:underline cursor-pointer">Contact Support</li>
          <li class="hover:underline cursor-pointer">Careers</li>
        </ul>
      </div>

      <div class="col-span-12 md:col-span-3 space-y-4">
        <h3 class="font-bold text-slate-900">Newsletter</h3>
        <p class="text-sm text-slate-500">
          Subscribe to get the latest updates on new arrivals and special
          offers.
        </p>
        <div class="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            class="border rounded-lg px-4 py-2 w-full focus:outline-sky-500"
          />
          <button class="bg-[#0F172A] text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
