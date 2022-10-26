import React from "react";

const SearchBar = (props) => {

  // console.log('props.onFilterTextChange', props.onFilterTextChange);
  
  const handleFilterTextChange = (e) => {
    // console.log('handleFilterTextChange e.target.value', e.target.value);
    // console.log('props.onFilterTextChange(e.target.value)', props.onFilterTextChange(e.target.value));

    props.onFilterTextChange(e.target.value);
  }
  
  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;