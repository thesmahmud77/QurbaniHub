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
        <p>THE MARKETPLACE</p>
        <h1>Available Livestock Collection</h1>
        <p>
          Browse our premium selection of verified animals for your Qurbani.
        </p>
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
