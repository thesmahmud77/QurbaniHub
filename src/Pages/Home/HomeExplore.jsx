import React from "react";

const HomeExplore = () => {
  return (
    <div>
      <section class="bg-[#020817] text-white py-20 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <span class="bg-white text-sky-600 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Expert Advice
            </span>
            <h2 class="text-4xl md:text-5xl font-bold mt-6 mb-4">
              Qurbani Guides & Tips
            </h2>
            <p class="text-slate-400 max-w-2xl mx-auto text-lg">
              Everything you need to know to ensure your sacrifice meets all
              requirements and your animal is well cared for.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class=" cursor-pointer bg-[#0F172A] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-sky-500 transition-all">
              <div class="relative z-10">
                <div class="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center mb-6">
                  <span class="text-sky-500 text-2xl">✔️</span>
                </div>
                <h3 class="text-2xl font-bold mb-4">
                  Choosing the Right Animal
                </h3>
                <p class="text-slate-400 mb-8">
                  Learn the key indicators of health, age, and physical
                  requirements to ensure your animal meets all Islamic
                  guidelines.
                </p>
                <a
                  href="#"
                  class="text-sky-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Read Guide <span>→</span>
                </a>
              </div>
              <div class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span class="text-9xl">✔️</span>
              </div>
            </div>

            <div class=" cursor-pointer bg-[#0F172A] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-sky-500 transition-all">
              <div class="relative z-10">
                <div class="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center mb-6">
                  <span class="text-sky-500 text-2xl">❤️</span>
                </div>
                <h3 class="text-2xl font-bold mb-4">Proper Care Guide</h3>
                <p class="text-slate-400 mb-8">
                  Best practices for housing, hygiene, and daily care to keep
                  your animal comfortable before the day of sacrifice.
                </p>
                <a
                  href="#"
                  class="text-sky-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Read Guide <span>→</span>
                </a>
              </div>
              <div class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span class="text-9xl">❤️</span>
              </div>
            </div>

            <div class=" cursor-pointer bg-[#0F172A] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-sky-500 transition-all">
              <div class="relative z-10">
                <div class="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center mb-6">
                  <span class="text-sky-500 text-2xl">🍃</span>
                </div>
                <h3 class="text-2xl font-bold mb-4">Healthy Diet Standards</h3>
                <p class="text-slate-400 mb-8">
                  Nutritional guidelines and feeding schedules to maintain the
                  optimal weight and health of your livestock.
                </p>
                <a
                  href="#"
                  class="text-sky-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Read Guide <span>→</span>
                </a>
              </div>
              <div class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span class="text-9xl">🍃</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeExplore;
