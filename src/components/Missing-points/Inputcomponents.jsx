import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import dots from "../../assets/images/dot.gif";
import cancelIcon from "../../assets/images/cancel-white.png";
import Mintlogo from "../../assets/images/group.svg";

const ChatThreadLeft = (props) => {
  return (
    <>
      <div className="mint-pro-logo">
        <img src={Mintlogo} alt="logo" />
        <p>MintPro</p>
      </div>
      <div className="chat-thread-left">
        {props.loading ? (
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
        ) : (
          <p>{props.text}</p>
        )}
      </div>
    </>
  );
};

const RenderZendeskApiError = (props) => {
  const checkApiErrorState = props.zendeskApiError;
  if (checkApiErrorState) {
    return (
      <>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
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
            Opps! Your data could not be loaded, Please refresh your browser and
            try again.
          </p>
        </div>
      </>
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

const Renderticketmessage = (props) => {
  const checkTicketState = props.ticketCreated;
  if (checkTicketState) {
    return (
      <>
        <div className="mint-pro-logo" style={{ marginTop: "15px" }}>
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left">
          <p style={{ textAlign: "left", fontSize: "14px" }}>
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
        <div className="mint-pro-logo" style={{ marginTop: "15px" }}>
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left" ref={props.errorMessageRef}>
          <p style={{ textAlign: "center" }}>
            Please provide a proper response
          </p>
        </div>
      </>
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
      width: "98%",
    };
    return (
      <>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>
              You have selected <strong>{props.showData}</strong>
            </p>
          </div>
        </div>

        <div className="" style={{ backgroundColor: "transparent" }}>
          <ChatThreadLeft
            text={props.queryResponseObject.inputProvider}
            loading={props.loadingAnyOtherQuestion}
          />

          {props.inputProvider.length > 0 && (
            <div className="grid-right">
              <div className="chat-thread-right">
                <p>{props.inputProvider} </p>
              </div>
            </div>
          )}
        </div>
        <div className="fix-form-wrapper">
          <Form className="chat-form">
            <Form.Group style={{ marginBottom: "1em", width: "100%" }}>
              <Form.Label style={{ paddingBottom: "0" }}></Form.Label>
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
              style={{ marginTop: "7px" }}
              onClick={props.handleInputField}
              ref={props.disabledBtn}
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
        <ChatThreadLeft
          text={props.queryResponseObject.customerName}
          loading={props.loadingAnyOtherQuestion}
        />
        {props.customerName.length > 0 && (
          <div className="grid-right">
            <div className="chat-thread-right">
              <p>{props.customerName}</p>
            </div>
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
        <ChatThreadLeft
          text={props.queryResponseObject.policyNumber}
          loading={props.loadingAnyOtherQuestion}
        />
        {props.policyNumber.length > 0 && (
          <div className="grid-right">
            <div className="chat-thread-right">
              <p>{props.policyNumber}</p>
            </div>
          </div>
        )}
        <Renderzendeskloader showZendeskLoader={props.showZendeskLoader} />
        <RenderZendeskApiError zendeskApiError={props.zendeskApiError} />
        <Renderticketmessage
          ticketCreated={props.ticketCreated}
          handleTicketPopUp={props.handleTicketPopUp}
          handleErrorPopUp={props.handleErrorPopUp}
        />
      </>
    );
  }

  return null;
};

const Renderinputcomponents = (props) => {
  return (
    <>
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
        disabledBtn={props.disabledBtn}
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
        showZendeskLoader={props.showZendeskLoader}
        zendeskApiError={props.zendeskApiError}
      />
      <Rendererrormessage
        errorMessage={props.errorMessage}
        handleMissingErrorPopup={props.handleMissingErrorPopup}
        errorMessageRef={props.errorMessageRef}
      />
    </>
  );
};
export default Renderinputcomponents;
