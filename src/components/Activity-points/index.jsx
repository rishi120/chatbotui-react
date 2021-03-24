import React from "react";
import Rightarrow from "../../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";

const Activitypoints = ({
  handleMissingPointsClicked,
  loadingSelectedMonth,
  showNoData,
}) => {
  return (
    <>
      {!loadingSelectedMonth && (
        <div className="list-items">
          {/* <p onClick={handleMissingPointsClicked}> */}
          <p>{showNoData}</p>
          {/* Can't find your activity points? */}
          {/* <img src={Rightarrow} alt="right arrow" /> */}
          {/* <span>Report missing activity points</span> */}
          {/* </p> */}
        </div>
      )}
    </>
  );
};

export default Activitypoints;
