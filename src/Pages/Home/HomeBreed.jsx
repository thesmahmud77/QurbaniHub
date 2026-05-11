import React from "react";

const HomeBreed = () => {
  return (
    <div>
      <section class="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 class="text-4xl font-bold text-slate-900 mb-2">
              Explore by Breed
            </h2>
            <p class="text-slate-500 text-lg">
              Find exactly what you are looking for by filtering through our
              most popular breeds.
            </p>
          </div>
          <button class="bg-sky-50 text-sky-600 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-sky-100 transition">
            View All Breeds <span class="text-xl">→</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m12 10 2 4v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3l2-4Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3 5 9v11" />
                  <path d="M12 3l7 6v11" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Brahman</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              120+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Sahiwal</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              85+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Gir</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              40+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Holstein</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              200+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Sindhi</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              90+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-.5-3 4.5 4.5 0 0 1-7-7 9.75 9.75 0 0 0-1.5-.5z" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Black Bengal</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              300+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Jamunapari</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              150+
            </span>
          </div>

          <div class="flex items-center justify-between p-4 border border-slate-300 rounded-2xl bg-white hover:shadow-lg hover:border-sky-200 transition group cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <span class="font-bold text-slate-800">Boer</span>
            </div>
            <span class="bg-slate-50 text-slate-400 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-sky-50 group-hover:text-sky-400">
              75+
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBreed;
