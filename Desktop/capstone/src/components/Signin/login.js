import React, { useState } from 'react'
import { Container, FormWrap, FormContent, Form, FormH1, FormInput, FormLabel, Icon, FormButton, IconWrap, Icon2 } from './SigninElements'
import axios from 'axios'
import { Navigate } from 'react-router-dom';


function Login() {



    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [navigate, setNavigate] = useState(false);
  

    const submit = async e => {
      e.preventDefault();
  

      const {data} = await axios.post('https://sarisaridb.000webhostapp.com/api/login', {
        email, password
      });

      // console.log("data",data);

      localStorage.setItem('token',data['token']);
      localStorage.setItem('email',data['id']);

      //axios.defaults.headers.common['Authorization'] =`Bearer ${data['token']}`;
  
      setNavigate(true);
    }
  

    if(navigate) {
        return <Navigate  to="/success"/>;
    }
  

    return (
      <>
      <Container>
          <FormWrap>
          <IconWrap>
          <Icon to="/">SariSariPay</Icon>
          <Icon2 to="/signin">Register</Icon2>
        </IconWrap>
         <FormContent>
              <Form onSubmit={submit}>
                  <FormH1>Log in to your Account</FormH1>
                 
                  <FormLabel htmlFor="for">Email</FormLabel>
                  <FormInput type='email' required 
                          onChange={e => setEmail(e.target.value)}
                  />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required 
                          onChange={e => setPassword(e.target.value)}
                  />
                  <FormButton type='submit'>Continue</FormButton>
              </Form>
          </FormContent>
          </FormWrap>
      </Container></>
    )
  }

export default Login