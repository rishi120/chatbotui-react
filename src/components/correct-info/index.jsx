import React, { useState, useRef } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import Hasmorequestion from "./Hasmorequestion";
import Hasnoquestion from "./Hasnoquestions";
import dots from "../../assets/images/dot.gif";

const Correctinfo = (props) => {
  const Rendermoreoptions = () => {
    const checkstateStatus = props.shouldShowCorrectInfo;
    const checkOption = props.shouldShowIncorrectInfo;
    if (checkstateStatus) {
      return (
        <Hasmorequestion
          inputFocusField={props.inputFocusField}
          showAnyOtherQuestion={props.showAnyOtherQuestion}
          loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
          handleFormSubmit={props.handleFormSubmit}
          ticketCreated={props.ticketCreated}
          handleTicketPopUp={props.handleTicketPopUp}
          errorMessage={props.errorMessage}
          handleErrorPopUp={props.handleErrorPopUp}
          errorFetchApi={props.errorFetchApi}
          showUserMessage={props.showUserMessage}
          showUserMessageComponent={props.showUserMessageComponent}
          showZendeskLoader={props.showZendeskLoader}
          disabledBtn={props.disabledBtn}
          hideErrorMessage={props.hideErrorMessage}
          zendeskApiError={props.zendeskApiError}
          errorMessageRef={props.errorMessageRef}
        />
      );
    } else if (checkOption) {
      return (
        <Hasnoquestion
          iconValue={props.iconValue}
          showRatingMessage={props.showRatingMessage}
          Rating1={props.Rating1}
          Rating2={props.Rating2}
          Rating3={props.Rating3}
          Rating4={props.Rating4}
          Rating5={props.Rating5}
          Redicon={props.Redicon}
          Orangeicon={props.Orangeicon}
          Yellowicon={props.Yellowicon}
          Lightgreen={props.Lightgreen}
          Darkgreen={props.Darkgreen}
          handleIconClick={props.handleIconClick}
          handleChangeIcon={props.handleChangeIcon}
          handleThankyouMessage={props.handleThankyouMessage}
          thankYou={props.thankYou}
          handlePopup={props.handlePopup}
          disableBtn={props.disableBtn}
          showNoOtherQuestion={props.showNoOtherQuestion}
          loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
          skipStep={props.skipStep}
          errorFetchApi={props.errorFetchApi}
        />
      );
    }
    return null;
  };
  return (
    <>
      <Container>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>Yes, it looks correct</p>
          </div>
        </div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          {props.saleTypeLoader && (
            <p
              style={{
                marginBottom: 0,
                fontStyle: "italic",
              }}
            >
              <img src={dots} alt="dots" style={{ width: "50px" }} />
              MintPro is Typing...
            </p>
          )}
          <p style={{ paddingBottom: "10px" }}>{props.haveAnyOtherQuestion}</p>
          <ul className="options" ref={props.removeBorder}>
            <li onClick={props.haveMoreQuestions}>
              {props.yesHaveMoreQuestions}
            </li>
            <li onClick={props.noMoreQuestions}>{props.noIHaveNoQuestions}</li>
          </ul>
        </div>
      </Container>
      <Rendermoreoptions />
    </>
  );
};

export default Correctinfo;
