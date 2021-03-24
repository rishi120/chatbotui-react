import React from "react";
import Mintlogo from "../../assets/images/group.svg";
import Container from "react-bootstrap/Container";
import Queryform from "../Missing-points/form";

const Showsection = (props) => {
  const noPad = {
    paddingLeft: "0",
    paddingRight: "0",
  };
  return (
    <Container>
      <div className="chat-thread-right">
        <p>Missing points for sale</p>
      </div>

      <div className="mint-pro-logo">
        <img src={Mintlogo} alt="logo" />
        <p>Mint Pro</p>
      </div>
      <Queryform
        userName="Rajesh"
        selectOptions={props.selectOptions}
        showData={props.showData}
        handleShowOptions={props.handleShowOptions}
        hideFormElement={props.hideFormElement}
        hideSecondFormElement={props.hideSecondFormElement}
        hideThirdFormElement={props.hideThirdFormElement}
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
      />
    </Container>
  );
};

export default Showsection;