import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import dots from "../../assets/images/dot.gif";
import cancelIcon from "../../assets/images/cancel-white.png";

const ChatThreadLeft = (props) => {
  return (
    <div className="chat-thread-left" style={{ width: "100%" }}>
      {props.loading ? (
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
      ) : (
        <p>{props.text}</p>
      )}
    </div>
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
          onClick={props.handleMissingErrorPopup}
        />
        <p style={{ textAlign: "center" }}>Please provide a proper response</p>
      </div>
    );
  }
  return null;
};

const Inputprovidername = (props) => {
  const checkInputProviderStatus = props.hideFormElement;
  if (checkInputProviderStatus) {
    const fixtobottom = {
      // position: "fixed",
      // bottom: "20px",
      width: "90%",
    };
    return (
      <>
        <div
          className="chat-thread-right"
          style={{ width: "100%", marginLeft: "0" }}
        >
          <p>
            You have selected <strong>{props.showData}</strong>
          </p>
        </div>
        <div
          className="input-wrapper"
          style={{ backgroundColor: "transparent" }}
        >
          {/* <div className="chat-thread-left" style={{ width: "100%" }}>
            <p>{props.queryResponseObject.inputProvider}</p>
          </div> */}
          <ChatThreadLeft
            text={props.queryResponseObject.inputProvider}
            loading={props.loadingAnyOtherQuestion}
          />

          {props.inputProvider.length > 0 && (
            <div
              className="chat-thread-right"
              style={{ width: "100%", marginLeft: "0" }}
            >
              <p>{props.inputProvider} </p>
            </div>
          )}
        </div>
        <div className="fix-form-wrapper">
          <Form className="chat-form">
            <Form.Group>
              <Form.Label style={{ paddingBottom: "15px" }}></Form.Label>
              <Form.Control
                size="sm"
                type="text"
                required
                placeholder="Enter your reply"
                style={fixtobottom}
                value={props.replyText}
                onChange={(e) => props.handleReplyText(e.target.value)}
                id="focus-input"
                ref={props.focusInput}
                autoComplete="off"
                disabled={props.queryInputDisabled}
              />
            </Form.Group>
            <Button
              type="button"
              className="submit-btn"
              style={{ marginTop: "30px" }}
              onClick={props.handleInputField}
            >
              <img src={Sendicon} alt="send icon" />
            </Button>
          </Form>
        </div>
      </>
    );
  }
  return null;
};
const Inputcustomername = (props) => {
  const checkCustomerNameStatus = props.hideSecondFormElement;
  if (checkCustomerNameStatus) {
    return (
      <>
        {/* <div className="chat-thread-left">
          <p>{props.queryResponseObject.customerName}</p>
        </div> */}
        <ChatThreadLeft
          text={props.queryResponseObject.customerName}
          loading={props.loadingAnyOtherQuestion}
        />
        {props.customerName.length > 0 && (
          <div className="chat-thread-right">
            <p>{props.customerName}</p>
          </div>
        )}
      </>
    );
  }
  return null;
};

const Inputpolicynumber = (props) => {
  const checkPolicyNumberStatus = props.hideThirdFormElement;
  if (checkPolicyNumberStatus) {
    return (
      <>
        {/* <div className="chat-thread-left">
          <p>{props.queryResponseObject.policyNumber}</p>
        </div> */}
        <Renderticketmessage
          ticketCreated={props.ticketCreated}
          handleTicketPopUp={props.handleTicketPopUp}
          handleErrorPopUp={props.handleErrorPopUp}
        />
        <ChatThreadLeft
          text={props.queryResponseObject.policyNumber}
          loading={props.loadingAnyOtherQuestion}
        />
        {props.policyNumber.length > 0 && (
          <div className="chat-thread-right">
            <p>{props.policyNumber}</p>
          </div>
        )}
      </>
    );
  }

  return null;
};

const Renderinputcomponents = (props) => {
  return (
    <>
      <Rendererrormessage
        errorMessage={props.errorMessage}
        handleMissingErrorPopup={props.handleMissingErrorPopup}
      />
      <Inputprovidername
        hideFormElement={props.hideFormElement}
        handleInputField={props.handleInputField}
        showData={props.showData}
        handleSecondInputField={props.handleSecondInputField}
        replyText={props.replyText}
        handleReplyText={props.handleReplyText}
        inputProvider={props.inputProvider}
        focusInput={props.focusInput}
        queryResponseObject={props.queryResponseObject}
        loadingAnyOtherQuestion={
          props.loadingAnyOtherQuestion &&
          !props.hideSecondFormElement &&
          !props.hideThirdFormElement
        }
        queryInputDisabled={props.queryInputDisabled}
      />
      <Inputcustomername
        hideSecondFormElement={props.hideSecondFormElement}
        customerName={props.customerName}
        queryResponseObject={props.queryResponseObject}
        loadingAnyOtherQuestion={
          props.loadingAnyOtherQuestion && !props.hideThirdFormElement
        }
      />
      <Inputpolicynumber
        policyNumber={props.policyNumber}
        hideThirdFormElement={props.hideThirdFormElement}
        queryResponseObject={props.queryResponseObject}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        handleErrorPopUp={props.handleErrorPopUp}
      />
    </>
  );
};
export default Renderinputcomponents;
