import React from "react";
import GtArrow from "../../icons/GtArrow";
import Dashboard from "../../icons/Dashboard";
import InventoryIcon from "../../icons/InventoryIcon";
import AfiliatesIcon from "../../icons/AfiliatesIcon";
import OrdersIcon from "../../icons/OrdersIcon";
import CustomersIcon from "../../icons/CustomersIcon";
import WebsiteIcon from "../../icons/WebsiteIcon";
import MarketIcon from "../../icons/MarketIcon";
import AdminIcon from "../../icons/AdminIcon";
import InboxIcon from "../../icons/InboxIcon";
import NotificationIcon from "../../icons/NotificationIcon";
import "./MenuListItem.scss";

const MenuListItem = (props) => {
  return (
    <li className={props.isUpperMenu ? "menuListLi upperli" : "menuListLi"}>
      <div className="LiArranger">
        {props.description === "Dashboard" && (
          <span className="menuListLiLeftIcon">
            <Dashboard />
          </span>
        )}
        {props.description === "Inventory" && (
          <span className="menuListLiLeftIcon">
            <InventoryIcon />
          </span>
        )}
        {props.description === "Affiliates" && (
          <span className="menuListLiLeftIcon">
            <AfiliatesIcon />
          </span>
        )}
        {props.description === "Orders" && (
          <span className="menuListLiLeftIcon">
            <OrdersIcon />
          </span>
        )}
        {props.description === "Customers" && (
          <span className="menuListLiLeftIcon">
            <CustomersIcon />
          </span>
        )}
        {props.description === "Website" && (
          <span className="menuListLiLeftIcon">
            <WebsiteIcon />
          </span>
        )}
        {props.description === "Marketing" && (
          <span className="menuListLiLeftIcon">
            <MarketIcon />
          </span>
        )}
        {props.description === "Admin" && (
          <span className="menuListLiLeftIcon">
            <AdminIcon />
          </span>
        )}
        {props.description === "Inbox" && (
          <span className="menuListLiLeftIcon">
            <InboxIcon />
          </span>
        )}
        {props.description === "Notifications" && (
          <span className="menuListLiLeftIcon">
            <NotificationIcon />
          </span>
        )}
        <span className="menuListDescription">{props.description}</span>
      </div>
      <div>
        {props.isUpperMenu ? (
          <GtArrow />
        ) : (
          <div className="menuCircle">{props.notificationsLength}</div>
        )}
      </div>
    </li>
  );
};

export default MenuListItem;
