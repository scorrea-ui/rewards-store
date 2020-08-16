import React from "react";
import { withRouter } from "react-router";

const TotalProducts = ({ productsLength, location }) => {
  const getProductPerPage = () => {
    const search = location.search;
    const productNum = new URLSearchParams(search);
    return productNum.get("products") ? productNum.get("products") : null;
  };

  return (
    <span>
      {getProductPerPage() ? getProductPerPage() : 16} / {productsLength}
    </span>
  );
};

export default withRouter(TotalProducts);
