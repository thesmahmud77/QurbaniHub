import React from "react";
import useLoaderAnimals from "../../Custom-Hooks/useLoaderAnimals";
import { useParams } from "react-router";

const AnimalDetails = () => {
  const id = useParams();
  const { data, loader } = useLoaderAnimals();
  if (loader) {
    return <h1 className="text-center font-bold text-xl py-20">Loading...</h1>;
  }
  const singleAnimalData = data.find((singleAnimal) => (singleAnimal.id = id));
  console.log(singleAnimalData);
  return (
    <div>
      <h1>{singleAnimalData.name}</h1>
      <img src={singleAnimalData.image} alt="" />
    </div>
  );
};

export default AnimalDetails;
