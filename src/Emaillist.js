import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { firebase } from "../src/Authentication/Firebase";
// import { collection, addDoc, QuerySnapshot } from "firebase/firestore";
// import { db } from './Authentication/Firebase';
// import {query, orderBy, onSnapshot } from 'firebase/firestore';
import "./Emaillist.css";

function Emaillist() {
  const [emails, setmails] = useState([]);
  const todoref = firebase.firestore().collection("email");
  useEffect(() => {
    todoref.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { Message, Subject, Hours, To, Minutes, Date } = doc.data();
        users.push({
          id: doc.id,
          Message,
          Subject,
          Hours,
          To,
          Minutes,
          Date,
        });
      });
      console.log(users);
      setmails(users);
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingright">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList_List">
        {/* {console.log(emails)} */}
        {emails.length > 0 &&
          emails.map((data) => (
            <EmailRow
              id={data.id}
              key={data.id}
              title={data.To}
              subject={data.Subject}
              description={data.Message}
              time={data.Hours}
              minutes={data.Minutes}
              date={data.Date}
            />
          ))}
        {/* <EmailRow title="Twitch" subject="Hey Fellow Streamer!!!!" description="This is the test" time="10pm"/>
            <EmailRow title="Twitch" subject="Hey Fellow Streamer!!!" description="This is the test This is a test this is a test This is a test" time="10pm"/> */}
      </div>
    </div>
  );
}

export default Emaillist;
