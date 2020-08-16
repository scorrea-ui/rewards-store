import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const TotalProducts = ({ products, location }) => {
  const getProductPerPage = () => {
    const search = location.search;
    const productNum = new URLSearchParams(search);
    return productNum.get("products") ? productNum.get("products") : null;
  };

  return (
    <span>
      {getProductPerPage()} / {products.products.length}
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default withRouter(connect(mapStateToProps, null)(TotalProducts));
