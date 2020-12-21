import React from "react";
import GtArrow from "../icons/GtArrow";
import NotificationCircle from "../NotificationCircle/NotificationCircle";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./PopUp.scss";
const PopUp = (props) => {
  return (
    <div
      className={
        props.isNotification
          ? "recentContainer noBorder"
          : "recentContainer searchMargin"
      }
    >
      <a href="#">
        {props.notification && (
          <NotificationCircle isNotification type={props.notification.type} />
        )}
        <Thumbnail isCircle={props.isCircle} />
      </a>
      <a href="#">
        {!props.isNotification && (
          <div className="description">{props.description}</div>
        )}
      </a>
      {props.isNotification && (
        <div className="notificationFormation">
          <div className="topNotificationOrganizer">
            <div>{props.notification.description}</div>
            <div className="notificationCreated">{props.notification.created}</div>
          </div>
          <div className="bottomNotificationOrganizer">
            <div className="notificationType">{props.notification.activity} </div> &nbsp;
            <a href="#">
              <div className="notificationSubject">{props.notification.subject} </div>
            </a>
          </div>
        </div>
      )}
      {!props.isNotification && (
        <a href="#">
          <GtArrow />
        </a>
      )}
    </div>
  );
};

export default PopUp;
