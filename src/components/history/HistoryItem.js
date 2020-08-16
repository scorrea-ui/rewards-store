import React from "react";

const HistoryItem = ({ category, cost, img, name, redeemPoints, points }) => {
  return (
    <div className="o-grid__col u-3/12@md">
      <div className="c-product__box">
        <img
          className="c-product__img"
          src={
            !img
              ? img
              : process.env.PUBLIC_URL + "/product-pics/MacbookPro-x1.png"
          }
          alt={name}
        />
        <hr />
        <div className="c-product__content">
          <p className="c-product__category">{category}</p>
          <p className="c-product__name">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
