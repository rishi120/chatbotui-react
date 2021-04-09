import React from "react";
import Container from "react-bootstrap/Container";
import Mintlogo from "../../assets/images/group.svg";
import Activitydetails from "../activity-details";
import Rightarrow from "../../assets/images/right-arrow.svg";
import Moment from "react-moment";
import "moment-timezone";

const Renderfinalcomponent = (props) => {
  const checkMonthWiseStatus = props.monthWiseResult;
  if (checkMonthWiseStatus) {
    return (
      <section className="query-wrapper" style={{ paddingBottom: "0" }}>
        <Container>
          <div className="mint-pro-logo">
            <img src={Mintlogo} alt="logo" />
            <p>MintPro</p>
          </div>
          <div className="chat-thread-left">
            <p>
              Your activity points for the month of {props.selectedMonth} is
              {props.selectedUserEntry.titles[2]} pts
            </p>
          </div>
        </Container>
      </section>
    );
  } else {
    return (
      <section className="query-wrapper" style={{ paddingBottom: "0" }}>
        <Container>
          <div className="mint-pro-logo">
            <img src={Mintlogo} alt="logo" />
            <p>MintPro</p>
          </div>
          <div className="chat-thread-left" style={{ width: "90%" }}>
            <div className="bottom-border">
              <div className="show-date">
                <Moment format="ddd" style={{ fontWeight: "600" }}>
                  <p>{props.selectedUserEntry.titles[1]}</p>
                </Moment>
                <Moment format="DD" style={{ textAlign: "center" }}></Moment>
              </div>
              <div className="show-user-details">
                <h1>
                  {props.selectedUserEntry.titles[0]}
                  <span>{props.selectedUserEntry.titles[2]}</span>
                </h1>
                <p> {props.selectedUserEntry.titles[3]}</p>
              </div>
            </div>
            <div className="additional-info">
              <p>
                Your activity points for this sale are
                <span> {props.selectedUserEntry.titles[2]} pts</span>
              </p>
            </div>
          </div>
          <div style={{ padding: "10px", width: "100%" }}></div>

          {/* <div className="mint-pro-logo">
            <img src={Mintlogo} alt="logo" />
            <p>MintPro</p>
          </div> */}
        </Container>
      </section>
    );
  }
};

const Rendermonthdata = (props) => {
  const checkMonthDataStatus = props.showMonthData;
  if (checkMonthDataStatus) {
    return (
      <>
        <Container>
          <div className="mint-pro-logo">
            <img src={Mintlogo} alt="logo" />
            <p>MintPro</p>
          </div>
          <div className="chat-thread-left">
            <h1 className="show-month-data" onClick={props.handleMonthResult}>
              Show All of {props.selectedMonth}
              <img src={Rightarrow} alt="right-nav" />
            </h1>
          </div>
        </Container>
      </>
    );
  }
  return null;
};

const Selectedpolicy = (props) => {
  return (
    <>
      <Rendermonthdata
        showMonthData={props.showMonthData}
        selectedMonth={props.selectedMonth}
        handleMonthResult={props.handleMonthResult}
      />
      <Renderfinalcomponent
        monthWiseResult={props.monthWiseResult}
        shouldShowCorrectInfo={props.shouldShowCorrectInfo}
        shouldShowIncorrectInfo={props.shouldShowIncorrectInfo}
        haveMoreQuestions={props.haveMoreQuestions}
        noMoreQuestions={props.noMoreQuestions}
        showIssueOptionList={props.showIssueOptionList}
        issueOptionList={props.issueOptionList}
        handleShowIssueOptionList={props.handleShowIssueOptionList}
        selectedIssueOptionList={props.selectedIssueOptionList}
        showIncorrectSection={props.showIncorrectSection}
        showCorrectSection={props.showCorrectSection}
        wrongInfo={props.wrongInfo}
        correctInfo={props.showCorrectInfo}
        selectedUserEntry={props.selectedUserEntry}
        hideButtonWrapper={props.hideButtonWrapper}
        monthWiseResult={props.monthWiseResult}
        selectedMonth={props.selectedMonth}
        thankYou={props.thankYou}
        handlePopup={props.handlePopup}
        disableBtn={props.disableBtn}
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        showNoOtherQuestion={props.showNoOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        skipStep={props.skipStep}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        handleErrorPopUp={props.handleErrorPopUp}
        focusInputField={props.focusInputField}
        inputFocusField={props.inputFocusField}
        focusIncorrectInputField={props.focusIncorrectInputField}
        handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        errorFetchApi={props.errorFetchApi}
        haveAnyOtherQuestion={props.haveAnyOtherQuestion}
        yesHaveMoreQuestions={props.yesHaveMoreQuestions}
        noIHaveNoQuestions={props.noIHaveNoQuestions}
        saleTypeLoader={props.saleTypeLoader}
        removeBorder={props.removeBorder}
        hideErrorMessage={props.hideErrorMessage}
      />
      <section className="query-wrapper">
        <Activitydetails
          shouldShowCorrectInfo={props.shouldShowCorrectInfo}
          shouldShowIncorrectInfo={props.shouldShowIncorrectInfo}
          haveMoreQuestions={props.haveMoreQuestions}
          noMoreQuestions={props.noMoreQuestions}
          showIssueOptionList={props.showIssueOptionList}
          issueOptionList={props.issueOptionList}
          handleShowIssueOptionList={props.handleShowIssueOptionList}
          selectedIssueOptionList={props.selectedIssueOptionList}
          showIncorrectSection={props.showIncorrectSection}
          showCorrectSection={props.showCorrectSection}
          wrongInfo={props.wrongInfo}
          correctInfo={props.correctInfo}
          hideButtonWrapper={props.hideButtonWrapper}
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
          focusInput={props.focusInput}
          inputFocusField={props.inputFocusField}
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
          handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
          errorFetchApi={props.errorFetchApi}
          haveAnyOtherQuestion={props.haveAnyOtherQuestion}
          yesHaveMoreQuestions={props.yesHaveMoreQuestions}
          noIHaveNoQuestions={props.noIHaveNoQuestions}
          saleTypeLoader={props.saleTypeLoader}
          removeBorder={props.removeBorder}
          showUserMessage={props.showUserMessage}
          showUserMessageComponent={props.showUserMessageComponent}
          showZendeskLoader={props.showZendeskLoader}
          disabledBtn={props.disabledBtn}
          hideErrorMessage={props.hideErrorMessage}
        />
      </section>
    </>
  );
};

export default Selectedpolicy;
