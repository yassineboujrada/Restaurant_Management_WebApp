import React, { useState, useContext } from "react";
import { MenuList } from "../helpers/MenuList"; // Update the import path
import MenuItem from "../components/MenuItem";
import { Swiper, SwiperSlide } from "swiper/react";

import ReactPaginate from "react-paginate";
import "swiper/css"; // Update the import path
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Menu.css";
import "../styles/pagination.css";
import { slidesX } from "../helpers/SlidesX";
import { Container } from "reactstrap";

const Menu = () => {
  const menuData = MenuList();
  const [selectedCategory, setSelectedCategory] = useState("BreakFast");
  const categories = ["BreakFast", "Sandwich", "Drinks", "Salade", "Tajine", "Supplements"];
  const icons = [
    "/images/icons/croissant.png",
    "/images/icons/sandwich.png",
    "/images/icons/drink.png",
    "/images/icons/salade.png", 
    "/images/icons/tajine.png",
    "/images/icons/compliments.png",
  ];
  

  const itemsPerPage = 8;

  

  const filteredMenu = menuData.filter((menuItem) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return menuItem.category === selectedCategory;
    }
  });

  
  const [pageNumber, setPageNumber] = useState(0);
  const startIndex = pageNumber * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayMenu = filteredMenu.slice(startIndex, endIndex);
  
  const pageCount = Math.ceil(filteredMenu.length / itemsPerPage);
  
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="menu" id="menu">
      <section className="common__section">
        <Container>
          <h1 className="menuTitle">Notre Menu</h1>
        </Container>
      </section>
      <div className="container justify-content-center"> {/* Fixed the class name */}
        <Swiper {...slidesX}>
          {categories.map((category, index) => (
            <SwiperSlide key={index} className={`custom-slide ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
              <>
                <div className="logo-categ">
                  <img src={icons[index]} alt={category} style={{ width: '30px', height: '30px', margin: '15px', fontWeight: '100' }} />
                </div>
                <button className={`btn-categ ${selectedCategory === category ? 'active' : ''}`}>{category}</button>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="menuData">
        
        {displayMenu.map((menuItem, key) => (
          <div  key={key}>
            <MenuItem
              key={menuItem._id}
              id={menuItem._id}
              image={menuItem.image_url}
              name={menuItem.name}
              price={menuItem.price}
            />
          </div>
        ))}
      </div>

      <div className="pagination">
        <ReactPaginate
          pageCount={pageCount}
          // pageRangeDisplayed={5}
          onPageChange={changePage}
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          containerClassName="paginationBttns"
        />
      </div>
    </div>
  );
};

export default Menu;
