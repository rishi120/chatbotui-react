import React from "react";
import { Link } from "react-router-dom";

const Entryheading = (props) => {
  return (
    <div className="titles">
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
};

const UserEntries = (props) => {
  return (
    <div>
      <ul className="user-entry">
        {props.entries.map((userEntry) => {
          return (
            <li key={userEntry.userName}>
              <Link
                to={{
                  pathname: "raise-query",
                  state: {
                    userEntry,
                  },
                }}
              >
                <p>
                  {userEntry.userName}
                  <span>{userEntry.points}</span>
                </p>
                <p>{userEntry.additionalInfo}</p>
                <p>Issued on{userEntry.dateIssue}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const OfferEntries = (props) => {
  return (
    <div>
      <ul className="offer-entry">
        {props.entries.map((offerEntry) => {
          return (
            <li key={offerEntry.offerName}>
              <p>
                {offerEntry.offerName}
                <span>{offerEntry.points}</span>
              </p>
              <p>{offerEntry.additionalInfo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const CycleEntries = ({ basicEntries }) => {
  return (
    <div>
      {basicEntries.map((entry) => {
        return (
          <div className="wrap-entries" key={entry.entryHeading}>
            <Entryheading
              heading={entry.entryHeading}
              description={entry.dateRange}
            />
            {entry.userEntries && <UserEntries entries={entry.userEntries} />}
            {entry.offers && <OfferEntries entries={entry.offers} />}
          </div>
        );
      })}
    </div>
  );
};

export default CycleEntries;
