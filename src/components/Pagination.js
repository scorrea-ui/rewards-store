import React, { useEffect } from "react";
import { withRouter } from "react-router";

const Pagination = ({ products, history }) => {
  useEffect(() => {
    const setParams = () => {
      const searchParams = new URLSearchParams();
      searchParams.set("products", products.getItems());
      return searchParams.toString();
    };
    history.push(`?${setParams()}`);
  }, [history, products]);

  return (
    <div className="c-pagination enable">
      <button
        className="c-pagination__button c-pagination__button--prev"
        onClick={() => products.prev()}
      >
        <img
          src={process.env.PUBLIC_URL + "/icons/arrow-left.svg"}
          alt="Previous Page"
        ></img>
      </button>
      <button
        className="c-pagination__button c-pagination__button--next"
        onClick={() => products.next()}
      >
        <img
          src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"}
          alt="Next Page"
        ></img>
      </button>
    </div>
  );
};

export default withRouter(Pagination);
