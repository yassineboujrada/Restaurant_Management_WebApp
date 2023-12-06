import { useState, useEffect } from "react";
import { dishGetAll } from "../utils/ApiRoutes";
import axios from "axios";

export const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchDishData = async () => {
      try {
        const response = await axios.get(dishGetAll);
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

      fetchDishData(); // Call the fetchDishData function within useEffect
    }, []); // Add an empty dependency array to run the effect only once


  return menu; // Return the menu data
};
