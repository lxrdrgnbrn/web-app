import { MDBBtn, MDBBtnGroup, MDBContainer } from 'mdb-react-ui-kit';
import { observer } from 'mobx-react-lite';
import React from 'react';
import CreateBrand from '../Modals/CreateBrand';

const Admin = observer( () => {
    return (
    <>
    <MDBContainer>
    <MDBBtnGroup vertical aria-label="Vertical-button group" >
        <MDBBtn noRipple outline >Добавить тип</MDBBtn>
        <MDBBtn noRipple outline >Добавить Брэнд</MDBBtn>
        <MDBBtn noRipple outline >Добавить Устройство</MDBBtn>
        <CreateBrand/>
    </MDBBtnGroup> 
    </MDBContainer>
    </>
    );
})

export default Admin;