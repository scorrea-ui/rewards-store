import React from "react";
import TotalProducts from "../TotalProducts";
import Pagination from "../Pagination";
import { ProductSorter } from "./ProductSorter";

const ProductsHeader = ({ products, allProducts, sortProducts }) => {
  return (
    <div className="o-container">
      <div className="o-grid o-grid--middle o-grid--between">
        <div className="o-grid__col u-10/12@md">
          <div className="c-product__sorter">
            <TotalProducts productsLength={allProducts.length} />
            <span className="c-product__sortby">Sort By:</span>
            <ProductSorter
              sortProducts={sortProducts}
              products={allProducts}
              title="Category"
              sorter="category"
            />
            <ProductSorter
              sortProducts={sortProducts}
              products={allProducts}
              title="Lowest Price"
              sorter="lowestprice"
            />
            <ProductSorter
              sortProducts={sortProducts}
              products={allProducts}
              title="Highest Price"
              sorter="highestprice"
            />
          </div>
        </div>
        <div className="o-grid__col u-2/12@md">
          <Pagination products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
