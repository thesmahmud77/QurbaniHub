import React from "react";
import { FaTags } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { RiScales3Fill } from "react-icons/ri";

const AnimalCard = ({ singleAnimalCard }) => {
  //   console.log(singleAnimalCard);
  const {
    image,
    animalId,
    breed,
    name,
    discountPrice,
    price,
    weight,
    location,
  } = singleAnimalCard;
  return (
    <div className="rounded-[10px] border-gray-200 border-[1px]">
      <figure>
        <img className="w-[500px] h-[300px]" src={image} alt="" />
      </figure>
      <div className="p-5">
        <div className="flexStart gap-4">
          <button className="text-white font-bold bg-black px-5 py-2 rounded-[5px] flexCenter gap-2 whitespace-nowrap">
            <FaTags />
            {animalId}
          </button>
          <button className="parYellow font-bold bgYellow px-5 py-2 rounded-[5px] whitespace-nowrap">
            PREMIUM
          </button>
          <button className="text-[#0284C7] font-bold bg-[#e3f4fc] px-5 py-2 rounded-[5px] whitespace-nowrap">
            {breed}
          </button>
        </div>
        <div>
          <h1 className="textblack font-bold text-2xl mt-5">{name}</h1>
          <div className="flexStart gap-4">
            <h1 className="textblack font-bold text-3xl">${price}</h1>
            <h1 className="text-gray-600 font-medium text-2xl line-through decoration-gray-600 decoration-2">
              ${discountPrice}
            </h1>
          </div>
          <div className="flexCenter gap-10 border-t border-b border-gray-200 mt-5">
            <h3 className=" font-bold px-5 py-2 rounded-[5px] flexCenter gap-2">
              <RiScales3Fill />
              {weight}
            </h3>
            <h3 className=" font-bold px-5 py-2 rounded-[5px] flexCenter gap-2">
              <MdLocationOn />
              {location}
            </h3>
          </div>
        </div>
        <div>
          <button className="bgSecondary textPrimary text-[18px] w-full py-3 mt-5">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
