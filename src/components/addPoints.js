import React from "react";
import { addUserPoints } from "./redux/actions";
import { connect } from "react-redux";
import ButtonPoints from "./ButtonPoints";

const AddPoints = ({ addPoints }) => {
  return (
    <>
      <div className="o-container">
        <div className="o-grid o-grid--center o-grid--middle">
          <div className="o-grid__col u-4/12@md">
            <ButtonPoints
              className="c-btn--primary"
              handler={addPoints}
              amount="1000"
            />
          </div>
          <div className="o-grid__col u-4/12@md">
            <ButtonPoints
              className="c-btn--secondary"
              handler={addPoints}
              amount="5000"
            />
          </div>
          <div className="o-grid__col u-4/12@md">
            <ButtonPoints
              className="c-btn--tertiary"
              handler={addPoints}
              amount="7500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    points: state.points,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPoints: (amount) => dispatch(addUserPoints(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPoints);
