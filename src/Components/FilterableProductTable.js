import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PRODUCTS from "../products";

class FilterableProductTable extends React.Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ProductTable products={PRODUCTS}/>
        </div>
      );
    }
  }

  export default FilterableProductTable;