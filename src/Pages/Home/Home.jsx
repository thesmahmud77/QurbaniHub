import React from "react";
import HomeHero from "./HomeHero";
import HomeLiveStock from "./HomeLiveStock";
import MyContainer from "../../Custom-Hooks/MyContainer";

const Home = () => {
  return (
    <MyContainer>
      <HomeHero></HomeHero>
      <HomeLiveStock></HomeLiveStock>
    </MyContainer>
  );
};

export default Home;
