import React from "react";
import useLoaderAnimals from "../../Custom-Hooks/useLoaderAnimals";
import { useParams } from "react-router";
import MyContainer from "../../Custom-Hooks/MyContainer";
import { FaPager, FaTags } from "react-icons/fa";
import { RiScales3Fill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

const AnimalDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, loader } = useLoaderAnimals();
  if (loader) {
    return <h1 className="text-center font-bold text-xl py-20">Loading...</h1>;
  }
  const singleAnimalData = data.find(
    (singleAnimal) => String(singleAnimal.id) === id,
  );
  const {
    image,
    animalId,
    breed,
    name,
    discountPrice,
    price,
    weight,
    location,
    description,
    age,
  } = singleAnimalData;
  return (
    <MyContainer>
      <div className="grid grid-cols-12 gap-5 mt-30">
        <div className="flexCenter col-span-6 relative">
          <img className="w-600 h-full rounded-[10px]" src={image} alt="" />
          <div className="bg-white w-50 flexCenter absolute top-5 left-10 rounded-2xl opacity-80">
            <p className="text-green-500 py-2 px-5">Available for Booking</p>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flexStart gap-10 mt-2">
            <button className="text-white font-bold bg-black px-5 py-2 rounded-[5px] flexCenter gap-2 whitespace-nowrap">
              <FaTags /> {animalId}
            </button>
            <button className="parYellow font-bold bgYellow px-5 py-2 rounded-[5px] whitespace-nowrap">
              PREMIUM
            </button>
          </div>
          <h1 className="textblack font-bold text-3xl mt-5">{name}</h1>
          <div className="flexStart gap-4 mt-8">
            <h1 className="textblack font-bold text-3xl">${price}</h1>
            <h1 className="text-gray-600 font-medium text-2xl line-through decoration-gray-600 decoration-2">
              ${discountPrice}
            </h1>
          </div>
          <p className="mt-5">{description}</p>
          <div className="grid grid-cols-2 mt-5 ">
            {/* Card 1 */}
            <div className="flexCenter gap-5 border-2 border-gray-200 bg-[C7E0EC] px-5 py-2 w-70 mt-5">
              <div className="bg-[#CFECFF] p-3 rounded-3xl ">
                <FaTags className="w-5 h-5 textPrimary" />
              </div>
              <div>
                <h3 className="text-bold text-[16px]">breed</h3>
                <h3 className="font-bold text-[16px]"> {breed}</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flexCenter gap-5 border-2 border-gray-200 bg-[C7E0EC] px-5 py-2 w-70  mt-5">
              <div className="bg-[#CFECFF] p-3 rounded-3xl ">
                <RiScales3Fill className="w-5 h-5 textPrimary" />
              </div>
              <div>
                <h3 className="text-bold text-[16px]">Weight</h3>
                <h3 className="font-bold text-[16px]"> {weight}</h3>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flexCenter gap-5 border-2 border-gray-200 bg-[C7E0EC] px-5 py-2 w-70  mt-5">
              <div className="bg-[#CFECFF] p-3 rounded-3xl ">
                <FaPager className="w-5 h-5 textPrimary" />
              </div>
              <div>
                <h3 className="text-bold text-[16px]">Age</h3>
                <h3 className="font-bold text-[16px]"> {age}</h3>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flexCenter gap-5 border-2 border-gray-200 bg-[C7E0EC] px-5 py-2 w-70  mt-5">
              <div className="bg-[#CFECFF] p-3 rounded-3xl ">
                <MdLocationOn className="w-5 h-5 textPrimary" />
              </div>
              <div>
                <h3 className="text-bold text-[16px]">Location</h3>
                <h3 className="font-bold text-[16px]"> {location}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default AnimalDetails;
