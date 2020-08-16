import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions";
import { Link } from "react-router-dom";

const Header = ({ getUser, user, points }) => {
  useEffect(() => {
    getUser();
  }, [getUser, points.message]);

  const { loading } = user;

  return (
    <header className="c-header">
      <Link style={{ display: "inline-flex" }} to="/">
        <img
          src={process.env.PUBLIC_URL + "/aerolab-logo.svg"}
          alt="Aerolab Logo"
        ></img>
      </Link>
      {loading ? (
        <span className="c-header__info">Loading...</span>
      ) : (
        <div className="c-header__info">
          <p className="c-header__user">
            <Link to="/rewards-store/redeem?products=16">{user.user.name}</Link>
          </p>
          <Link to="/rewards-store/points">
            <div className="c-header__points">
              <span>{user.user.points}</span>
              <img
                src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                alt="Coins"
              ></img>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
    points: state.points,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
