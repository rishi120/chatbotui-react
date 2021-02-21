import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.scss";
// import Chatbotbody from "./components/Chatbot-body";
import Monthselection from "./components/Month-selector";
import Entries from "./components/Entry-selection";
import Navbar from "./components/Navbar";
import Raisequery from "./components/Raise-query";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter } from "react-router-dom";

export const history = createBrowserHistory();

const response = {
  Text: "Please Select a month.",
  Type: "list_card",
  Total: 6,
  Dict_list: [
    {
      title: "August 2020",
      subtitle: "",
      body: "",
    },
    {
      title: "September 2020",
      subtitle: "",
      body: "",
    },
    {
      title: "October 2020",
      subtitle: "",
      body: "",
    },
    {
      title: "November 2020",
      subtitle: "",
      body: "",
    },
    {
      title: "December 2020",
      subtitle: "",
      body: "",
    },
    {
      title: "January 2021",
      subtitle: "",
      body: "",
    },
  ],
};

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <div className="App">
            {/* <Chatbotbody /> */}
            <Navbar />
            <Route path="/" exact>
              <Monthselection
                Months={response.Dict_list}
                title={response.Text}
              />
            </Route>
            <Route path="/Entry-selection" exact>
              <Entries
                entries={[
                  {
                    entryHeading: "Cycle 2",
                    // dateRange: "16 Sep - 30 Sep",
                    dateRangeStart: "16-09-2020",
                    dateRangeEnd: "30-09-2020",
                    userEntries: [
                      {
                        userName: "Abhijeet Acharya",
                        points: "1200",
                        additionalInfo: "MH/2222483703",
                        dateIssue: "12-12-2020",
                      },
                      {
                        userName: "Rakesh Rao",
                        points: "1200",
                        additionalInfo: "MH/2222483703",
                        dateIssue: "12-12-2020",
                      },
                    ],
                  },
                  {
                    entryHeading: "Cycle 1",
                    // dateRange: "16 Sep - 30 Sep",
                    dateRangeStart: "16-09-2020",
                    dateRangeEnd: "30-09-2020",
                    offers: [
                      {
                        offerName: "Double Dhamaka",
                        points: "1200",
                        additionalInfo: "Life Boaster",
                      },
                      {
                        offerName: "Amazing August",
                        points: "1200",
                        additionalInfo: "Life Boaster",
                      },
                    ],
                  },
                ]}
              />
            </Route>
            <Route path="/raise-query" exact>
              <Raisequery />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
