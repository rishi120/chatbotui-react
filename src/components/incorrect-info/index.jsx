import React, { Component } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Sendicon from "../../assets/images/ico-solid-send.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Incorrectinfo extends Component {
  state = {
    option: [
      {
        options: "Activity Points are incorrect",
      },
      {
        options: "Have not received the payout",
      },
      {
        options: "Need help with the calculation",
      },
      {
        options: "Some other reasons",
      },
    ],
    hideContent: false,
  };

  showIncorrectList = () => {
    this.setState({
      hideContent: true,
    });

    // const selectInput = document.getElementById("focusInput");
    // // selectInput.focus();
    // console.log(selectInput);
  };
  render() {
    /* the below component  will generate the list of issues */
    const RenderIncorrectInfo = ({ option }) => {
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
              <p>
                Please help us understand your concern by selecting your issue
              </p>
              <ul className="options">
                {this.state.option.map((issues) => {
                  return (
                    <li key={issues.options} onClick={this.showIncorrectList}>
                      {issues.options}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </>
      );
    };

    /* the below component is to show the other details including the input field based on the issues user will be selecting */

    const Showmorecontent = () => {
      return (
        <>
          <Container>
            <div className="chat-thread-right">
              <p>Activity points are selected</p>
            </div>

            <div className="mint-pro-logo">
              <img src={Mintlogo} alt="logo" />
              <p>Mint Pro</p>
            </div>
            <div className="chat-thread-left">
              <p>Please provide more details about your issue</p>
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

    const Rendermorecontent = () => {
      const stateCheck = this.state.hideContent;
      if (stateCheck) {
        return <Showmorecontent />;
      }
      return null;
    };
    return (
      <>
        <RenderIncorrectInfo />
        <Rendermorecontent />
      </>
    );
  }
}

export default Incorrectinfo;
