import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHistory } from "../redux/actions";
import ProductsHeader from "../productsHeader";
import usePagination from "../../hooks/pagination";
import HistoryItem from "./HistoryItem";

const History = ({ getHistory, history }) => {
  useEffect(() => {
    getHistory();
  }, [getHistory]);

  const paginatedProducts = usePagination(history.history, 16);
  const splicedProducts = paginatedProducts.currentData();

  return (
    <div className="c-products">
      <ProductsHeader
        products={paginatedProducts}
        allProducts={history.history}
      />
      <div className="o-container">
        <div className="o-grid">
          {splicedProducts.map((history, index) => {
            const { category, cost, img, name } = history;

            return (
              <HistoryItem
                key={name + index}
                category={category}
                cost={cost}
                img={img.hdUrl}
                name={name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: () => dispatch(getHistory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
