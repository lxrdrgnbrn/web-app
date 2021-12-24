import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';
import { fetchBrands } from '../http/deviceApi';

const BrandBar = observer (() => {
    const {device} = useContext(Context)
    useEffect(()=>
        {
            fetchBrands().then(data=>device.setBrand(data))
        },[])
    return (
        <ListGroup> Брэнд
           {device.Brands.map(brand =>
                <ListGroup.Item key ={brand.id}>{brand.name}</ListGroup.Item>
            )} 
        </ListGroup>
    );
})

export default BrandBar;