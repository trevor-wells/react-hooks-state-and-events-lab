import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart , SetIsInCart] = useState(false)
  const liClass = (isInCart ? "in-cart" : "")
  const cartButton = (isInCart ? "Remove From Cart" : "Add to Cart")

  function toggleInCart(){
    SetIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>{cartButton}</button>
    </li>
  );
}

export default Item;
