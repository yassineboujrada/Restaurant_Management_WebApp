import { useRef , useEffect } from 'react';
import '../styles/Navbar.css'
import { BsCartFill } from 'react-icons/bs';
import {NavLink} from "react-router-dom"
import { Container } from 'reactstrap';


const Navbar = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    // return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className='navBar' ref={headerRef}>
      <Container>
      <div className='nav__wrapper d-flex align-items-center justify-content-between'>
        <div className='logo '>Table d'Or</div>
        <div className='navigation' ref={menuRef}>
            <div className='nav d-flex align-items-center gap-5'>
              <div><NavLink to="/" className="meu">Accueil</NavLink></div>
              <div><NavLink to="/menu" className="meu ">Menu</NavLink></div>
              <div><NavLink to="/aboutUs" className="meu ">Qui Sommes Nous</NavLink></div>
            </div>
        </div>
        <div className='nav__right d-flex align-items-center gap-4'>
          <span >
          <NavLink to="/Cart"><BsCartFill className='cartIcon'  /></NavLink>
          </span>
          <div ><NavLink to="/Sign" className="signIn">Se connecter</NavLink></div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Navbar
