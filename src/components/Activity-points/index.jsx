import React from "react";
import Rightarrow from "../../assets/images/right-arrow.svg";

const Activitypoints = ({ filterDate }) => {
  return (
    <>
      <ul className="list-items">
        <li>
          <p>
            Can't find your activity points?
            <img src={Rightarrow} alt="right arrow" />
          </p>
          <p>
            <span>Report missing activity points</span>
          </p>
        </li>
        <li>
          {filterDate} <img src={Rightarrow} alt="right arrow" />
        </li>
      </ul>
    </>
  );
};

export default Activitypoints;
