import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { fetchTypes } from '../http/deviceApi';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const TypeBar = observer (() => {
    const {device} = useContext(Context)
    useEffect(()=>
        {
            fetchTypes().then(data=>device.setType(data))
        },[])
    return (
        <MDBBtnGroup shadow='0' aria-label='Basic example'>
           {device.Types.map(type =>
                <MDBBtn color='dark' outline variant="dark" key ={type.id} noRipple> {type.name} </MDBBtn>
            )} 
        </MDBBtnGroup>
    );
})

export default TypeBar;