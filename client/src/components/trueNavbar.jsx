import React, { useContext } from 'react';
import {Nav } from "react-bootstrap"
import { Outlet } from 'react-router-dom';
import { Context } from '../index'
import { ADMIN_ROUTE, HOMEPAGE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { BsFillBasket2Fill } from "react-icons/bs";
import { useLocation , useNavigate } from 'react-router-dom';
import { logOut } from '../http/userApi';


const TrueNavbar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate() 
    
    const LogOut = async () =>
    {
        user.setUser({})
        user.setAuth(false)
        logOut()
    }

    return (
        <>
          <Nav className="me-auto">
            <Nav.Link href={SHOP_ROUTE}>Каталог</Nav.Link>
            <Nav.Link href="#pricing">Доставка</Nav.Link>
            {user.User==="ADMIN" &&
            <Nav.Link href={ADMIN_ROUTE}>АДМИН</Nav.Link>
            }   
          </Nav>
          <Nav>
            <Nav.Link href="#deets" >
            <BsFillBasket2Fill style={{width: "100px", height: "25px"}} />
            </Nav.Link>
            <Nav.Link className='ml-right' onClick={()=> LogOut()}>Выйти</Nav.Link>
          </Nav>
        </>
    );
})

export default TrueNavbar