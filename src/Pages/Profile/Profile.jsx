import React, { useContext } from "react";
import MyContainer from "../../Custom-Hooks/MyContainer";
import { AuthContext } from "../../Provider/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);
  return (
    <MyContainer>
      <div class="min-h-screen bg-gray-500 flex items-center justify-center p-6">
        <div class="bg-white rounded-[2rem] shadow-xl p-8 w-full max-w-md text-center">
          <div class="relative w-24 h-24 mx-auto mb-4">
            <img
              src="{user.photoURL}"
              alt="User Profile"
              class="rounded-full border-4 border-white shadow-sm object-cover w-full h-full"
            />
            <div class="absolute bottom-1 right-1 bg-sky-500 border-2 border-white rounded-full p-1 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <h2 class="text-2xl font-extrabold text-slate-800">
            {user.displayName}
          </h2>
          <p class="text-slate-400 text-sm mb-3">{user.email}</p>

          <div class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold border border-emerald-100">
            <span class="text-sm">🛡️</span> Verified Buyer
          </div>

          <div class="grid grid-cols-2 gap-4 mt-10 mb-8">
            <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div class="text-slate-400 mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Account Created
              </p>
              <p class="text-sm font-bold text-slate-800">
                {user.metadata.creationTime}
              </p>
            </div>

            <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div class="text-slate-400 mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p class="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                Total Bookings
              </p>
              <p class="text-sm font-bold text-slate-800">3 Active</p>
            </div>
          </div>

          <button class="w-full bg-[#0081C9] hover:bg-[#0070B0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Update Profile
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
