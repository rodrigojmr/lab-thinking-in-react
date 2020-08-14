import React from 'react';

function SearchBar(props) {
  return (
    <div className="search">
      <div>
        Search
        <input
          type="text"
          name="searchQuery"
          value={props.searchVal}
          onChange={(event) => props.search(event)}
        />
      </div>
      <div>
        <input
          onChange={props.toggleStock}
          id="input-checkbox"
          name="in-stock"
          type="checkbox"
        />
        <label htmlFor="input-checkbox">Only show products on stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
