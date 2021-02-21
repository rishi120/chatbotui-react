import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mintlogo from "../../assets/images/group.svg";
import Activitydetails from "../activity-details";
import { history } from "../../App";

/* this is the master component for the activity details component */

const Raisequery = (props) => {
  const historyState = history.location.state;
  const userEntry = historyState.userEntry;
  return (
    <section className="query-wrapper">
      <Container>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>Mint Pro</p>
        </div>
        <div className="chat-thread-left">
          <div className="bottom-border">
            <div className="show-date">
              {/* <p>{userEntry.day}</p> */}
              <h1>{userEntry.dateIssue}</h1>
            </div>
            <div className="show-user-details">
              <h1>
                {userEntry.userName}
                <span>{userEntry.points}</span>
              </h1>
              <p>{userEntry.additionalInfo}</p>
            </div>
          </div>
          <div className="additional-info">
            <p>
              Your activity points for this sale are
              <span>{userEntry.points}pts</span>
            </p>
          </div>
        </div>
        <div style={{ padding: "10px", width: "100%" }}></div>

        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>Mint Pro</p>
        </div>
      </Container>
      <Activitydetails />
    </section>
  );
};

export default Raisequery;
