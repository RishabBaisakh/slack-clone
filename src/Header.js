import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutline from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar className="header_avatar" alt="Rishab" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search bar" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;