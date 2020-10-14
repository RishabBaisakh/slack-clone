import { Switch } from "@material-ui/core";
import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StartBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlineIcon from "@material-ui/icons/InfoOutlined";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong># general</strong>
            <StartBorderOutlineIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p>
            <InfoOutlineIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
