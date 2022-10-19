import React from "react";
import PRODUCTS from "../products";

class ProductCategoryRow extends React.Component {
    render() {
      const category = PRODUCTS[0].category;

      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }

  export default ProductCategoryRow;