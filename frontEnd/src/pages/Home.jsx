import ImageSlider from "../components/ImageSlider";
import { BiSearch } from 'react-icons/bi';
import { useState , useEffect } from "react";
import '../styles/Home.css';
import Menu from "./Menu"; 
import AboutUs from "./AboutUs";
import Cart from "../components/Cart";
import axios from 'axios';
const Home = () => {
    const slides = [
        {url:'/images/panini.jpg',title: 'burger'},
        {url:'/images/coffee.jpg',title: 'burger'},
        {url:'/images/frise.jpg',title: 'burger'}
    ]
    
    
    return (
        <>
        <div className="mainContainer">
        <div className="containerSlider">
            <div className="containerStyles">
            <ImageSlider slides={slides} />
            </div>
        </div>
        <div className="search">
            <div className="searchSentence">Vivez la joie de la nourriture </div>
            <div className="searchSentence">préparée avec <span style={{color:'var(--second-color)'}}>PASSION</span></div>
            <div className="searchSentence">et servie avec <span style={{color:'var(--main-color)'}}>AMOUR</span>. </div>
            <div className="searchSentence2">Découvrez Votre Repas Parfait : Laissez S'exprimer Votre Appétit et Trouvez Votre Désir Culinaire !</div>
            <div className="containerSearch">
                        <button type="submit" className="seeFoodbtn">Commandez maintenant</button>
                    
            </div>
        </div>
        </div>
       
        <br/><br/><br/>
        <Menu/>
        
        <AboutUs/>
        </>
    )}
export default Home;