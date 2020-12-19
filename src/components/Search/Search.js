import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "../icons/SearchIcon";
import Xicon from "../icons/Xicon";
import { recentSearchesArray } from "../../data/data";
import RecentSearches from "../RecentSearches/RecentSearches";
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
  }
  const onCancelClick = () => {
    console.log(isInputClicked)
    setisInputClicked(false)
    console.log(isInputClicked)
  };
  return (
     <div className='flexCLM'> 
      <div className="search" 
      >
        {!isInputClicked ? <SearchIcon /> : <Xicon onClick={onCancelClick} />}
        <input
          type="text"
          className={
            !isInputClicked ? "searchInput" : "search searchInput active"
          }
          placeholder={!isInputClicked ? "Search" : "Type your keywords"}
          onFocus={!isInputClicked ? onFocusChange : undefined}
        />
      </div>
      {isInputClicked && (
        <div className="recentSearches"> recent searches </div>
      )}
      {isInputClicked && recentSearchesArray.length > 0
        ? recentSearchesArray.map((recentSearch, index) => {
            const description = recentSearch.description;
            return <RecentSearches key={index} description={description} />;
          })
        : null}
    </div>
  );
};

export default Search;

// onBlur={isInputClicked ? onBlurReaction : undefined}>