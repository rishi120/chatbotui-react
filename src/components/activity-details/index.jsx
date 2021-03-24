import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Incorrectinfo from "../incorrect-info";
import Correctinfo from "../correct-info";
import Container from "react-bootstrap/Container";

/* the activity details component is where we are rendering the correct info and incorrect info components */
const Renderbuttonwrapper = (props) => {
  const checkButtonWrapperStatus = props.hideButtonWrapper;
  if (checkButtonWrapperStatus) {
    return (
      <div className="button-wrapper">
        <Button onClick={props.showIncorrectSection}>No</Button>
        <Button onClick={props.showCorrectSection}>Yes</Button>
      </div>
    );
  }
  return null;
};
/* check the state of correct component and render it conditionally */
const Renderfinalcontent = (props) => {
  const checkContent = props.correctInfo;
  const check = props.wrongInfo;
  if (checkContent) {
    return (
      <Correctinfo
        haveMoreQuestions={props.haveMoreQuestions}
        noMoreQuestions={props.noMoreQuestions}
        shouldShowCorrectInfo={props.shouldShowCorrectInfo}
        shouldShowIncorrectInfo={props.shouldShowIncorrectInfo}
        showCorrectSection={props.showCorrectSection}
        showMoreQuestion={props.showMoreQuestion}
        showNoQuestion={props.showNoQuestion}
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
        focusInputField={props.focusInputField}
        handleThankyouMessage={props.handleThankyouMessage}
        thankYou={props.thankYou}
        handlePopup={props.handlePopup}
        disableBtn={props.disableBtn}
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        showNoOtherQuestion={props.showNoOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        skipStep={props.skipStep}
        handleFormSubmit={props.handleFormSubmit}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        handleErrorPopUp={props.handleErrorPopUp}
        inputFocusField={props.inputFocusField}
        errorFetchApi={props.errorFetchApi}
        haveAnyOtherQuestion={props.haveAnyOtherQuestion}
        yesHaveMoreQuestions={props.yesHaveMoreQuestions}
        noIHaveNoQuestions={props.noIHaveNoQuestions}
        saleTypeLoader={props.saleTypeLoader}
      />
    );
  } else if (check) {
    return (
      <Incorrectinfo
        issueOptionList={props.issueOptionList}
        showIssueOptionList={props.showIssueOptionList}
        handleShowIssueOptionList={props.handleShowIssueOptionList}
        selectedIssueOptionList={props.selectedIssueOptionList}
        // showCorrectSection={props.showCorrectSection}
        showIncorrectSection={props.showIncorrectSection}
        focusIncorrectInputField={props.focusIncorrectInputField}
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        handleIncorrectInfoFormSubmit={props.handleIncorrectInfoFormSubmit}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        handleErrorPopUp={props.handleErrorPopUp}
        inputFocusField={props.inputFocusField}
        handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        errorFetchApi={props.errorFetchApi}
      />
    );
  }
  return null;
};

const Activitydetails = (props) => {
  return (
    <>
      <Container>
        <div className="chat-thread-left">
          <p style={{ marginBottom: "15px" }}>
            Do the details of activity points looks correct to you?
          </p>
          <Renderbuttonwrapper
            showIncorrectSection={props.showIncorrectSection}
            showCorrectSection={props.showCorrectSection}
            hideButtonWrapper={props.hideButtonWrapper}
          />
        </div>
      </Container>
      <Renderfinalcontent
        wrongInfo={props.wrongInfo}
        correctInfo={props.correctInfo}
        haveMoreQuestions={props.haveMoreQuestions}
        noMoreQuestions={props.noMoreQuestions}
        shouldShowCorrectInfo={props.shouldShowCorrectInfo}
        shouldShowIncorrectInfo={props.shouldShowIncorrectInfo}
        showIncorrectSection={props.showIncorrectSection}
        showMoreQuestion={props.showMoreQuestion}
        showNoQuestion={props.showNoQuestion}
        issueOptionList={props.issueOptionList}
        showIssueOptionList={props.showIssueOptionList}
        handleShowIssueOptionList={props.handleShowIssueOptionList}
        selectedIssueOptionList={props.selectedIssueOptionList}
        showCorrectSection={props.showCorrectSection}
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
        focusInputField={props.focusInputField}
        focusInput={props.focusInput}
        handleThankyouMessage={props.handleThankyouMessage}
        thankYou={props.thankYou}
        handlePopup={props.handlePopup}
        disableBtn={props.disableBtn}
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        showNoOtherQuestion={props.showNoOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        skipStep={props.skipStep}
        handleFormSubmit={props.handleFormSubmit}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        focusIncorrectInputField={props.focusIncorrectInputField}
        handleIncorrectInfoFormSubmit={props.handleIncorrectInfoFormSubmit}
        handleErrorPopUp={props.handleErrorPopUp}
        inputFocusField={props.inputFocusField}
        handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        errorFetchApi={props.errorFetchApi}
        haveAnyOtherQuestion={props.haveAnyOtherQuestion}
        yesHaveMoreQuestions={props.yesHaveMoreQuestions}
        noIHaveNoQuestions={props.noIHaveNoQuestions}
        saleTypeLoader={props.saleTypeLoader}
      />
    </>
  );
};

export default Activitydetails;
