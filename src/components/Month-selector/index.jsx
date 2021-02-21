import React from "react";
import Rightarrow from "../../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";

const Monthrenderer = (props) => {
  return (
    <Link to="/Entry-selection">
      <li>
        {props.month.title}
        <img src={Rightarrow} alt="Right Arrow" />
      </li>
    </Link>
  );
};

const Monthselection = (props) => {
  return (
    <section className="month-wrapper">
      <h1>{props.title}</h1>
      <ul className="list-wrapper">
        {props.Months.map((month) => {
          return <Monthrenderer month={month} key={month.title} />;
        })}
      </ul>
    </section>
  );
};

export default Monthselection;
