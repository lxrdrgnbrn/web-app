import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { fetchBrands } from '../http/deviceApi';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
const BrandBar = observer (() => {
    const {device} = useContext(Context)
    useEffect(()=>
        {
            fetchBrands().then(data=>device.setBrand(data))
        },[])
    return (
        <MDBListGroup flush >
           {device.Brands.map(brand =>
                <MDBListGroupItem key ={brand.id}>{brand.name}</MDBListGroupItem>
            )} 
        </MDBListGroup>
    );
})

export default BrandBar;