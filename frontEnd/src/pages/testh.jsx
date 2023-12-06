import React, { useEffect, useState } from 'react';
import {dishGetAll} from "../utils/ApiRoutes";
import axios from "axios";

const testh = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get(dishGetAll);
          // if (!response.ok) {
          //   throw new Error('Network response was not ok');
          // }

          // const data = await response.json();
        if (response.msg) {
          console.log(response.data);
        }

        console.log(response.data);
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div>
      <h2>All Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>{dish.name}</li>
          // You may adjust the properties based on your dish object structure
        ))}
      </ul>
    </div>
  );
};

export default testh;
