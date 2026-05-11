import React from "react";
import MyContainer from "../../Custom-Hooks/MyContainer";
import useLoaderAnimals from "../../Custom-Hooks/useLoaderAnimals";
import AnimalCard from "./AnimalCard";

const Animals = () => {
  const { data, loader } = useLoaderAnimals();
  if (loader) {
    return <h1 className="text-center font-bold text-xl py-20">Loading...</h1>;
  }
  return (
    <MyContainer>
      <div>
        <section class="max-w-7xl mx-auto px-6 py-12 font-sans">
          <div class="mb-4">
            <span class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
              The Marketplace
            </span>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div class="max-w-xl">
              <h2 class="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-4">
                Available Livestock <br /> Collection
              </h2>
              <p class="text-slate-500 text-lg">
                Browse our premium selection of verified animals for your
                Qurbani.
              </p>
            </div>

            <div class="relative">
              <button class="flex items-center gap-2 px-5 py-3 border border-slate-200 rounded-full bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="21" y1="10" x2="3" y2="10" />
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="14" x2="3" y2="14" />
                  <line x1="21" y1="18" x2="3" y2="18" />
                </svg>
                Sort by:{" "}
                <span class="font-bold text-slate-900">Price: Low to High</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 items-center">
            <button class="px-6 py-2.5 bg-[#0F172A] text-white rounded-full text-sm font-semibold transition shadow-md">
              All Animals
            </button>

            <button class="px-6 py-2.5 border border-slate-100 bg-white text-slate-600 rounded-full text-sm font-semibold hover:border-sky-500 hover:text-sky-600 transition shadow-sm">
              Cows & Bulls
            </button>

            <button class="px-6 py-2.5 border border-slate-100 bg-white text-slate-600 rounded-full text-sm font-semibold hover:border-sky-500 hover:text-sky-600 transition shadow-sm">
              Goats & Sheep
            </button>

            <button class="px-6 py-2.5 border border-slate-100 bg-white text-slate-600 rounded-full text-sm font-semibold hover:border-sky-500 hover:text-sky-600 transition shadow-sm">
              Camels
            </button>

            <button class="flex items-center gap-2 px-6 py-2.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-sm font-bold hover:bg-emerald-100 transition">
              <span class="text-xs">★</span> Premium Only
            </button>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((singleAnimalCard) => (
          <AnimalCard singleAnimalCard={singleAnimalCard}></AnimalCard>
        ))}
      </div>
    </MyContainer>
  );
};

export default Animals;
