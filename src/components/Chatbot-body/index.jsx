import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Monthselection from "../Month-selector";
import Entries from "../Entry-selection";
import Navbar from "../Navbar";
import Selectedpolicy from "../Selected-policy";
import Missingpoints from "../Missing-points";
import Chaticon from "../../assets/images/chat.png";
import Closeicon from "../../assets/images/cancel.png";
import Rating1 from "../../assets/images/rating-icons/rating-1.svg";
import Rating2 from "../../assets/images/rating-icons/rating-2.svg";
import Rating3 from "../../assets/images/rating-icons/rating-3.svg";
import Rating4 from "../../assets/images/rating-icons/rating-4.svg";
import Rating5 from "../../assets/images/rating-icons/rating-5.svg";
import Redicon from "../../assets/images/rating-icons/likert-fun-filled-1.svg";
import Orangeicon from "../../assets/images/rating-icons/likert-fun-filled-2.svg";
import Yellowicon from "../../assets/images/rating-icons/likert-fun-filled-3.svg";
import Lightgreen from "../../assets/images/rating-icons/likert-fun-filled-4.svg";
import Darkgreen from "../../assets/images/rating-icons/likert-fun-filled-5.svg";
import { v4 as uuidv4 } from "uuid";
import gsap, { Power2 } from "gsap";
import { Authkey } from "../../zendesk_auth_keys";

/* the master component where will be rendering all the other components and also we will be managing all our states here */

const Chatbotbody = (props) => {
  const [wrongInfo, setwrongInfo] = useState(false);
  const [correctInfo, setcorrectInfo] = useState(false);
  const [showIssueOptionList, setShowIssueOptionList] = useState(false);
  const [selectedIssueOptionList, setSelectedIssueOptionList] = useState("");
  const [shouldShowCorrectInfo, setShouldShowCorrectInfo] = useState(false);
  const [shouldShowIncorrectInfo, setShouldShowIncorrectInfo] = useState(false);
  const [selectedUserEntry, setSelectedUserEntry] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [missingPointsClicked, setMissingPointsClicked] = useState(false);
  const [hideButtonWrapper, setHideButtonWrapper] = useState(true);
  const [monthWiseResult, setMonthWiseResult] = useState(false);
  const [showLists, setShowLists] = useState(false);
  const [showMissingBonus, setShowMissingBonus] = useState(false);
  const [otherReasons, setOtherreasons] = useState(false);
  const [hideFormElement, setHideFormElement] = useState(false);
  const [hideSecondFormElement, sethideSecondFormElement] = useState(false);
  const [hideThirdFormElement, setHideThirdFormElement] = useState(false);
  const [showData, showSetData] = useState("");
  const [replyText, setReplyText] = useState("");
  // const [showInputProvider, setShowInputProvider] = useState("");
  const [inputProvider, setInputProvider] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [queryResponseObject, setQueryResponseObject] = useState({
    inputProvider: "",
    customerName: "",
    policyNumber: "",
  });
  const [policyNumber, setPolicyNumber] = useState("");
  const [salesDetailsType, setSalesDetailsType] = useState("input_provider");
  const [showMonthData, setShowMonthData] = useState(true);
  const [getMonths, setGetMonths] = useState([]); // this state is used to fetch the months from the api
  /* the below state is to display the cycle entries for the user */
  const [entries, setEntries] = useState([]); // this state is used to fetch the cycle entries from the api
  // const [getCycleTitle, setGetCycleTitle] = useState();
  const [getMonthTitle, setGetMonthTitle] = useState();
  const [monthLoading, setMonthLoading] = useState();
  const [loadingSelectedMonth, setLoadingSelectedMonth] = useState();
  const [loadingAnyOtherQuestion, setLoadingAnyOtherQuestion] = useState();
  const [showAnyOtherQuestion, setshowAnyOtherQuestion] = useState();
  const [showNoOtherQuestion, setShowNoOtherQuestion] = useState();
  const [showNoData, setShowNoData] = useState();
  const [saleType, selectSaleType] = useState();
  const [saleTypeLoader, setSaleTypeLoader] = useState();
  const [showOtherOptions, setShowOtherOptions] = useState();
  const [ticketCreated, setTicketCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorFetchApi, setErrorFetchApi] = useState("");
  const [zendeskApiError, setZendeskApiError] = useState(false);
  const [queryInputDisabled, setQueryInputDisabled] = useState(false);
  const [haveAnyOtherQuestion, setHaveAnyOtherQuestion] = useState();
  const [yesHaveMoreQuestions, setYesHaveMoreQuestions] = useState();
  const [noIHaveNoQuestions, setNoIHaveNoQuestions] = useState();
  const [showMonthBubble, setShowMonthBubble] = useState(false);
  const [failedTicket, setFailedTicket] = useState("");
  const [showUserMessageComponent, setShowUserMessageComponent] = useState(
    false
  );
  const [showUserMessage, setShowUserMessage] = useState("");
  const [showZendeskLoader, setShowZendeskLoader] = useState(false);
  const [showMoreQuestion, setShowMoreQuestion] = useState({
    Question: "Yes, I have more question.",
  });
  const [showNoQuestion, setShowNoQuestion] = useState({
    Question: " No, I don't have any more questions.",
  });

  /* use refs */
  const focusInput = useRef(null);
  const focusInputField = useRef(null);
  const inputFocusField = useRef(null);
  const focusIncorrectInputField = useRef(null);
  const removeBorder = useRef(0);
  const noBorder = useRef(0);
  const disabledBtn = useRef(null);
  const hideUl = useRef(null);
  const hideLists = useRef(null);
  const errorMessageRef = useRef(null);

  useEffect(() => {
    /* implementing axios to fetch the api to get all the relevent months */
    setMonthLoading(true);
    setErrorFetchApi("");
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS/resp?query=Previous six months&userID=as231"
    )
      .then((response) => {
        setGetMonths(response.data.detail_list);
        setGetMonthTitle(response.data.Text);
        setMonthLoading(false);
      })
      .catch(function () {
        setMonthLoading(false);
        setGetMonths([]);
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
      });
  }, []);

  /* the below state is related to the incorrect info component and it is use to display the list of issues if the activity points are not correct upon clicking of the no button */
  const [issueOptionList, setIssueOptionList] = useState([
    {
      text: "Activity Points are incorrect",
      issueId: 1,
    },
    {
      text: "Have not received the payout",
      issueId: 2,
    },
    {
      text: "Need help with the calculation",
      issueId: 3,
    },
    {
      text: "Some other reasons",
      issueId: 4,
    },
  ]);

  /* missing points component and all other sub components with states */

  const [renderLists, setRenderLists] = useState([
    {
      listItems: "Missing points on sale",
      listId: 1,
    },
    {
      listItems: "Missing points for a Bonus",
      listId: 2,
    },
    {
      listItems: "Some other reason",
      listId: 3,
    },
  ]);

  function handleMissingBonusForm(e) {
    var blackListedWords = [
      "Cash",
      "payout",
      "grid",
      "RnR",
      "Comprehensive",
      "Third Party",
      "Invictus",
      "Fintech",
    ];
    var getinputValue = document.getElementById("getMissingBonusValue").value;
    if (
      getinputValue.includes(blackListedWords[0]) ||
      getinputValue.includes(blackListedWords[1]) ||
      getinputValue.includes(blackListedWords[2]) ||
      getinputValue.includes(blackListedWords[3]) ||
      getinputValue.includes(blackListedWords[4]) ||
      getinputValue.includes(blackListedWords[5]) ||
      getinputValue.includes(blackListedWords[6]) ||
      getinputValue.includes(blackListedWords[7]) ||
      getinputValue.includes(blackListedWords[8])
    ) {
      if (errorMessage) {
        errorMessageRef.current.classList.add("animate-error-message");
        setTimeout(() => {
          errorMessageRef.current.classList.remove("animate-error-message");
        }, 5000);
      }

      setErrorMessage(true);
      // setshowAnyOtherQuestion("");
      setTimeout(() => {
        inputFocusField.current.focus();
      }, 300);
    } else {
      const dataObj = {
        query: getinputValue,
      };
      setShowUserMessageComponent(true);
      setShowUserMessage(getinputValue);
      setShowZendeskLoader(true);

      Axios({
        method: "post",
        url: "https://turtlemintsupport.zendesk.com/api/v2/tickets.json",
        headers: {
          "content-type": "application/json",
          Authorization: Authkey,
        },
        data: {
          ticket: {
            subject: getinputValue,
            comment: {
              body: JSON.stringify(dataObj),
            },
          },
        },
      })
        .then((response) => {
          setTicketCreated(true);
          setShowZendeskLoader(false);
          setZendeskApiError(false);
          setErrorMessage(false);
          setTimeout(() => {
            inputFocusField.current.disabled = "disabled";
            disabledBtn.current.setAttribute("disabled", "disabled");
          }, 300);
        })
        .catch((error) => {
          setZendeskApiError(true);
          setShowZendeskLoader(false);
        });
    }

    e.preventDefault();
  }

  function handleOtherReasonForm(e) {
    var blackListedWords = [
      "Cash",
      "payout",
      "grid",
      "RnR",
      "Comprehensive",
      "Third Party",
      "Invictus",
      "Fintech",
    ];
    var getinputValue = document.getElementById("otherReasonInput").value;
    if (
      getinputValue.includes(blackListedWords[0]) ||
      getinputValue.includes(blackListedWords[1]) ||
      getinputValue.includes(blackListedWords[2]) ||
      getinputValue.includes(blackListedWords[3]) ||
      getinputValue.includes(blackListedWords[4]) ||
      getinputValue.includes(blackListedWords[5]) ||
      getinputValue.includes(blackListedWords[6]) ||
      getinputValue.includes(blackListedWords[7]) ||
      getinputValue.includes(blackListedWords[8])
    ) {
      if (errorMessage) {
        errorMessageRef.current.classList.add("animate-error-message");
        setTimeout(() => {
          errorMessageRef.current.classList.remove("animate-error-message");
        }, 5000);
      }
      setErrorMessage(true);
      // setshowAnyOtherQuestion("");
      setTimeout(() => {
        inputFocusField.current.focus();
      }, 300);
    } else {
      const dataObj = {
        query: getinputValue,
      };
      setShowUserMessageComponent(true);
      setShowUserMessage(getinputValue);
      setShowZendeskLoader(true);

      Axios({
        method: "post",
        url: "https://turtlemintsupport.zendesk.com/api/v2/tickets.json",
        headers: {
          "content-type": "application/json",
          Authorization: Authkey,
        },
        data: {
          ticket: {
            subject: getinputValue,
            comment: {
              body: JSON.stringify(dataObj),
            },
          },
        },
      })
        .then((response) => {
          setTicketCreated(true);
          setErrorMessage(false);
          setShowZendeskLoader(false);
          setZendeskApiError(false);
          setTimeout(() => {
            inputFocusField.current.disabled = "disabled";
            disabledBtn.current.setAttribute("disabled", "disabled");
          }, 300);
        })
        .catch((error) => {
          setZendeskApiError(true);
          setShowZendeskLoader(false);
        });
    }

    e.preventDefault();
  }

  const [selectOptions, setSelectOptions] = useState([]);

  const handleLists = (getListId) => {
    setTimeout(() => {
      hideLists.current.style.display = "none";
    }, 300);
    if (getListId === 1) {
      setSaleTypeLoader(true);
      setErrorFetchApi("");

      Axios.get(
        "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=Missing Points for sale &userID=as231"
      )
        .then((response) => {
          setSelectOptions(response.data.detail_list[0].dict_list);
          selectSaleType(response.data.Text);
          setSaleTypeLoader(false);
        })
        .catch((error) => {
          setErrorFetchApi(
            "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
          );
          setSaleTypeLoader(false);
        });
      setShowLists(true);
      setOtherreasons(false);
      setShowMissingBonus(false);
      setRenderLists(
        renderLists.filter((i) => {
          return i.listId === 1 ? true : false;
        })
      );
    } else if (getListId === 2) {
      setLoadingAnyOtherQuestion(true);

      setTimeout(() => {
        // inputFocusField.current.disabled = "disabled";
        inputFocusField.current.focus();
        // noBorder.current.style.borderBottom = "none";
      }, 300);
      setErrorFetchApi("");
      Axios.get(
        "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=AnyOtherQuestions_Yes&userID=asd123"
      )
        .then((response) => {
          setshowAnyOtherQuestion(response.data.Text);
          setLoadingAnyOtherQuestion(false);
          setTimeout(() => {
            // inputFocusField.current.removeAttr = "disabled";
            inputFocusField.current.focus();
          }, 300);
        })
        .catch((error) => {
          setErrorFetchApi(
            "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
          );
          setSaleTypeLoader(false);
          setLoadingAnyOtherQuestion(false);
        });
      setShowMissingBonus(true);
      setShowLists(false);
      setOtherreasons(false);
      setRenderLists(
        renderLists.filter((i) => {
          return i.listId === 2 ? true : false;
        })
      );
    } else if (getListId === 3) {
      // setTimeout(() => {
      //   noBorder.current.style.borderBottom = "none";
      // }, 300);
      setSaleTypeLoader(true);
      // setTimeout(() => {
      //   inputFocusField.current.disabled = "disabled";
      // }, 100);

      setErrorFetchApi("");
      Axios.get(
        "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=some other reasons &userID=as231"
      )
        .then((response) => {
          setShowOtherOptions(response.data.Text);
          setSaleTypeLoader(false);
          setTimeout(() => {
            // inputFocusField.current.removeAttr = "disabled";
            inputFocusField.current.focus();
          }, 300);
        })
        .catch((error) => {
          setErrorFetchApi(
            "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
          );
          setSaleTypeLoader(false);
        });
      setOtherreasons(true);
      setShowMissingBonus(false);
      setShowLists(false);
      // setTimeout(() => {
      //   inputFocusField.current.focus();
      // }, 300);
      setRenderLists(
        renderLists.filter((i) => {
          return i.listId === 3 ? true : false;
        })
      );
    }
  };

  /* correct info component rating state */
  const [iconValue, setIconValue] = useState([
    {
      ratings: Rating1,
      message: "Oh, sorry to know that. We promise to do better next time.",
      colorIcons: Redicon,
      selected: false,
      id: 1,
    },
    {
      ratings: Rating2,
      message: "Oh, sorry to know that. We promise to do better next time.",
      colorIcons: Orangeicon,
      selected: false,
      id: 2,
    },
    {
      ratings: Rating3,
      message: "Thank you for your feedback.We promise to do better next time.",
      colorIcons: Yellowicon,
      selected: false,
      id: 3,
    },
    {
      ratings: Rating4,
      message: "Thank you! It makes our day to see you happy.",
      colorIcons: Lightgreen,
      selected: false,
      id: 4,
    },
    {
      ratings: Rating5,
      message: "Thank you! It makes our day to see you happy.",
      colorIcons: Darkgreen,
      selected: false,
      id: 5,
    },
  ]);
  const [showRatingMessage, setShowRatingMessage] = useState("");
  function handleIconClick(message) {
    const dispBlock = document.getElementById("disp-block");
    dispBlock.style.display = "block";
    setShowRatingMessage(message);
  }
  function handleChangeIcon(iconId) {
    const updatedIconValue = iconValue.map((icon) => {
      if (icon.id === iconId) {
        return {
          ...icon,
          selected: true,
        };
      }
      return {
        ...icon,
        selected: false,
      };
    });
    setIconValue(updatedIconValue);
  }

  const handleShowOptions = (saleType, extractTitle) => {
    let obj = {
      body: "",
      title: extractTitle,
      value: "",
      subtitle: "",
    };
    setHideFormElement(true);
    showSetData(saleType);
    setSelectOptions([obj]);
    setLoadingAnyOtherQuestion(true);
    setErrorFetchApi("");
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=mutual funds&userID=asd123"
    )
      .then((response) => {
        console.log(response);
        setQueryResponseObject({
          ...queryResponseObject,
          inputProvider: response.data.Text,
        });
        setLoadingAnyOtherQuestion(false);
        setTimeout(() => {
          focusInput.current.focus();
        }, 300);
      })
      .catch((error) => {
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
        setLoadingAnyOtherQuestion(false);
      });
  };

  const handleInputField = () => {
    var blackListedWords = [
      "Cash",
      "payout",
      "grid",
      "RnR",
      "Comprehensive",
      "Third Party",
      "Invictus",
      "Fintech",
    ];
    var getinputValue = document.getElementById("focus-input").value;
    if (
      getinputValue.includes(blackListedWords[0]) ||
      getinputValue.includes(blackListedWords[1]) ||
      getinputValue.includes(blackListedWords[2]) ||
      getinputValue.includes(blackListedWords[3]) ||
      getinputValue.includes(blackListedWords[4]) ||
      getinputValue.includes(blackListedWords[5]) ||
      getinputValue.includes(blackListedWords[6]) ||
      getinputValue.includes(blackListedWords[7]) ||
      getinputValue.includes(blackListedWords[8])
    ) {
      if (errorMessage) {
        errorMessageRef.current.classList.add("animate-error-message");
        setTimeout(() => {
          errorMessageRef.current.classList.remove("animate-error-message");
        }, 5000);
      }
      setErrorMessage(true);
      setTimeout(() => {
        focusInput.current.focus();
      }, 300);
    } else {
      if (replyText === "") {
        alert("Input field cannot be empty");
      } else if (salesDetailsType === "input_provider") {
        setSalesDetailsType("customer_name");
        setInputProvider(replyText);
        setReplyText("");
        setLoadingAnyOtherQuestion(true);
        setErrorMessage(false);
        Axios.get(
          "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=inputprovider&userID=asd123"
        )
          .then((response) => {
            setQueryResponseObject({
              ...queryResponseObject,
              customerName: response.data.Text,
            });
            setLoadingAnyOtherQuestion(false);
            setTimeout(() => {
              disabledBtn.current.disabled = "disabled";
            }, 300);
          })
          .catch((error) => {
            console.log("Error");
            setLoadingAnyOtherQuestion(false);
          });
      } else if (salesDetailsType === "customer_name") {
        setReplyText("");
        setSalesDetailsType("policy_number");
        setCustomerName(replyText);
        setLoadingAnyOtherQuestion(true);
        setErrorMessage(false);
        Axios.get(
          "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=CustomerName&userID=asd123"
        )
          .then((response) => {
            setQueryResponseObject({
              ...queryResponseObject,
              policyNumber: response.data.Text,
            });
            setLoadingAnyOtherQuestion(false);
          })
          .catch((error) => {
            console.log("Error");
            setLoadingAnyOtherQuestion(false);
          });
      } else if (salesDetailsType === "policy_number") {
        setReplyText("");
        setQueryInputDisabled(true);
        // setHideFormElement(false);
        setPolicyNumber(replyText);
        setErrorMessage(false);
        const dataObj = {
          inputProvider: inputProvider,
          customerName: customerName,
          policyNumber: replyText,
        };
        // setErrorMessage(true);
        Axios({
          method: "post",
          url: "https://turtlemintsupport.zendesk.com/api/v2/tickets.json",
          headers: {
            "content-type": "application/json",
            Authorization: Authkey,
          },
          data: {
            ticket: {
              subject: showData,
              comment: {
                body: JSON.stringify(dataObj),
              },
            },
          },
        })
          .then((response) => {
            setTicketCreated(true);
            setZendeskApiError(false);
            setShowZendeskLoader(false);
            setErrorMessage(false);
            setTimeout(() => {
              focusInput.current.disabled = "disabled";
              disabledBtn.current.setAttribute("disabled", "disabled");
            }, 300);
          })
          .catch((error) => {
            setZendeskApiError(true);
            setShowZendeskLoader(false);
          });
      }
    }

    setTimeout(() => {
      focusInput.current.focus();
    }, 300);
  };
  // const handleSecondInputField = () => {
  //   // setHideThirdFormElement(true);
  // };

  const listStyle = {
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const handleReplyText = (newReplyText) => {
    setReplyText(newReplyText);
    // setErrorMessage(false);
  };

  const hideErrorMessage = () => {
    // setErrorMessage(false);
  };

  const handleSelectUserEntry = (userEntry) => {
    setSelectedUserEntry(userEntry);
    setMissingPointsClicked(false);
    setMonthWiseResult(false);
  };

  const handleSelectedMonth = (month) => {
    setLoadingSelectedMonth(true);
    setMissingPointsClicked(false);
    setSelectedUserEntry(false);
    setSelectedMonth(month);
    setShowMonthBubble(true);
    setGetMonths([]);
    setEntries([]);
    setErrorFetchApi("");
    Axios.get(
      `https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=${month}&userID=aasdqw123`
    )
      .then((monthResponse) => {
        setShowNoData(monthResponse.data.Text);
        const responseData = monthResponse.data.detail_list.map((splitData) => {
          {
            splitData.dict_list.map((innerData) => {
              const titles = innerData.title.split(",");
              innerData.titles = titles;
            });
          }
        });
        if (
          monthResponse.data.Text === "Your data was not found in the database."
        ) {
          setMissingPointsClicked(true);
          setSelectedUserEntry(false);
          const newRenderList = monthResponse.data.detail_list[0].dict_list.map(
            (monthData, idx) => {
              return {
                ...monthData,
                listItems: monthData.title,
                listId: idx + 1,
              };
            }
          );
          setRenderLists(newRenderList);
        } else {
          setEntries(monthResponse.data.detail_list);
        }
        setLoadingSelectedMonth(false);
        setSelectedUserEntry(false);
      })
      .catch(function (error) {
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
        setLoadingSelectedMonth(false);
      });
    setSelectedMonth(month);
  };

  const handleMissingPointsClicked = () => {
    setMissingPointsClicked(true);
    setSelectedUserEntry(false);
  };

  const handleShowIssueOptionList = (issueOptionListText, issueOptionId) => {
    let issueObj = {
      objIssues: issueOptionId,
    };
    setIssueOptionList([issueObj]);
    setSelectedIssueOptionList(issueOptionListText);
    setShowIssueOptionList(true);
    setLoadingAnyOtherQuestion(true);
    setTimeout(() => {
      hideUl.current.style.display = "none";
      focusIncorrectInputField.current.focus();
    }, 300);
    setErrorFetchApi("");
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=AnyOtherQuestions_Yes&userID=as231"
    )
      .then((response) => {
        setshowAnyOtherQuestion(response.data.Text);
        setLoadingAnyOtherQuestion(false);
        setTimeout(() => {
          // focusIncorrectInputField.current.removeAttr = "disabled";
          focusIncorrectInputField.current.focus();
        }, 300);
      })
      .catch((error) => {
        setLoadingAnyOtherQuestion(false);
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
      });
  };

  function handleIncorrectInfoFormSubmit(e) {
    var blackListedWords = [
      "Cash",
      "payout",
      "grid",
      "RnR",
      "Comprehensive",
      "Third Party",
      "Invictus",
      "Fintech",
    ];
    var getinputValue = document.getElementById("getIncorrectInfoInputValue")
      .value;
    if (
      getinputValue.includes(blackListedWords[0]) ||
      getinputValue.includes(blackListedWords[1]) ||
      getinputValue.includes(blackListedWords[2]) ||
      getinputValue.includes(blackListedWords[3]) ||
      getinputValue.includes(blackListedWords[4]) ||
      getinputValue.includes(blackListedWords[5]) ||
      getinputValue.includes(blackListedWords[6]) ||
      getinputValue.includes(blackListedWords[7]) ||
      getinputValue.includes(blackListedWords[8])
    ) {
      if (errorMessage) {
        errorMessageRef.current.classList.add("animate-error-message");
        setTimeout(() => {
          errorMessageRef.current.classList.remove("animate-error-message");
        }, 5000);
      }

      setErrorMessage(true);
      // setshowAnyOtherQuestion("");
      setTimeout(() => {
        focusIncorrectInputField.current.focus();
      }, 300);
    } else {
      const dataObj = {
        query: getinputValue,
      };
      setShowUserMessageComponent(true);
      setShowUserMessage(getinputValue);
      setShowZendeskLoader(true);
      Axios({
        method: "post",
        url: "https://turtlemintsupport.zendesk.com/api/v2/tickets.json",
        headers: {
          "content-type": "application/json",
          Authorization: Authkey,
        },
        data: {
          ticket: {
            subject: getinputValue,
            comment: {
              body: JSON.stringify(dataObj),
            },
          },
        },
      })
        .then((response) => {
          setTicketCreated(true);
          setErrorMessage(false);
          setShowZendeskLoader(false);
          setZendeskApiError(false);
          setTimeout(() => {
            focusIncorrectInputField.current.disabled = "disabled";
            disabledBtn.current.disabled = "disabled";
          }, 300);
        })
        .catch((error) => {
          setZendeskApiError(true);
          setShowZendeskLoader(false);
        });
    }

    e.preventDefault();
  }
  function haveMoreQuestions() {
    setLoadingAnyOtherQuestion(true);
    setShouldShowCorrectInfo(true);
    setShouldShowIncorrectInfo(false);
    setYesHaveMoreQuestions("");
    setNoIHaveNoQuestions("");
    setTimeout(() => {
      inputFocusField.current.disabled = "disabled";
    }, 300);

    setErrorFetchApi("");
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=AnyOtherQuestions_Yes&userID=as231"
    )
      .then((response) => {
        setshowAnyOtherQuestion(response.data.Text);
        setLoadingAnyOtherQuestion(false);
        removeBorder.current.style.display = "none";
        setTimeout(() => {
          inputFocusField.current.removeAttr = "disabled";
        }, 300);
      })
      .catch((error) => {
        setLoadingAnyOtherQuestion(false);
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
      });
    setTimeout(() => {
      inputFocusField.current.focus();
    }, 3000);
  }
  function noMoreQuestions() {
    setLoadingAnyOtherQuestion(true);
    setShouldShowIncorrectInfo(true);
    setShouldShowCorrectInfo(false);
    setYesHaveMoreQuestions("");
    setNoIHaveNoQuestions("");
    setErrorFetchApi("");
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=AnyOtherQuestions_No &userID=as231"
    )
      .then((response) => {
        setShowNoOtherQuestion(response.data.Text);
        setLoadingAnyOtherQuestion(false);
        removeBorder.current.style.display = "none";
      })
      .catch((error) => {
        setErrorFetchApi(
          "Opps! Your data could not be loaded, Please refresh your browser and Try Again"
        );
        setLoadingAnyOtherQuestion(false);
      });
  }

  function showIncorrectSection() {
    setwrongInfo(true);
    setcorrectInfo(false);
    setHideButtonWrapper(false);
    setShowMonthData(false);
  }
  function showCorrectSection() {
    setwrongInfo(false);
    setcorrectInfo(true);
    setHideButtonWrapper(false);
    setShowMonthData(false);
    setSaleTypeLoader(true);
    Axios.get(
      "https://s7ju9b1vm0.execute-api.ap-southeast-1.amazonaws.com/CORS2/resp?query=Yes&userID=asd123"
    )
      .then((response) => {
        setHaveAnyOtherQuestion(response.data.Text);
        setSaleTypeLoader(false);
        setYesHaveMoreQuestions(
          response.data.detail_list[0].dict_list[0].title
        );
        setNoIHaveNoQuestions(response.data.detail_list[0].dict_list[1].title);
      })
      .catch((error) => {
        setSaleTypeLoader(false);
        console.log("error");
      });
  }
  function handleMonthResult() {
    setMonthWiseResult(true);
    setEntries([]);
    setShowNoData("Select Activity Points");
  }

  function handleErrorPopUp() {
    setErrorMessage(false);
    setTimeout(() => {
      inputFocusField.current.focus();
    }, 300);
  }
  function handleMissingErrorPopup() {
    setErrorMessage(false);
    setTimeout(() => {
      focusInput.current.focus();
    }, 300);
  }

  function handleIncorrectErrorPopup() {
    setErrorMessage(false);
    setTimeout(() => {
      focusIncorrectInputField.current.focus();
    }, 300);
  }
  function handleFormSubmit(e) {
    var blackListedWords = [
      "Cash",
      "payout",
      "grid",
      "RnR",
      "Comprehensive",
      "Third Party",
      "Invictus",
      "Fintech",
    ];
    var getinputValue = document.getElementById("getValue").value;
    if (
      getinputValue.includes(blackListedWords[0]) ||
      getinputValue.includes(blackListedWords[1]) ||
      getinputValue.includes(blackListedWords[2]) ||
      getinputValue.includes(blackListedWords[3]) ||
      getinputValue.includes(blackListedWords[4]) ||
      getinputValue.includes(blackListedWords[5]) ||
      getinputValue.includes(blackListedWords[6]) ||
      getinputValue.includes(blackListedWords[7]) ||
      getinputValue.includes(blackListedWords[8])
    ) {
      if (errorMessage) {
        errorMessageRef.current.classList.add("animate-error-message");
        setTimeout(() => {
          errorMessageRef.current.classList.remove("animate-error-message");
        }, 5000);
      }

      setErrorMessage(true);
      setTimeout(() => {
        inputFocusField.current.focus();
      }, 300);
    } else {
      const dataObj = {
        query: getinputValue,
      };
      setShowUserMessageComponent(true);
      setShowUserMessage(getinputValue);
      setShowZendeskLoader(true);
      Axios({
        method: "post",
        url: "https://turtlemintsupport.zendesk.com/api/v2/tickets.json",
        headers: {
          "content-type": "application/json",
          Authorization: Authkey,
        },
        data: {
          ticket: {
            subject: getinputValue,
            comment: {
              body: JSON.stringify(dataObj),
            },
          },
        },
      })
        .then((response) => {
          setTicketCreated(true);
          setShowUserMessageComponent(true);
          setErrorMessage(false);
          setShowZendeskLoader(false);
          setZendeskApiError(false);
          setTimeout(() => {
            inputFocusField.current.disabled = "disabled";
            disabledBtn.current.setAttribute("disabled", "disabled");
          }, 300);
        })
        .catch((error) => {
          setZendeskApiError(true);
          setShowZendeskLoader(false);
        });
    }

    e.preventDefault();
  }

  return (
    <section>
      <div className="chat-body">
        <div className="chat-inner-body" id="no-overflow">
          <img
            src={Closeicon}
            alt="cancel-icon"
            className="cancel-icon"
            onClick={props.handleCloseIcon}
          />
          <Monthselection
            Months={getMonths}
            title={getMonthTitle}
            handleSelectedMonth={handleSelectedMonth}
            loadingSelectedMonth={loadingSelectedMonth}
            monthLoading={monthLoading}
            errorFetchApi={errorFetchApi}
            selectedMonth={selectedMonth}
            showMonthBubble={showMonthBubble}
          />
          {selectedMonth && (
            <Entries
              entries={entries}
              handleSelectUserEntry={handleSelectUserEntry}
              handleMissingPointsClicked={handleMissingPointsClicked}
              loadingSelectedMonth={loadingSelectedMonth}
              showNoData={showNoData}
              errorFetchApi={errorFetchApi}
            />
          )}
          {selectedMonth && selectedUserEntry && (
            <Selectedpolicy
              shouldShowCorrectInfo={shouldShowCorrectInfo}
              shouldShowIncorrectInfo={shouldShowIncorrectInfo}
              haveMoreQuestions={haveMoreQuestions}
              noMoreQuestions={noMoreQuestions}
              showIssueOptionList={showIssueOptionList}
              issueOptionList={issueOptionList}
              handleShowIssueOptionList={handleShowIssueOptionList}
              selectedIssueOptionList={selectedIssueOptionList}
              showIncorrectSection={showIncorrectSection}
              showCorrectSection={showCorrectSection}
              wrongInfo={wrongInfo}
              correctInfo={correctInfo}
              selectedUserEntry={selectedUserEntry}
              hideButtonWrapper={hideButtonWrapper}
              monthWiseResult={monthWiseResult}
              selectedMonth={selectedMonth}
              handleMonthResult={handleMonthResult}
              showMoreQuestion={showMoreQuestion}
              showNoQuestion={showNoQuestion}
              showMonthData={showMonthData}
              iconValue={iconValue}
              showRatingMessage={showRatingMessage}
              Rating1={Rating1}
              Rating2={Rating2}
              Rating3={Rating3}
              Rating4={Rating4}
              Rating5={Rating5}
              Redicon={Redicon}
              Orangeicon={Orangeicon}
              Yellowicon={Yellowicon}
              Lightgreen={Lightgreen}
              Darkgreen={Darkgreen}
              handleIconClick={handleIconClick}
              handleChangeIcon={handleChangeIcon}
              focusInputField={focusInputField}
              inputFocusField={inputFocusField}
              focusInput={focusInput}
              focusIncorrectInputField={focusIncorrectInputField}
              handleThankyouMessage={props.handleThankyouMessage}
              thankYou={props.thankYou}
              handlePopup={props.handlePopup}
              disableBtn={props.disableBtn}
              showAnyOtherQuestion={showAnyOtherQuestion}
              showNoOtherQuestion={showNoOtherQuestion}
              loadingAnyOtherQuestion={loadingAnyOtherQuestion}
              skipStep={props.skipStep}
              handleFormSubmit={handleFormSubmit}
              ticketCreated={ticketCreated}
              handleTicketPopUp={props.handleTicketPopUp}
              errorMessage={errorMessage}
              handleIncorrectInfoFormSubmit={handleIncorrectInfoFormSubmit}
              loadingAnyOtherQuestion={loadingAnyOtherQuestion}
              handleErrorPopUp={handleErrorPopUp}
              handleIncorrectErrorPopup={handleIncorrectErrorPopup}
              errorFetchApi={errorFetchApi}
              haveAnyOtherQuestion={haveAnyOtherQuestion}
              yesHaveMoreQuestions={yesHaveMoreQuestions}
              noIHaveNoQuestions={noIHaveNoQuestions}
              saleTypeLoader={saleTypeLoader}
              removeBorder={removeBorder}
              showUserMessage={showUserMessage}
              showUserMessageComponent={showUserMessageComponent}
              showZendeskLoader={showZendeskLoader}
              disabledBtn={disabledBtn}
              hideErrorMessage={hideErrorMessage}
              hideUl={hideUl}
              zendeskApiError={zendeskApiError}
              errorMessageRef={errorMessageRef}
            />
          )}
          {selectedMonth && missingPointsClicked && (
            <Missingpoints
              missingPointsClicked={missingPointsClicked}
              renderLists={renderLists}
              showLists={showLists}
              showMissingBonus={showMissingBonus}
              otherReasons={otherReasons}
              handleLists={handleLists}
              listStyle={listStyle}
              selectOptions={selectOptions}
              hideFormElement={hideFormElement}
              hideSecondFormElement={
                salesDetailsType === "customer_name" ||
                salesDetailsType === "policy_number"
              }
              hideThirdFormElement={salesDetailsType === "policy_number"}
              showData={showData}
              handleShowOptions={handleShowOptions}
              handleInputField={handleInputField}
              // handleSecondInputField={handleSecondInputField}
              replyText={replyText}
              handleReplyText={handleReplyText}
              inputProvider={inputProvider}
              customerName={customerName}
              policyNumber={policyNumber}
              focusInput={focusInput}
              inputFocusField={inputFocusField}
              focusInputField={focusInputField}
              saleType={saleType}
              saleTypeLoader={saleTypeLoader}
              showOtherOptions={showOtherOptions}
              handleMissingBonusForm={handleMissingBonusForm}
              showAnyOtherQuestion={showAnyOtherQuestion}
              ticketCreated={ticketCreated}
              errorMessage={errorMessage}
              handleTicketPopUp={props.handleTicketPopUp}
              loadingAnyOtherQuestion={loadingAnyOtherQuestion}
              queryResponseObject={queryResponseObject}
              handleErrorPopUp={handleErrorPopUp}
              handleOtherReasonForm={handleOtherReasonForm}
              errorFetchApi={errorFetchApi}
              queryInputDisabled={queryInputDisabled}
              handleMissingErrorPopup={handleMissingErrorPopup}
              noBorder={noBorder}
              showUserMessage={showUserMessage}
              showUserMessageComponent={showUserMessageComponent}
              showZendeskLoader={showZendeskLoader}
              disabledBtn={disabledBtn}
              hideErrorMessage={hideErrorMessage}
              hideLists={hideLists}
              zendeskApiError={zendeskApiError}
              errorMessageRef={errorMessageRef}
            />
          )}
        </div>
      </div>
    </section>
  );
};

const Renderchatbody = (props) => {
  const checkChatBodyStatus = props.chatBody;
  if (checkChatBodyStatus) {
    return (
      <Chatbotbody
        handleCloseIcon={props.handleCloseIcon}
        handleTicketPopUp={props.handleTicketPopUp}
        thankYou={props.thankYou}
        skipStep={props.skipStep}
        handleThankyouMessage={props.handleThankyouMessage}
        handlePopup={props.handlePopup}
        disableBtn={props.disableBtn}
      />
    );
  }
  return null;
};

const Triggerchatbody = (props) => {
  const [chatBody, setChatBody] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [welcomeMessage, setWelcomeMessage] = useState(false);
  const [skipStep, setSkipStep] = useState("Skip This Step");
  const [thankYou, setThankYou] = useState(false); // to show thank you message
  const disableBtn = useRef(null);

  const handleChatBody = () => {
    setWelcomeMessage(true);
    setShowCloseIcon(false);
  };
  const handleChatButton = () => {
    setChatBody(true);
    setWelcomeMessage(false);
  };

  function handleThankyouMessage() {
    setSkipStep("");
    setThankYou(true);
    setTimeout(() => {
      disableBtn.current.setAttribute("disabled", "disabled");
    }, 300);
  }

  function handlePopup() {
    setThankYou(false);
    setChatBody(false);
    setShowCloseIcon(true);
    setSkipStep("Skip this step");
  }

  const handleTicketPopUp = () => {
    setChatBody(false);
    setShowCloseIcon(true);
  };

  const Welcomemessage = () => {
    useEffect(() => {
      const hello = document.getElementById("hello");
      const turtlemintMessage = document.getElementById("turtlemint");
      const chatButton = document.getElementById("chat-button");
      var selectHello = gsap.timeline();
      var selectTurtlemintMessage = gsap.timeline();
      var selectChatButton = gsap.timeline();
      selectHello.from(hello, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: Power2.easeInOut,
      });
      selectTurtlemintMessage.from(turtlemintMessage, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: Power2.easeInOut,
      });
      selectChatButton.from(chatButton, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
        ease: Power2.easeInOut,
      });
      return () => {
        selectHello.kill();
        selectTurtlemintMessage.kill();
        selectChatButton.kill();
      };
    }, []);
    const checkWelcomeStatus = welcomeMessage;
    if (checkWelcomeStatus) {
      return (
        <div className="welcome-message">
          <img
            src={Closeicon}
            alt="cancel-icon"
            className="cancel-icon"
            onClick={handleChatWindow}
          />
          <h1 id="hello">Hello!</h1>
          <h4 id="turtlemint">Welcome to Turtlemint</h4>
          <div className="chat-btn-wrapper">
            <button
              type="button"
              className="start-chat"
              onClick={handleChatButton}
              id="chat-button"
            >
              Start Chat
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const Renderimage = () => {
    const checkImageStatus = showCloseIcon;
    if (checkImageStatus) {
      return (
        <img
          src={Chaticon}
          alt="Chat Icon"
          className="chat-icon"
          onClick={handleChatBody}
        />
      );
    }
    return null;
  };

  const handleCloseIcon = () => {
    setChatBody(false);
    setShowCloseIcon(true);
    setThankYou(false);
    setSkipStep("Skip this step");
  };
  const handleChatWindow = () => {
    setWelcomeMessage(false);
    setShowCloseIcon(true);
  };

  return (
    <>
      <Renderimage />
      <Welcomemessage />
      <Renderchatbody
        chatBody={chatBody}
        handleCloseIcon={handleCloseIcon}
        handleTicketPopUp={handleTicketPopUp}
        handleThankyouMessage={handleThankyouMessage}
        handlePopup={handlePopup}
        skipStep={skipStep}
        thankYou={thankYou}
        disableBtn={disableBtn}
      />
    </>
  );
};

export default Triggerchatbody;
