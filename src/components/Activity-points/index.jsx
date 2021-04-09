import React from "react";
import Mintlogo from "../../assets/images/group.svg";
import Rightarrow from "../../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Activitypoints = ({
  handleMissingPointsClicked,
  loadingSelectedMonth,
  showNoData,
}) => {
  return (
    <>
      {!loadingSelectedMonth && (
        <div>
          <div className="mint-pro-logo" style={{ paddingBottom: "0" }}>
            <img src={Mintlogo} alt="logo" />
            <p>MintPro</p>
          </div>
          <div className="chat-thread-left">
            {/* <p onClick={handleMissingPointsClicked}> */}
            <p>{showNoData}</p>
            {/* Can't find your activity points? */}
            {/* <img src={Rightarrow} alt="right arrow" /> */}
            {/* <span>Report missing activity points</span> */}
            {/* </p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Activitypoints;
