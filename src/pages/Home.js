import React from "react";
import Header from "../components/global/Header";
import { Hero } from "../components/Hero";
import Products from "../components/products/Products";
import Footer from "../components/global/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero title="Electronics" />

      <Products />
      <Footer />
    </div>
  );
};
