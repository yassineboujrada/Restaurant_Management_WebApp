import React, { useEffect, useState } from "react";
// import { IoFastFood } from "react-icons/io5";
// import { categories } from "../helpers/data";
// import { motion } from "framer-motion";
// import RowContainer from "./RowContainer";
// import { useStateValue } from "../context/StateProvider";
import "../styles/MenuC.css"; // Import the CSS file

const MenuContainer = () => {
  // const [filter, setFilter] = useState("chicken");

  // const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="menu-section" id="menu">
      {/* <div className="w-full flex flex-col items-center justify-center">
        <p className="title">
          Our Hot Dishes
        </p>

        <div className="categories-container">
          {categories &&
            categories.map((category) => (
              <motion.div
                key={category.id}
                className={`category ${filter === category.urlParamName ? "active" : ""}`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`category-icon ${filter === category.urlParamName ? "active" : ""}`}
                >
                  <IoFastFood
                    className={`category-icon-img ${
                      filter === category.urlParamName ? "active" : ""
                    }`}
                  />
                </div>
                <p
                  className={`category-name ${
                    filter === category.urlParamName ? "active" : ""
                  }`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="row-container">
          {/* <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          /> 
        </div>
      </div> */}
    </section>
  );
};

export default MenuContainer;
