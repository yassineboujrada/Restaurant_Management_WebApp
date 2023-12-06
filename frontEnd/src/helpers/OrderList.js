import { useState, useEffect } from "react";
import { orderGetAll } from "../utils/ApiRoutes";
import axios from "axios";

export const OrderList = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(orderGetAll);
        // console.log(response.data);
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

      fetchOrderData(); // Call the fetchDishData function within useEffect
    }, []); // Add an empty dependency array to run the effect only once


  return order; // Return the menu data
};