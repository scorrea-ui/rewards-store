import React from "react";

export const ProductSorter = ({ sortProducts, products, title, sorter }) => {
  return (
    <button className="c-btn c-btn--sorters" onClick={() => sortProducts(products, sorter)}>{title}</button>
  );
};
