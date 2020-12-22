import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "../icons/SearchIcon";
import Xicon from "../icons/Xicon";
import { recentSearchesArray } from "../../data/data";
import PopUp from "../PopUp/PopUp";
import ManyButtons from "../ManyButtons/ManyButtons";
import "./Search.scss";

const Search = () => {
  const [isInputClicked, setisInputClicked] = useState(false);

  // const inputEl = useRef(null);

  useEffect(() => {}, [isInputClicked]);

  const onFocusChange = async () => {
    setisInputClicked(!isInputClicked);
  };

  const onBlurReaction = () => {
    setisInputClicked(false);
  };
  const onCancelClick = () => {
    console.log(isInputClicked);
    setisInputClicked(false);
    console.log(isInputClicked);
  };

  // <PopUp key={index} description={description} isCircle={false} isNotification={false}/>
  // <ManyButtons isIcon={false} description={'Advances Search'}/>

  return (
    <div className="flexCLM">
      <div className="search">
        {!isInputClicked ? <SearchIcon /> : <Xicon onClick={onFocusChange} />}
        <input
          type="text"
          className={
            !isInputClicked ? "searchInput" : "search searchInput active"
          }
          placeholder={!isInputClicked ? "Search" : "Type your keywords"}
          onClick={!isInputClicked ? onFocusChange : undefined}
        />
      </div>
      {isInputClicked && (
        <div className="recentSearches"> recent searches </div>
      )}
      {isInputClicked && recentSearchesArray.length > 0
        ? recentSearchesArray.map((recentSearch, index) => {
            const description = recentSearch.description;
            return (
              <PopUp
                key={index}
                description={description}
                isCircle={false}
                isNotification={false}
              />
            );
          })
        : null}
        {isInputClicked && <ManyButtons isSearch isBlueButton isIcon={false} description={'Advanced  Search'}/>}
    </div>
  );
};

export default Search;

// onBlur={isInputClicked ? onBlurReaction : undefined}>
