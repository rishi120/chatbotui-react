import React, { Component } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";

class Correctinfo extends Component {
  state = {
    yes: false,
  };

  correctOption = () => {
    this.setState({
      yes: true,
    });
  };
  render() {
    const Showmoreoptions = () => {
      return (
        <>
          <Container>
            <div className="chat-thread-right">
              <p>Yes, I have more question.</p>
            </div>

            <div className="mint-pro-logo">
              <img src={Mintlogo} alt="logo" />
              <p>Mint Pro</p>
            </div>
            <div className="chat-thread-left">
              <p>Please describe your question in detail</p>
            </div>
          </Container>
          <div className="input-wrapper">
            <Container fluid>
              {/* <input type="text" /> */}
              <Row>
                <Form>
                  <Form.Group>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Type details of issue"
                      required
                      onChange={this.activaButton}
                      // id="focusInput"
                    />
                  </Form.Group>
                  <Button type="submit" className="submit-btn">
                    <img src={Sendicon} alt="send icon" />
                  </Button>
                </Form>
              </Row>
            </Container>
          </div>
        </>
      );
    };

    const Rendermoreoptions = () => {
      const checkstateStatus = this.state.yes;
      if (checkstateStatus) {
        return <Showmoreoptions />;
      }
      return null;
    };

    return (
      <>
        <Container>
          <div className="chat-thread-right">
            <p>Yes, it looks correct</p>
          </div>

          <div className="mint-pro-logo">
            <img src={Mintlogo} alt="logo" />
            <p>Mint Pro</p>
          </div>
          <div className="chat-thread-left">
            <p>That's great. Do you have any other questions?</p>
            <ul className="options">
              <li onClick={this.correctOption}>Yes, I have more question.</li>
              <li onClick={this.incorrectOption}>
                No, I don't have any more questions.
              </li>
            </ul>
          </div>
        </Container>
        <Rendermoreoptions />
      </>
    );
  }
}

export default Correctinfo;
