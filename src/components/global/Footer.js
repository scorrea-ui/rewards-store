import React from "react";
import TotalProducts from "../TotalProducts";

const Footer = ({ allProducts }) => {
  return (
    <div className="o-container">
      <div className="o-grid">
        <div className="o-grid__col u-12/12">
          <div className="c-product__sorter">
            <TotalProducts productsLength={allProducts.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
