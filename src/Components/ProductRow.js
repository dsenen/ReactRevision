import React from "react";

const ProductRow = (props) => {

  // console.log('ProductRow props.product', props.product);

  const product = props.product;
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
  

export default ProductRow;