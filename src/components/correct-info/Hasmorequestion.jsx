import React, { useRef } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import dots from "../../assets/images/dot.gif";
import cancelIcon from "../../assets/images/cancel-white.png";

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
        <div className="chat-thread-right">
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
    );
  }
  return null;
};

const Hasmorequestions = (props) => {
  return (
    <>
      <Container>
        <div className="grid-right">
          <div className="chat-thread-right">
            <p>Yes, I have more question.</p>
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
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
        </div>
        <Rendererrormessage
          errorMessage={props.errorMessage}
          handleErrorPopUp={props.handleErrorPopUp}
          errorMessageRef={props.errorMessageRef}
        />
        <Renderusermessage
          showUserMessageComponent={props.showUserMessageComponent}
          showUserMessage={props.showUserMessage}
        />
        <Renderzendeskloader showZendeskLoader={props.showZendeskLoader} />
        <RenderZendeskApiError zendeskApiError={props.zendeskApiError} />
        <Renderticketmessage
          ticketCreated={props.ticketCreated}
          handleTicketPopUp={props.handleTicketPopUp}
        />
      </Container>
      <div className="input-wrapper" style={{ backgroundColor: "transparent" }}>
        <div className="fix-form-wrapper" style={{ padding: "10px" }}>
          <Form className="chat-form" onSubmit={props.handleFormSubmit}>
            <Form.Group style={{ width: "80%", marginBottom: "0" }}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type details of issue"
                required
                ref={props.inputFocusField}
                id="getValue"
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

export default Hasmorequestions;
