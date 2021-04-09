import React, { useState } from "react";
import CycleEntries from "../user-entry";
import Activitypoints from "../Activity-points";
import Container from "react-bootstrap/Container";

const Renderactivitypoints = (props) => {
  const checkActivityPointsStatus = props.entries.length === 0;
  if (checkActivityPointsStatus) {
    return (
      <Activitypoints
        handleMissingPointsClicked={props.handleMissingPointsClicked}
        loadingSelectedMonth={props.loadingSelectedMonth}
        showNoData={props.showNoData}
      />
    );
  } else {
    return (
      <CycleEntries
        entries={props.entries}
        basicEntries={props.entries}
        handleSelectUserEntry={props.handleSelectUserEntry}
        handleMonthResult={props.handleMonthResult}
        selectedMonth={props.selectedMonth}
        errorFetchApi={props.errorFetchApi}
      />
    );
  }
};

const Entries = (props) => {
  return (
    <>
      <section className="entries-wrapper">
        <Container>
          <Renderactivitypoints
            entries={props.entries}
            handleSelectUserEntry={props.handleSelectUserEntry}
            handleMissingPointsClicked={props.handleMissingPointsClicked}
            selectedMonth={props.selectedMonth}
            handleMonthResult={props.handleMonthResult}
            loadingSelectedMonth={props.loadingSelectedMonth}
            showNoData={props.showNoData}
            errorFetchApi={props.errorFetchApi}
          />
        </Container>
      </section>
    </>
  );
};

export default Entries;
