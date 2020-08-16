import React from "react";

const ProductItem = ({ category, cost, img, name, redeemPoints, points }) => {
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
        {points > cost ? (
          <div className="c-product__reveal">
            <>
              <div className="c-product__coins">
                <span>{cost}</span>
                <img
                  src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                  alt="Coins"
                ></img>
              </div>
              <button className="c-product__button" onClick={redeemPoints}>
                Redeem now
              </button>
            </>
          </div>
        ) : null}
        {points > cost ? (
          <div className="c-product__buy c-product__buy--success"></div>
        ) : (
          <div className="c-product__buy c-product__buy--error">
            <span>Missing {cost - points}</span>
            <img
              src={process.env.PUBLIC_URL + "/icons/coin.svg"}
              alt="Coins"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
