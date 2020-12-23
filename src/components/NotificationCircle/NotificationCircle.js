import React from "react";
import CommentIcon from "../icons/CommentIcon";
import PurchaseIcon from "../icons/PurchaseIcon";
import LikeIcon from "../icons/LikeIcon";
import MessageIcon from "../icons/MessageIcon";
import "./NotificationCircle.scss";

const NotificationCircle = (props) => {
  return (
    <div
      className={
        props.isNotification
          ? "littleCircle relative notificationCircle"
          : "littleCircle relative numberCircle"
      }
    >
      {!props.isNotification && props.notificationsLength}
      {props.isNotification && props.type === "comment" && <CommentIcon />}
      {props.isNotification && props.type === "like" && <LikeIcon />}
      {props.isNotification && props.type === "purchase" && <PurchaseIcon />}
      {props.isNotification && props.type === "message" && <MessageIcon />}
    </div>
  );
};

export default NotificationCircle;
