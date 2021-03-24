import React from "react";
import Rightarrow from "../../assets/images/right-arrow.svg";
import { Link } from "react-router-dom";
import Mintlogo from "../../assets/images/group.svg";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const Monthrenderer = (props) => {
  return (
    <li
      onClick={() => props.handleSelectedMonth(props.fetchMonths)}
      key={uuidv4()}
    >
      {props.fetchMonths}
      <img src={Rightarrow} alt="Right Arrow" />
    </li>
  );
};

const Renderfetcherror = (props) => {
  return (
    <p
      style={{
        fontSize: "15px",
        color: "#f00",
        padding: "10px",
        paddingBottom: "0",
        paddingTop: "0",
        margin: "0",
      }}
    >
      {props.errorFetchApi}
    </p>
  );
};

const Monthselection = (props) => {
  return (
    <section className="month-wrapper">
      <Container>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>Mint Pro</p>
        </div>
        <div className="chat-thread-left" id="hide-month-list">
          {props.monthLoading && (
            <p style={{ marginBottom: 0, paddingLeft: "10px" }}>loading...</p>
          )}
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
          <h1>{props.title}</h1>
          {props.Months.map((month) => {
            return (
              <ul className="list-wrapper" key={uuidv4()}>
                {month.dict_list.map((innerData) => {
                  return (
                    <Monthrenderer
                      handleSelectedMonth={props.handleSelectedMonth}
                      fetchMonths={innerData.title}
                      key={uuidv4()}
                    />
                  );
                })}
              </ul>
            );
          })}
        </div>
        {props.loadingSelectedMonth && (
          <p className="loading-text">loading...</p>
        )}
      </Container>
    </section>
  );
};

export default Monthselection;
