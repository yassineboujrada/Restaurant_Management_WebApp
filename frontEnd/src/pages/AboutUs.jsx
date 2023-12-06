import "../styles/AboutUs.css";
import {BsFacebook ,BsInstagram ,BsTwitter} from "react-icons/bs";
import { Container } from "reactstrap";
import MenuAdmin from "../components/MenuAdmin";
const AboutUs = () => {
    return (
        <>
        <section className="common__section">
            <Container>
            <h1 className="menuTitle">Qui Sommes Nous?</h1>
            </Container>
        </section>
        <div className="aboutContainer">
            <div className="child-about">
                nous sommes une entreprise specialisee dans la restauration
                des collectivites d'entreprises ceremonies , 
                Et fetes de toutes les categories
            </div>
            <div className="child-about imgAboutBurger" >
                <img src="/images/burger.jpg" className="aboutImg"/>
            </div>
        </div>
        
        </>
    )}

export default AboutUs;