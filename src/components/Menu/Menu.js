import React from "react";
import Logo from "../icons/Logo";
import MenuListItem from "./MenuListItem/MenuListItem";
import { upperMenuList, lowerMenuList } from "../../data/data";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menuContainer">
      <div>
        <header className="headerMenuContainer">
          <Logo />
          <div className="dot" />
          <h1>Stork</h1>
        </header>
        <ul className="menuUpperListContainer">
          {upperMenuList.map((menuItem, index) => {
            return (
              <MenuListItem key={index} description={menuItem} isUpperMenu />
            );
          })}
        </ul>
      </div>
      <div className="lowerMenuListContainer">
        <span className="insights"> Insights </span>
        <div>
          {lowerMenuList.map((menuItem, index) => {
            return (
              <MenuListItem key={index} description={menuItem.description} isUpperMenu={false} isNotification={false} notificationsLength={menuItem.length}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
