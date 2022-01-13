import React, { useContext } from 'react';
import {Nav } from "react-bootstrap"
import { Outlet } from 'react-router-dom';
import { Context } from '../index'
import { ADMIN_ROUTE, HOMEPAGE_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { BsFillBasket2Fill } from "react-icons/bs";
import { useLocation , useNavigate } from 'react-router-dom';
import { logOut } from '../http/userApi';
import {
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const TrueNavbar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate() 
    
    const LogOut = async () =>
    {
        user.setUser({})
        user.setAuth(false)
        logOut()
        navigate(HOMEPAGE_ROUTE)
    }

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

       {user.User==="ADMIN" &&
       <MDBNavbarItem>
       <MDBNavbarLink href={ADMIN_ROUTE}>
         Админ
       </MDBNavbarLink>
      </MDBNavbarItem>  
       }

       </MDBNavbarNav>
       <MDBNavbarNav className='d-flex justify-content-end'>

       <MDBNavbarItem>
     </MDBNavbarItem>
     <MDBNavbarItem className='me-3 me-lg-0'>
       <MDBNavbarLink href='#'>
         <MDBIcon icon='shopping-cart' fas color='alert' size='fa-lg'/>
       </MDBNavbarLink>
     </MDBNavbarItem>

       <MDBNavbarItem>
         <MDBBtn outline className='mx-2' color='dark' onClick={()=>LogOut()} noRipple>Выйти</MDBBtn>
       </MDBNavbarItem>
     </MDBNavbarNav>
   </>
    );
})

export default TrueNavbar