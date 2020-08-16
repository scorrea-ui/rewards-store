import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts, redeemUserPoints } from "../redux/actions";
import ProductsHeader from "../productsHeader";
import ProductItem from "./ProductItem";
import usePagination from "../../hooks/pagination";
import { Modal } from "antd";

const Products = ({ getAllProducts, products, getPoints, user, points }) => {
  useEffect(() => {
    getAllProducts();
    if (points.message.error) {
      Modal.error({
        content: points.message.error,
      });
    } else if (points.message.message) {
      Modal.success({
        content: points.message.message,
      });
    }
  }, [getAllProducts, points.message.error, points.message.message]);

  const paginatedProducts = usePagination(products.products, 16);
  const splicedProducts = paginatedProducts.currentData();

  return (
    <div className="c-products">
      <ProductsHeader
        products={paginatedProducts}
        allProducts={products.products}
      />
      <div className="o-container">
        <div className="o-grid">
          {splicedProducts.map((product, index) => {
            const { productId, category, cost, img, name } = product;
            const { points } = user.user;

            return (
              <ProductItem
                key={name + index}
                _id={productId}
                category={category}
                cost={cost}
                img={img.hdUrl}
                name={name}
                redeemPoints={() => getPoints(productId)}
                points={points}
                product={product}
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
    products: state.products,
    user: state.users,
    points: state.points,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getProducts()),
    getPoints: (id) => dispatch(redeemUserPoints(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
