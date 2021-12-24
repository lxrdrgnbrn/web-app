import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Button, Card, Container, Form,} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation , useNavigate } from 'react-router-dom';

import { login, registration } from '../http/userApi';

const Auth = observer( () =>  {
	const {user} = useContext(Context)
	const locate = useLocation()
	const isLogin = locate.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const LogIn = async () =>
	{
		try{
			let data
			if (isLogin)
			{
				data = await login(email,password)
			}
			else
			{
				data= await registration(email,password)
				
			}
			user.setUser(data)
			console.log(user.User)
			user.setAuth(true)
			navigate(HOMEPAGE_ROUTE)
		}
		catch(e){
			alert(e.responce.data.message)
		}
		
	}



	return (
		<>
		<Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
			<Card style={{width: 600}} className='p-5'>
			<Card.Title style={{textAlign: 'center', fontSize: '250%' }}>{isLogin ? "Вход" : "Регистрация"}</Card.Title>
				<Form className='d-flex flex-column'>
					<Form.Control placeholder='Введите email' type="email" className='mt-5'value={email} onChange={e=>setEmail(e.target.value)}></Form.Control>
					<Form.Control placeholder='Введите пароль' type="password" className='mt-4'value={password} onChange={e=>setPassword(e.target.value)}></Form.Control>
					{isLogin
					?
					<><Card.Text className='d-flex justify-content-center align-items-center mt-2'> Нет аккаунта?
								<Card.Link href={REGISTRATION_ROUTE} className='ms-1'>Зарегестрироваться</Card.Link>
						</Card.Text>
						<Button variant="outline-success" className='mt-3 align-self-center' onClick={()=>LogIn()}>Войти</Button></>
					:
					<><Card.Text className='d-flex justify-content-center align-items-center mt-2'> Есть аккаунт?
								<Card.Link href={LOGIN_ROUTE} className='ms-1'>Войти</Card.Link>
						</Card.Text>
						<Button variant="outline-success" className='mt-3 align-self-center' onClick={()=>LogIn()} >Регистрация</Button></>
					}
				</Form>
			</Card>
		</Container>
		</>
	);
})

export default Auth;