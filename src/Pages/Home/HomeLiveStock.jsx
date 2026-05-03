import React from "react";
import useLoaderAnimals from "../../Custom-Hooks/useLoaderAnimals";
import LiveStockCard from "./LiveStockCard";
import MyContainer from "../../Custom-Hooks/MyContainer";

const HomeLiveStock = () => {
  const { data, loader } = useLoaderAnimals();
  //   console.log(data);
  if (loader) {
    return <h1 className="text-center font-bold text-xl py-20">Loading...</h1>;
  }
  return (
    <MyContainer>
      <div>
        <h1 className="text-5xl font-bold text-center my-5">
          Featured LiveStock
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {data.slice(0, 3).map((animalCard) => (
            <LiveStockCard animalCard={animalCard}></LiveStockCard>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default HomeLiveStock;
