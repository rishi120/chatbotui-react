import React, { useEffect } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import cancelIcon from "../../assets/images/cancel-white.png";
import gsap, { Power2 } from "gsap";

const Renderthankyoumessage = (props) => {
  const checkThankYouStatus = props.thankYou;
  if (checkThankYouStatus) {
    return (
      <>
        <div className="mint-pro-logo" style={{ marginTop: "15px" }}>
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left" style={{ marginBottom: "20px" }}>
          <p style={{ textAlign: "center" }}>Thank You for your response!</p>
        </div>
      </>
    );
  }
  return null;
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

const Hasnoquestions = (props) => {
  return (
    <>
      <Container>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>No, I don't have any questions.</p>
          </div>
        </div>

        <div className="rating-wrapper">
          {props.loadingAnyOtherQuestion && (
            <p
              style={{
                marginBottom: 0,
                padding: "10px",
                backgroundColor: "#fff",
                borderRadius: "20px",
              }}
            >
              loading...
            </p>
          )}
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
          <h1>{props.showNoOtherQuestion}</h1>
          <ul id="hide-lists">
            {props.iconValue.map((icons) => {
              return (
                <li className="lists" key={icons.id}>
                  <img
                    src={icons.selected ? icons.colorIcons : icons.ratings}
                    alt="Rating-smiley"
                    onClick={() => {
                      props.handleIconClick(icons.message);
                      props.handleChangeIcon(icons.id);
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <p className="show-rating-message" id="disp-block">
            {props.showRatingMessage}
          </p>

          <Renderthankyoumessage
            thankYou={props.thankYou}
            handlePopup={props.handlePopup}
          />
          <Button
            type="button"
            onClick={props.handleThankyouMessage}
            ref={props.disableBtn}
          >
            Submit
          </Button>
          <p className="skip-step" onClick={props.handleThankyouMessage}>
            {props.skipStep}
          </p>
        </div>
      </Container>
    </>
  );
};

export default Hasnoquestions;
