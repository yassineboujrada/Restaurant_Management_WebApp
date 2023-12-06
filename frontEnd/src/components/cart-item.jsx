import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { TiDeleteOutline } from 'react-icons/ti';

export const CartItem = (props) => {
  const item_data = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount , removeAllFromCart} =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div style={{ backgroundImage: `url(${item_data.image_url})` }} className="prod_img"> </div>
      <div className="description">
        <div>
        <p>
          <b>{item_data.name}</b>
        </p>
        <p> Prix: {item_data.price} DH</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(item_data._id)}> - </button>
          <input
            value={cartItems[item_data._id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), item_data._id)}
          />
          <button onClick={() => addToCart(item_data._id)}> + </button>
        </div>
        </div>
        <div className="removeItemCart">
          <div onClick={() => removeAllFromCart(item_data._id)}><TiDeleteOutline style={{ color: 'white' , fontSize:'35px'}}/></div>
        </div>
      </div>
    </div>
  );
};
