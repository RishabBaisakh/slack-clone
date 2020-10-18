import React from "react";
import "./SidebarOptionHeader.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SidebarOptionHeader({ name }) {
  return (
    <div className="sidebarOptionHeader">
      <ExpandMoreIcon className="sidebarOptionHeader_icon" />
      <h3>{name}</h3>
    </div>
  );
}

export default SidebarOptionHeader;
