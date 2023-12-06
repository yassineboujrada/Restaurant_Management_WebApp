import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";
import { Menu, Button  } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/admin.css"


const MenuAdmin = () => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/");

    useEffect(() => {
        const pathName = location.pathname;
        setSelectedKeys(pathName);
    }, [location.pathname]);
    const handleLogout = () => {
      // Handle the logout action here
      // You can add the logic to clear the user's session and redirect to the login page
      navigate("/login"); // Redirect to the login page, for example
    };

    const navigate = useNavigate()
    return(
        <div className="CenteredMenu">
      <Menu
        className="SideMenuHorizontal"
        mode="horizontal"
        style={{
            display: 'flex',
            justifyContent: 'center'}}
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          
          {
            label: "Inventaire",
            key: "/admin/inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Commandes",
            key: "/admin",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Clients",
            key: "/admin/customers",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
      <Button
        type="primary"
        style={{marginTop: '5px'}}
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Se déconnecter
      </Button>
    </div>
    )
}

export default MenuAdmin;