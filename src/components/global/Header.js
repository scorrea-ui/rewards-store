import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/actions";

const Header = ({ getUser, user }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    getUser();
    setPoints(user.user.points);
  }, [getUser, user.user.points]);

  return (
    <header className="c-header">
      <img
        src={process.env.PUBLIC_URL + "/aerolab-logo.svg"}
        alt="Aerolab Logo"
      ></img>
      {user.loading ? (
        <span className="c-header__info">Loading...</span>
      ) : (
        <div className="c-header__info">
          <p className="c-header__user">{user.user.name}</p>
          <div className="c-header__points">
            <span>{points}</span>
            <img
              src={process.env.PUBLIC_URL + "/icons/coin.svg"}
              alt="Coins"
            ></img>
          </div>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
