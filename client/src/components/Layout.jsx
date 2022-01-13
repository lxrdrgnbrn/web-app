import React, { useContext, useState } from 'react';
import { Context } from '../index'
import { HOMEPAGE_ROUTE} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import FalseNavbar from './falseNavbar';
import TrueNavbar from './trueNavbar';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
const Layout = observer( () => {
  const [showBasic, setShowBasic] = useState(false);
    const {user} = useContext(Context)
    return (
      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          {user.isAuth
            ?<TrueNavbar></TrueNavbar>
            :<FalseNavbar></FalseNavbar>
          }
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    );
})

export {Layout}