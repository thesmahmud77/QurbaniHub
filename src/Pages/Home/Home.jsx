import React from "react";
import HomeHero from "./HomeHero";
import HomeLiveStock from "./HomeLiveStock";
import MyContainer from "../../Custom-Hooks/MyContainer";
import HomeExplore from "./HomeExplore";
import HomeBreed from "./HomeBreed";

const Home = () => {
  return (
    <MyContainer>
      <HomeHero></HomeHero>
      <HomeLiveStock></HomeLiveStock>
      <HomeExplore></HomeExplore>
      <HomeBreed></HomeBreed>
    </MyContainer>
  );
};

export default Home;
