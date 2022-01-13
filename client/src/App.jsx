import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Context } from '.';
import { check } from './http/userApi';
import AppRouter from './components/AppRouter';
import { Layout } from './components/Layout';
import { Spinner } from 'react-bootstrap';

const App = observer( () =>
{
  const {user} = useContext(Context)
  const [Loading, setLoading] = useState(false)

  useEffect(()=>
  {
    if(localStorage.getItem('token'))
    {
      setLoading(true);
      check().then(data =>
      {
        user.setUser(data.role)
        user.setAuth(true)
      }).finally(()=>
        {
          setLoading(false)
        })
    }
    else
    {
      user.setAuth(false)
    }
      
  },[user])
  
  if (Loading)
  {
    return <Spinner animation='grow'></Spinner>
  }

  return (
    <BrowserRouter>
    <Layout></Layout>      
    <AppRouter />
    </BrowserRouter>
  )
})

export default App;
