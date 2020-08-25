import React from "react";
import Header from "../components/global/Header";
import { Hero } from "../components/Hero";
import History from "../components/history/History";

export const Redeem = () => {
  return (
    <div>
      <Header />
      <Hero title="Historial de productos" background={process.env.PUBLIC_URL + '/rewards.jpg'} />
      <History />
    </div>
  );
};
