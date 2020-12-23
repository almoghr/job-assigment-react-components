import React from "react";
import "./Thumbnail.scss";

const Thumbnail = ({ isCircle = false }) => {
  return <div className={isCircle ? "circle" : "block"} />;
};

export default Thumbnail;
