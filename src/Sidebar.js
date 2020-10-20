import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import SidebarOptionHeader from "./SidebarOptionHeader";
import MoreOptions from "./MoreOptions";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // Runs this code when the sidebar component loads....
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Hopelessly Interesting</h2>

          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <MoreOptions />
      {/* <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user group" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" /> */}
      {/* Sidebar heading -> Channels */}
      <SidebarOptionHeader name="Channels" />
      {/* <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" /> */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
      {/* Sidebar heading -> Direct Messages */}
      <SidebarOptionHeader name="Direct messages" />
      {/* Sidebar heading -> Apps */}
      <SidebarOptionHeader name="Apps" />
    </div>
  );
}

export default Sidebar;
