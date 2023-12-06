import { useState, useEffect } from "react";
import { allUsersRoute } from "../utils/ApiRoutes";
import axios from "axios";

export const CustomerList = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(allUsersRoute);
        
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

      fetchCustomerData(); // Call the fetchDishData function within useEffect
    }, []); // Add an empty dependency array to run the effect only once


  return customer; // Return the menu data
};