import React from "react";
import "./MoreOptions.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function MoreOptions() {
  return (
    <div className="moreOptions">
      <MoreVertIcon className="moreOptions_icon" />
      <h3>More</h3>
    </div>
  );
}

export default MoreOptions;
