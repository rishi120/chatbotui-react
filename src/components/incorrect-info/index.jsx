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
        <div className="chat-thread-right">
          <p>No, it looks incorrect</p>
        </div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>Mint Pro</p>
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
      <div className="thank-you-popup">
        <img
          src={cancelIcon}
          alt="cancel"
          className="cancel-image"
          onClick={props.handleTicketPopUp}
        />
        <p style={{ textAlign: "center" }}>
          Your Ticket has been successfully created.A zendesk executive will
          revert you back soon.
        </p>
      </div>
    );
  }
  return null;
};

const Rendererrormessage = (props) => {
  const checkErrorStatus = props.errorMessage;
  if (checkErrorStatus) {
    return (
      <div className="thank-you-popup" style={{ backgroundColor: "#f00" }}>
        <img
          src={cancelIcon}
          alt="cancel"
          className="cancel-image"
          style={{ width: "20px" }}
          onClick={props.handleIncorrectErrorPopup}
        />
        <p style={{ textAlign: "center" }}>Please provide a proper response</p>
      </div>
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

/* the below component is to show the other details including the input field based on the issues user will be selecting */

const Showmorecontent = (props) => {
  return (
    <>
      <Renderticketmessage
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        errorMessage={props.errorMessage}
      />
      <Container>
        <div className="chat-thread-right">
          <p>{props.selectedIssueOptionList}</p>
        </div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>Mint Pro</p>
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
              Mint Pro is Typing...
            </p>
          )}
          <p>{props.showAnyOtherQuestion}</p>
          <p style={{ color: "#f00" }}>{props.errorMessage}</p>
          <Rendererrormessage
            errorMessage={props.errorMessage}
            handleIncorrectErrorPopup={props.handleIncorrectErrorPopup}
          />
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
        </div>
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
              />
            </Form.Group>
            <Button type="submit" className="submit-btn">
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
      />
    );
  }
  return null;
};

const Incorrectinfo = (props) => {
  // console.log(props.focusIncorrectInputField);
  return (
    <>
      <RenderIncorrectInfo
        issueOptionList={props.issueOptionList}
        handleShowIssueOptionList={props.handleShowIssueOptionList}
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
      />
    </>
  );
};

export default Incorrectinfo;
