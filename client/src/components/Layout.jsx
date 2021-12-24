import React, { useContext } from 'react';
import {Button, Container, Navbar, Nav , NavDropdown} from "react-bootstrap"
import {  Outlet } from 'react-router-dom';
import { Context } from '../index'
import { ADMIN_ROUTE, HOMEPAGE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { BsFillBasket2Fill } from "react-icons/bs";
import FalseNavbar from './falseNavbar';
import TrueNavbar from './trueNavbar';

const Layout = observer( () => {
    const {user} = useContext(Context)
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href={HOMEPAGE_ROUTE}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {user.isAuth
        ? <TrueNavbar></TrueNavbar>
        : <FalseNavbar></FalseNavbar>
        }
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
})

export {Layout}