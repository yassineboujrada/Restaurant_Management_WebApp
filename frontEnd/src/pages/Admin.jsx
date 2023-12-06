import MenuAdmin from "../components/MenuAdmin";
import Inventory from "../components/Inventory";
import Orders from "../components/orders";
import Customers from "../components/Customers";
import { Routes , Route , useLocation, Outlet} from 'react-router-dom';  

const Admin = ( ) =>{
    return(
        <>
            <MenuAdmin/>

            <Outlet/>

            
        </>
    )
}
export default Admin;