import React, { useRef } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import dots from "../../assets/images/dot.gif";
import cancelIcon from "../../assets/images/cancel-white.png";
import { v4 as uuidv4 } from "uuid";

/* the below component  will generate the list of issues */

const RenderIncorrectInfo = (props) => {
  return (
    <>
      <Container>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>No, it looks incorrect</p>
          </div>
        </div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          <p style={{ marginBottom: "15px" }}>
            Please help us understand your concern by selecting your issue
          </p>
          <ul className="options">
            {props.issueOptionList.map((issues) => {
              return (
                <li
                  key={uuidv4()}
                  ref={props.removeBorder}
                  onClick={() =>
                    props.handleShowIssueOptionList(issues.text, issues.issueId)
                  }
                >
                  {issues.text}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
};

const Renderticketmessage = (props) => {
  const checkTicketState = props.ticketCreated;
  if (checkTicketState) {
    return (
      <>
        <div className="mint-pro-logo" style={{ marginTop: "20px" }}>
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          <p style={{ textAlign: "center", fontSize: "13px" }}>
            Your Ticket has been successfully created.A zendesk executive will
            revert you back soon.
          </p>
        </div>
      </>
    );
  }
  return null;
};

const Rendererrormessage = (props) => {
  const checkErrorStatus = props.errorMessage;
  if (checkErrorStatus) {
    return (
      <>
        <div className="mint-pro-logo" style={{ marginTop: "20px" }}>
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          <p style={{ textAlign: "center" }}>
            Please provide a proper response
          </p>
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

const Renderusermessage = (props) => {
  const checkComponentStatus = props.showUserMessageComponent;
  if (checkComponentStatus) {
    return (
      <div className="grid-right">
        <div className="chat-thread-right" style={{ marginBottom: "0" }}>
          <p>{props.showUserMessage}</p>
        </div>
      </div>
    );
  }
  return null;
};
const Renderzendeskloader = (props) => {
  const checkLoaderState = props.showZendeskLoader;
  if (checkLoaderState) {
    return (
      <>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          <p
            style={{
              marginBottom: 0,
              fontStyle: "italic",
            }}
          >
            <img src={dots} alt="dots" style={{ width: "50px" }} />
            MintPro is Typing...
          </p>
        </div>
      </>
    );
  }
  return null;
};

/* the below component is to show the other details including the input field based on the issues user will be selecting */

const Showmorecontent = (props) => {
  return (
    <>
      <Container>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>{props.selectedIssueOptionList}</p>
          </div>
        </div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          {props.loadingAnyOtherQuestion && (
            <p
              style={{
                marginBottom: 0,
                paddingLeft: "10px",
                fontStyle: "italic",
              }}
            >
              <img src={dots} alt="dots" style={{ width: "50px" }} />
              MintPro is Typing...
            </p>
          )}
          <p>{props.showAnyOtherQuestion}</p>
          <p style={{ color: "#f00" }}>{props.errorMessage}</p>

          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
        </div>
        <Rendererrormessage
          errorMessage={props.errorMessage}
          handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        />
        <Renderusermessage
          showUserMessageComponent={props.showUserMessageComponent}
          showUserMessage={props.showUserMessage}
        />
        <Renderzendeskloader showZendeskLoader={props.showZendeskLoader} />
        <Renderticketmessage
          ticketCreated={props.ticketCreated}
          handleTicketPopUp={props.handleTicketPopUp}
          errorMessage={props.errorMessage}
        />
      </Container>
      <div className="input-wrapper" style={{ backgroundColor: "transparent" }}>
        <div className="fix-form-wrapper" style={{ padding: "10px" }}>
          <Form
            className="chat-form"
            onSubmit={props.handleIncorrectInfoFormSubmit}
          >
            <Form.Group>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type details of issue"
                required
                ref={props.focusIncorrectInputField}
                id="getIncorrectInfoInputValue"
                autoComplete="off"
                onChange={props.hideErrorMessage}
              />
            </Form.Group>
            <Button
              type="submit"
              className="submit-btn"
              ref={props.disabledBtn}
            >
              <img src={Sendicon} alt="send icon" />
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

const Rendermorecontent = (props) => {
  const stateCheck = props.showIssueOptionList;
  if (stateCheck) {
    return (
      <Showmorecontent
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        focusIncorrectInputField={props.focusIncorrectInputField}
        selectedIssueOptionList={props.selectedIssueOptionList}
        handleIncorrectInfoFormSubmit={props.handleIncorrectInfoFormSubmit}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        handleErrorPopUp={props.handleErrorPopUp}
        inputFocusField={props.inputFocusField}
        handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        errorFetchApi={props.errorFetchApi}
        showUserMessageComponent={props.showUserMessageComponent}
        showUserMessage={props.showUserMessage}
        showZendeskLoader={props.showZendeskLoader}
        disabledBtn={props.disabledBtn}
        hideErrorMessage={props.hideErrorMessage}
      />
    );
  }
  return null;
};

const Incorrectinfo = (props) => {
  return (
    <>
      <RenderIncorrectInfo
        issueOptionList={props.issueOptionList}
        handleShowIssueOptionList={props.handleShowIssueOptionList}
        removeBorder={props.removeBorder}
      />
      <Rendermorecontent
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        focusIncorrectInputField={props.focusIncorrectInputField}
        selectedIssueOptionList={props.selectedIssueOptionList}
        showIssueOptionList={props.showIssueOptionList}
        handleIncorrectInfoFormSubmit={props.handleIncorrectInfoFormSubmit}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
        focusIncorrectInputField={props.focusIncorrectInputField}
        handleErrorPopUp={props.handleErrorPopUp}
        handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
        errorFetchApi={props.errorFetchApi}
        showUserMessageComponent={props.showUserMessageComponent}
        showUserMessage={props.showUserMessage}
        showZendeskLoader={props.showZendeskLoader}
        disabledBtn={props.disabledBtn}
        hideErrorMessage={props.hideErrorMessage}
      />
    </>
  );
};

export default Incorrectinfo;
