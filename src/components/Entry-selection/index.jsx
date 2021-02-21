import React from "react";
import Userentries from "../user-entry";
import Activitypoints from "../Activity-points";

const Entries = (props) => {
  return (
    <>
      <section className="entries-wrapper">
        <p>Select an entry to continue</p>
        <Userentries basicEntries={props.entries} />
        <Activitypoints filterDate=" All of September 2020" />
      </section>
    </>
  );
};

export default Entries;
