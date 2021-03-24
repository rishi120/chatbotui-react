import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Navicon from "../../assets/images/navigate.svg";
import Searchicon from "../../assets/images/search.svg";
import clsx from "clsx";

const Navbar = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [showNavicon, setShowNavicon] = useState(false);
  const searchRef = useRef(null); // searchref = an object
  /* searchref ===  {
current : null
}  */
  /* searchref = "hello"; */
  /* searchref === {
Chandan: null 
} 
searchref = {
Chandan: "Person"} 
searchref.Chandan = "Person" */
  function handleShowInput() {
    setShowInput(true);
    setShowNavicon(true);

    setTimeout(() => {
      searchRef.current.focus();
    }, 300);
    // searchRef.current.focus();
  }
  const Rendernavicon = () => {
    const checkNaviconStatus = showNavicon;
    if (checkNaviconStatus) {
      return <img src={Navicon} alt="Nav Icon" onClick={handleHideInput} />;
    }
    return null;
  };
  function handleHideInput() {
    setShowInput(false);
    setShowNavicon(false);
  }
  return (
    <section>
      <div className="navbar-wrapper">
        <div>
          <Rendernavicon />
        </div>
        <div className="icon-wrapper">
          <h1>Activity Points</h1>
          <img src={Searchicon} alt="Search Icon" onClick={handleShowInput} />
        </div>
        <input
          type="text"
          className={clsx("search-input", {
            "d-none": !showInput,
          })}
          placeholder="Search by name, points or description"
          ref={searchRef}
        />
      </div>
    </section>
  );
};
Navbar.propTypes = {
  onClickBackButton: PropTypes.func,
  title: PropTypes.string,
  onClickOpenSearchIcon: PropTypes.func,
  onChangeSearchText: PropTypes.func,
  searchText: PropTypes.string,
  onClickClosingSearchIcon: PropTypes.func,
  isSearch: PropTypes.bool,
};

export default Navbar;
