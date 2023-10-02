import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) => {

  const [ filterText, setFilterText ] = useState('');
  const [ inStockOnly, setInStockOnly ] = useState(false);

  // console.log('filterText -->', filterText, '<--');
  // console.log('inStockOnly -->', inStockOnly, '<--');

  const handleFilterTextChange = (filterText) => {
    setFilterText(filterText);
    // console.log('FilterableProductTable handleFilterTextChange filterText', filterText);
  }
  
  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  }

  // console.log('FilterableProductTable props.products', props.products);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;