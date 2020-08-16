import React from "react";
import { connect } from "react-redux";

const Button = ({ products }) => {
  return (
    <div>
      <span>assss</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Button);
