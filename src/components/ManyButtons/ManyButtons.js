import React from "react";
import PlusIcon from '../icons/PlusIcon'
import ThreeDotsVertical from '../icons/ThreeDotsVertical'
import TwoTone from '../icons/TwoTone'
import CheckedBox from '../icons/CheckedBox'
import './ManyButtons.scss'

const ManyButtons = (props) => {
      return (
    <div className="btnContainer">
      {props.isBlackButton && (
        <button className={props.isNotification ? 'btn blackBtn wideBtn' : 'btn blackBtn'}>
          {props.isIcon && props.iconType === 'plus' && <PlusIcon className="icon"/>}
          {props.description}
        </button>
      )}
      {props.isBlueButton && (
        <button className={props.isSearch ? 'btn blueBtn searchAdvanced' : 'btn blueBtn'}>{props.description}</button>
      )}
      {props.isFadedButton && (
        <button className="btn fadeGrayBtn">
        {props.isIcon && props.iconType === 'channeling' && <TwoTone className="icon"/>}
        {props.isIcon && props.iconType === '3dots' && <ThreeDotsVertical className="icon colorBlue"/>}
        {props.isIcon && props.iconType === 'checkbox' && <CheckedBox className="icon"/>}
        {props.description}
        </button>
      )}
    </div>
  );
};

export default ManyButtons;
