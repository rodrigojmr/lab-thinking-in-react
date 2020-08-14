import React from 'react';

function SearchBar(props) {
  return (
    <div className="search">
      Search
      <input
        type="text"
        onChange={(event) => props.search(event.target.value)}
      />
      <input
        onChange={props.toggleStock}
        id="input-checkbox"
        name="in-stock"
        type="checkbox"
      />
      <label htmlFor="input-checkbox">Only show products on stock</label>
    </div>
  );
}

export default SearchBar;
