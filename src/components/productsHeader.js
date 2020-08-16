import React from "react";
import TotalProducts from "./TotalProducts";
import Pagination from "./Pagination";

const ProductsHeader = ({ products }) => {
  return (
    <div className="o-container">
      <div className="o-grid o-grid--middle o-grid--between">
        <div className="o-grid__col u-6/12@md">
          <TotalProducts />
        </div>
        <div className="o-grid__col u-6/12@md">
          <Pagination products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
