import React from "react";
import Renderinputcomponents from "./Inputcomponents";
import { v4 as uuidv4 } from "uuid";
import dots from "../../assets/images/dot.gif";

const Queryform = ({
  userName,
  selectOptions,
  showData,
  handleShowOptions,
  hideFormElement,
  hideSecondFormElement,
  hideThirdFormElement,
  handleInputField,
  handleSecondInputField,
  inputValue,
  replyText,
  handleReplyText,
  inputProvider,
  customerName,
  policyNumber,
  focusInput,
  Rendererrormessage,
  saleType,
  saleTypeLoader,
  queryResponseObject,
  loadingAnyOtherQuestion,
  queryInputDisabled,
  ticketCreated,
  handleTicketPopUp,
  handleErrorPopUp,
  errorMessage,
  handleMissingErrorPopup,
  showZendeskLoader,
  disabledBtn,
  zendeskApiError,
  errorMessageRef,
}) => {
  return (
    <>
      <div className="">
        <div className="chat-thread-left">
          <p
            style={{
              // marginBottom: "15px",
              paddingBottom: "10px",
              borderBottom: "1px solid #dedede",
            }}
          >
            {saleType}
          </p>
          {saleTypeLoader && (
            <p
              style={{
                marginBottom: 0,
                fontStyle: "italic",
              }}
            >
              <img src={dots} alt="dots" style={{ width: "50px" }} />
              MintPro is Typing...
            </p>
          )}
          <ul className="option-list-style">
            {selectOptions.map((values) => {
              return (
                <li
                  key={uuidv4()}
                  className="hideList"
                  onClick={() => handleShowOptions(values.title, values.title)}
                >
                  {values.title}
                </li>
              );
            })}
          </ul>
        </div>
        <Renderinputcomponents
          hideFormElement={hideFormElement}
          hideSecondFormElement={hideSecondFormElement}
          hideThirdFormElement={hideThirdFormElement}
          handleInputField={handleInputField}
          handleSecondInputField={handleSecondInputField}
          showData={showData}
          inputValue={inputValue}
          replyText={replyText}
          handleReplyText={handleReplyText}
          inputProvider={inputProvider}
          customerName={customerName}
          policyNumber={policyNumber}
          focusInput={focusInput}
          queryResponseObject={queryResponseObject}
          loadingAnyOtherQuestion={loadingAnyOtherQuestion}
          queryInputDisabled={queryInputDisabled}
          ticketCreated={ticketCreated}
          handleTicketPopUp={handleTicketPopUp}
          handleErrorPopUp={handleErrorPopUp}
          errorMessage={errorMessage}
          handleMissingErrorPopup={handleMissingErrorPopup}
          showZendeskLoader={showZendeskLoader}
          disabledBtn={disabledBtn}
          zendeskApiError={zendeskApiError}
          errorMessageRef={errorMessageRef}
        />

        {/* <Button variant="primary" type="submit" className="form-submit-btn">
          Submit
        </Button> */}
      </div>
    </>
  );
};

export default Queryform;
