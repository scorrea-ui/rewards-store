import React from "react";
import Header from "../components/global/Header";
import { Hero } from "../components/Hero";
import AddPoints from "../components/points/addPoints";

export const Points = () => {
  return (
    <div>
      <Header />
      <Hero title="Get Points" background={process.env.PUBLIC_URL + '/money.jpg'} />
      <AddPoints />
    </div>
  );
};
