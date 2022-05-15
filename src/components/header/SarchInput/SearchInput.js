import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchInput.css';

const SearchInput = () => {
  const onFocusSearch = () => {
    let placeHolder = document.querySelector(".block.search label .placeholder");
    placeHolder.classList.add("focus");
  };
  
  const onBlurSearch = () =>  {
    let input = document.querySelector(".block.search label #search-input");
    if (input.value === "") {
      let placeHolder = document.querySelector(".block.search label .placeholder");
      placeHolder.classList.remove("focus");
    }
  };

  return (
    <>
      <label htmlFor="search-input">
        <span className="placeholder">¿Qué estás buscando?</span>
        <input onBlur={onBlurSearch} onFocus={onFocusSearch} type="text" name="search-input" id="search-input" />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </label>
    </>
  );
}

export default SearchInput