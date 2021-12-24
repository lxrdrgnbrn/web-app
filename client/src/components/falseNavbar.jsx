import React, { useContext } from 'react';
import { Nav} from "react-bootstrap"
import {  Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { BsFillBasket2Fill } from "react-icons/bs";
const FalseNavbar = observer( () => {
    const navigate = useNavigate()
    return (
        <>
          <Nav className="me-auto">
            <Nav.Link href={SHOP_ROUTE}>Каталог</Nav.Link>
            <Nav.Link href="#pricing">Доставка</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" >
            <BsFillBasket2Fill style={{width: "100px", height: "25px"}} />
            </Nav.Link>
            <Nav.Link eventKey={2} className='ml-right' onClick={()=>navigate(LOGIN_ROUTE)}>Войти</Nav.Link>
          </Nav>
        </>
    );
})

export default FalseNavbar