import React ,{useContext}from "react";
import { ShopContext } from "./shop-context";
const MenuItem = ({ id, image,name, price }) =>{
  const { addToCart } = useContext(ShopContext);
  
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> {price} DH</p>
      <button onClick={() => addToCart(id)}> Ajouter au Panier </button>
    </div>
  );
}

export default MenuItem;
