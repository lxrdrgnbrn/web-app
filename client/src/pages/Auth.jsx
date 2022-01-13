import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { Button, Card, Container, Form,} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { HOMEPAGE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation , useNavigate } from 'react-router-dom';

import { login, registration } from '../http/userApi';
import { MDBBtn, MDBCard, MDBCardLink, MDBCardText, MDBCardTitle, MDBContainer, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';

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
			user.setUser(data.role)
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
		<MDBContainer className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 54}}>
			<MDBCard style={{width: 600}} className='p-5'>
			<MDBCardTitle style={{textAlign: 'center', fontSize: '250%' }}>{isLogin ? "Вход" : "Регистрация"}</MDBCardTitle>
				<MDBInputGroup className='d-flex flex-column'>
					<MDBInput label='Введите email' type="email" id='typeEmail' className='mt-5'value={email} onChange={e=>setEmail(e.target.value)}></MDBInput>
					<MDBInput label='Введите пароль' type="password" id="typePassword" className='mt-4'value={password} onChange={e=>setPassword(e.target.value)}></MDBInput>
				</MDBInputGroup>
					{isLogin
					?
					<><MDBCardText className='d-flex justify-content-center align-items-center mt-2'> Нет аккаунта?
								<MDBCardLink href={REGISTRATION_ROUTE} className='ms-1'>Зарегестрироваться</MDBCardLink>
						</MDBCardText>
						<MDBBtn noRipple outline color='success' className='mt-3 align-self-center' onClick={()=>LogIn()}>Войти</MDBBtn></>
					:
					<><MDBCardText className='d-flex justify-content-center align-items-center mt-2'> Есть аккаунт?
								<MDBCardLink href={LOGIN_ROUTE} className='ms-1'>Войти</MDBCardLink>
						</MDBCardText>
						<MDBBtn noRipple outline color='success' className='mt-3 align-self-center' onClick={()=>LogIn()} >Регистрация</MDBBtn></>
					}
				
			</MDBCard>
		</MDBContainer>
		</>
	);
})

export default Auth;