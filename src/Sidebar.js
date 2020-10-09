import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>

          <h3>
            <FiberManualRecordIcon />
            Rishab Baisakh
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Inbox" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
    </div>
  );
}

export default Sidebar;
