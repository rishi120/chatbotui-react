import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Incorrectinfo from "../incorrect-info";
import Correctinfo from "../correct-info";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";

/* this component will  render the other two components namely incorrect info and correct info based on the buttons users will be clicking */

class Activitydetails extends Component {
  state = {
    wrongInfo: false,
    correctInfo: false,
  };
  showIncorrectSection = () => {
    this.setState({
      wrongInfo: true,
      correctInfo: false,
    });
  };
  showCorrectSection = () => {
    this.setState({
      correctInfo: true,
      wrongInfo: false,
    });
  };

  render() {
    /* render incorrect info component here */
    const ShowIncorrectContent = () => {
      return <Incorrectinfo />;
    };

    /* render correct info component here */

    const ShowCorrectContent = () => {
      return <Correctinfo />;
    };

    /* check the state of incorrect info component and render it conditionally */

    const RenderIncorrectContent = () => {
      const check = this.state.wrongInfo;
      if (check) {
        return <ShowIncorrectContent />;
      }
      return null;
    };

    /* check the state of correct info component and render it conditionally */

    const RenderCorrectContent = () => {
      const checkContent = this.state.correctInfo;
      if (checkContent) {
        return <ShowCorrectContent />;
      }
      return null;
    };

    return (
      <>
        <Container>
          <div className="chat-thread-left">
            <p style={{ marginBottom: "15px" }}>
              Do the details of activity points looks correct to you?
            </p>
            <div className="button-wrapper">
              <Button onClick={this.showIncorrectSection}>No</Button>
              <Button onClick={this.showCorrectSection}>Yes</Button>
            </div>
          </div>
        </Container>

        <RenderIncorrectContent />
        <RenderCorrectContent />
      </>
    );
  }
}

export default Activitydetails;
