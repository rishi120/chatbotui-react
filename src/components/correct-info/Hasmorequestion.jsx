import React, { useRef } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import dots from "../../assets/images/dot.gif";
import cancelIcon from "../../assets/images/cancel-white.png";

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
          onClick={props.handleErrorPopUp}
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

const Hasmorequestions = (props) => {
  return (
    <>
      <Renderticketmessage
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
      />
      <Container>
        <div className="chat-thread-right">
          <p>Yes, I have more question.</p>
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
          <Rendererrormessage
            errorMessage={props.errorMessage}
            handleErrorPopUp={props.handleErrorPopUp}
          />
          <Renderfetcherror errorFetchApi={props.errorFetchApi} />
        </div>
      </Container>
      <div className="input-wrapper" style={{ backgroundColor: "transparent" }}>
        <div className="fix-form-wrapper" style={{ padding: "10px" }}>
          <Form className="chat-form" onSubmit={props.handleFormSubmit}>
            <Form.Group>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type details of issue"
                required
                ref={props.inputFocusField}
                id="getValue"
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

export default Hasmorequestions;
