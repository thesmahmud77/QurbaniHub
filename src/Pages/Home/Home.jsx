import React from "react";
import HomeHero from "./HomeHero";
import HomeLiveStock from "./HomeLiveStock";
import MyContainer from "../../Custom-Hooks/MyContainer";
import HomeExplore from "./HomeExplore";

const Home = () => {
  return (
    <MyContainer>
      <HomeHero></HomeHero>
      <HomeLiveStock></HomeLiveStock>
      <HomeExplore></HomeExplore>
    </MyContainer>
  );
};

export default Home;
