import React from "react";
import TotalProducts from "./TotalProducts";
import Pagination from "./Pagination";

const ProductsHeader = ({ products, allProducts, sortProducts }) => {
  return (
    <div className="o-container">
      <div className="o-grid o-grid--middle o-grid--between">
        <div className="o-grid__col u-6/12@md">
          <TotalProducts productsLength={allProducts.length} />
          <span>Sort By:</span>
          <button onClick={() => sortProducts(allProducts, "lowestprice")}>
            Sort By Low
          </button>
          <button onClick={() => sortProducts(allProducts, "highestprice")}>
            Sort By Hight
          </button>
          <button onClick={() => sortProducts(allProducts, "category")}>
            Sort By Category
          </button>
        </div>
        <div className="o-grid__col u-6/12@md">
          <Pagination products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
