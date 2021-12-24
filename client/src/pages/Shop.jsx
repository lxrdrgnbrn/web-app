import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import { fetchTypes } from '../http/deviceApi';

const Shop = observer(() => {
    const {device} = useContext(Context)
    const {user} = useContext(Context)
    console.log(user.User)
    useEffect(()=>
        {
            fetchTypes().then(data=>device.setType(data))
        },[])

    return (
        <Container className='d-flex justify-content-between mt-5' >
            <Row>
                <Col md={10}>
                    <BrandBar/>
                </Col>
                <Col md={9}>

                </Col>
            </Row>
        </Container>
    );
})

export default Shop;