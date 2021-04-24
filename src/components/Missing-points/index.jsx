import React, { useRef } from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Showsection from "../Missing-points/Showsections";
import Missingpointsbonus from "../Missing-points/mission-points-bonus";
import Otherreasons from "../Missing-points/Otherreasons";

const RenderOptions = (props) => {
  return (
    <ul className="options" ref={props.hideLists}>
      {props.renderLists.map((values) => {
        return (
          <li
            onClick={() => props.handleLists(values.listId)}
            key={values.listItems}
            style={props.listStyle}
            className="lists"
            ref={props.noBorder}
          >
            {values.listItems}
          </li>
        );
      })}
    </ul>
  );
};

const Rendercomponent = (props) => {
  const checkstateStatus = props.showLists;
  const stateStatus = props.showMissingBonus;
  const stateStatus1 = props.otherReasons;
  if (checkstateStatus) {
    return (
      <Showsection
        selectOptions={props.selectOptions}
        hideFormElement={props.hideFormElement}
        hideSecondFormElement={props.hideSecondFormElement}
        hideThirdFormElement={props.hideThirdFormElement}
        showData={props.showData}
        handleShowOptions={props.handleShowOptions}
        handleInputField={props.handleInputField}
        handleSecondInputField={props.handleSecondInputField}
        replyText={props.replyText}
        handleReplyText={props.handleReplyText}
        inputProvider={props.inputProvider}
        customerName={props.customerName}
        policyNumber={props.policyNumber}
        focusInput={props.focusInput}
        saleType={props.saleType}
        saleTypeLoader={props.saleTypeLoader}
        queryResponseObject={props.queryResponseObject}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        queryInputDisabled={props.queryInputDisabled}
        ticketCreated={props.ticketCreated}
        handleTicketPopUp={props.handleTicketPopUp}
        handleErrorPopUp={props.handleErrorPopUp}
        errorMessage={props.errorMessage}
        handleMissingErrorPopup={props.handleMissingErrorPopup}
        showZendeskLoader={props.showZendeskLoader}
        disabledBtn={props.disabledBtn}
        zendeskApiError={props.zendeskApiError}
        errorMessageRef={props.errorMessageRef}
      />
    );
  } else if (stateStatus) {
    return (
      <Missingpointsbonus
        missingPoints={props.renderLists[0].listItems}
        inputFocusField={props.inputFocusField}
        saleType={props.saleType}
        loadingAnyOtherQuestion={props.loadingAnyOtherQuestion}
        showAnyOtherQuestion={props.showAnyOtherQuestion}
        handleMissingBonusForm={props.handleMissingBonusForm}
        ticketCreated={props.ticketCreated}
        errorMessage={props.errorMessage}
        handleTicketPopUp={props.handleTicketPopUp}
        handleErrorPopUp={props.handleErrorPopUp}
        focusInputField={props.focusInputField}
        showUserMessage={props.showUserMessage}
        showUserMessageComponent={props.showUserMessageComponent}
        showZendeskLoader={props.showZendeskLoader}
        disabledBtn={props.disabledBtn}
        hideErrorMessage={props.hideErrorMessage}
        zendeskApiError={props.zendeskApiError}
        errorMessageRef={props.errorMessageRef}
      />
    );
  } else if (stateStatus1) {
    return (
      <Otherreasons
        otherReasons={props.renderLists[0].listItems}
        inputFocusField={props.inputFocusField}
        showOtherOptions={props.showOtherOptions}
        saleTypeLoader={props.saleTypeLoader}
        handleOtherReasonForm={props.handleOtherReasonForm}
        ticketCreated={props.ticketCreated}
        errorMessage={props.errorMessage}
        handleTicketPopUp={props.handleTicketPopUp}
        handleErrorPopUp={props.handleErrorPopUp}
        showUserMessage={props.showUserMessage}
        showUserMessageComponent={props.showUserMessageComponent}
        showZendeskLoader={props.showZendeskLoader}
        disabledBtn={props.disabledBtn}
        hideErrorMessage={props.hideErrorMessage}
        zendeskApiError={props.zendeskApiError}
        errorMessageRef={props.errorMessageRef}
      />
    );
  }
  return null;
};

const Missingpoints = (props) => {
  return (
    <section
      className="query-wrapper"
      style={{ paddingTop: "20px", borderTop: "0" }}
    >
      <Container>
        <div className="mint-pro-logo">
          <img src={Mintlogo} alt="logo" />
          <p>MintPro</p>
        </div>
        <div className="chat-thread-left" style={{ padding: "0" }}>
          <p
            style={{
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
              // borderBottom: "1px solid #dedede",
            }}
          >
            Please select from one of the issues below
          </p>
          <RenderOptions
            renderLists={props.renderLists}
            handleLists={props.handleLists}
            listStyle={props.listStyle}
            noBorder={props.noBorder}
            hideLists={props.hideLists}
          />
        </div>
        <Rendercomponent {...props} />
      </Container>
    </section>
  );
};

export default Missingpoints;
