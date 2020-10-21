import React from "react";
import "./header.scss";

function Header(props) {
  const myDate = new Date();
  const optionsDate = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
  const fullDate = myDate.toLocaleDateString("default", optionsDate);

  return (
    <div className="header">
      <h3 className="date-title">{fullDate}</h3>
      {/* <h3 className="date-title">Date: {month}</h3> */}
      <div className="right-side">
        <button
          className={props.inCompletedCheck ? "filter-btn active" : "filter-btn"}
          onClick={() => (props.completedCheck ? null : props.handleClick("incompleted"))}
        >
          Incomplete Tasks {props.count.countNotValidate === 0 ? "" : props.count.countNotValidate}
        </button>
        <button
          className={props.completedCheck ? "filter-btn active" : "filter-btn"}
          onClick={() => (props.inCompletedCheck ? null : props.handleClick("completed"))}
        >
          Complete Tasks {props.count.countValidate === 0 ? "" : props.count.countValidate}
        </button>
      </div>
    </div>
  );
}

export default Header;
