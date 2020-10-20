import React, { useState } from "react";
import "./SidebarOptionHeader.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AddIcon from "@material-ui/icons/Add";

function SidebarOptionHeader({ name }) {
  const [isAddShown, setIsAddShown] = useState(false);

  return (
    <div
      className="sidebarOptionHeader"
      onMouseOver={() => setIsAddShown(true)}
      onMouseOut={() => setIsAddShown(false)}
    >
      <ArrowRightIcon className="sidebarOptionHeader_icon" />
      <h3>{name}</h3>
      {/* Fix this small change */}
      <AddIcon className="sidebarOptionHeader_addIcon" />
    </div>
  );
}

export default SidebarOptionHeader;
