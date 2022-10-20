import React from "react";
import ProductCategoryRow from "../Components/ProductCategoryRow";
import ProductRow from "../Components/ProductRow";

class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;

      console.log('ProductTable.js', typeof(filterText), filterText)

      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        console.log('product.name.indexOf(filterText)', product.name.indexOf(filterText));
        console.log('product.name', product.name);
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default ProductTable;