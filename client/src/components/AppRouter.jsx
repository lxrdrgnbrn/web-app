import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '../index';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import DevicePage from '../pages/DevicePage';
import Homepage from '../pages/Homepage';
import Shop from '../pages/Shop';
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {
    const {user} = useContext(Context)
        return(
            <>
            <Routes>
                    <Route index element = {<Homepage/>}></Route>
                    <Route path = {SHOP_ROUTE} element = {<Shop/>}></Route>
                    <Route path = {DEVICE_ROUTE} element = {<DevicePage/>}></Route>
                    <Route path = {LOGIN_ROUTE} element = {<Auth/>}></Route>
                    <Route path = {REGISTRATION_ROUTE} element = {<Auth/>}></Route>
                    {user.isAuth &&
                        <>
                        {user.User==="ADMIN" &&
                        <>
                        <Route path = {ADMIN_ROUTE} element = {<Admin/>}></Route>
                        </>
                        }
                        <Route path = {BASKET_ROUTE} element = {<Basket/>}></Route>
                        </>
                    }
                    <Route path = "*" element={<Homepage/>}></Route>
                    
            </Routes>
            </>
        )
})

export default AppRouter;