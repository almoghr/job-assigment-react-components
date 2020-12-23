import React, { useState, useEffect } from "react";
import NotificationBell from "../icons/NotificationBell";
import NotificationCircle from "../NotificationCircle/NotificationCircle";
import PopUp from "../PopUp/PopUp";
import ManyButtons from "../ManyButtons/ManyButtons";
import { notificationsArray } from "../../data/data";
import "./Notifications.scss";

const Notifications = () => {
  const [isNotificationClicked, setNotificationClicked] = useState(false);
  useEffect(() => {}, [isNotificationClicked]);

  const clickedNotification = () => {
    setNotificationClicked(!isNotificationClicked);
  };
  return (
    <div className="flexColumn">
      {notificationsArray.length > 0 && (
        <NotificationCircle
          className="numOfNotifications"
          isNotification={false}
          notificationsLength={notificationsArray.length}
        />
      )}
      <div
        onClick={clickedNotification}
        className={isNotificationClicked ? "bell active" : "bell"}
      >
        <NotificationBell />
        <div className="innerCircle" />
      </div>
      {isNotificationClicked &&
        notificationsArray.map((notification, index) => {
          return (
            <PopUp
              isCircle
              isNotification
              key={index}
              notification={notification}
            />
          );
        })}
      {isNotificationClicked && (
        <ManyButtons
          isNotification
          isBlackButton
          description="see all incoming activities"
        />
      )}
    </div>
  );
};

export default Notifications;
