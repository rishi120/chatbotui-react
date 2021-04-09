import React, { useRef } from "react";
import Rightarrow from "../../assets/images/right-arrow.svg";
import Mintlogo from "../../assets/images/group.svg";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import dots from "../../assets/images/dot.gif";

const Monthrenderer = (props) => {
  return (
    <li
      className="list-items"
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

const Rendermonthbubble = (props) => {
  const checkMonthState = props.showMonthBubble;
  if (checkMonthState) {
    return (
      <div className="grid-right">
        <div className="chat-thread-right">
          <p>You have selected {props.selectedMonth}</p>
        </div>
      </div>
    );
  }
  return null;
};

const Monthselection = (props) => {
  return (
    <section className="month-wrapper">
      <Container>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div
          className="chat-thread-left"
          style={{ marginBottom: "0", padding: "10px" }}
        >
          {props.monthLoading && (
            <p
              style={{
                marginBottom: 0,
                fontStyle: "italic",
                paddingRight: "10px",
              }}
            >
              <img src={dots} alt="dots" style={{ width: "50px" }} />
              MintPro is Typing...
            </p>
          )}
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
          <h1>{props.title}</h1>
          {props.Months.map((month) => {
            return (
              <ul className="list-wrapper" key={uuidv4()} ref={props.hideLists}>
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
        <Rendermonthbubble
          showMonthBubble={props.showMonthBubble}
          selectedMonth={props.selectedMonth}
        />
        {props.loadingSelectedMonth && (
          <>
            <div className="mint-pro-logo">
              <img src={Mintlogo} alt="logo" />
              <p>MintPro</p>
            </div>
            <div className="chat-thread-left" style={{ padding: "10px" }}>
              <p
                style={{
                  marginBottom: 0,
                  fontStyle: "italic",
                  paddingRight: "10px",
                }}
              >
                <img src={dots} alt="dots" style={{ width: "50px" }} />
                MintPro is Typing...
              </p>
            </div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Monthselection;
