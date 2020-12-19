import React from "react";
import GtArrow from "../icons/GtArrow";
import "./RecentSearches.scss";
const RecentSearches = ({ description }) => {
  return (
    <div className="recentContainer">
      <a href="#">
        <div className="block" />
      </a>
      <a href="#">
        <div className="description">{description}</div>
      </a>
      <a href="#">
        <GtArrow />
      </a>
    </div>
  );
};

export default RecentSearches;
