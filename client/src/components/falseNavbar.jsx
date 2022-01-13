import React, { useContext } from 'react';
import { Nav} from "react-bootstrap"
import {  Outlet, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { HOMEPAGE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { BsFillBasket2Fill } from "react-icons/bs";
import {
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
const FalseNavbar = observer( () => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    return (
        <>
           <MDBNavbarNav className='d-flex justify-content-sm-start' >

            <MDBNavbarItem>
              <MDBNavbarLink href={SHOP_ROUTE}>
                Каталог
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                О компании
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                Доставка и оплата
              </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                Гарантия
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            </MDBNavbarNav>

            <MDBNavbarNav className='d-flex justify-content-end'>

            <MDBNavbarItem>
              <MDBBtn outline className='mx-2' color='dark' onClick={()=>navigate(LOGIN_ROUTE)} noRipple>Войти</MDBBtn>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </>
    );
})

export default FalseNavbar