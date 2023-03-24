import React, { useState } from 'react'
import { Container, FormWrap, FormContent, Form, FormH1, FormInput, FormLabel, Icon, FormButton, IconWrap, Icon2} from './SigninElements'
import axios from 'axios'
import { Navigate } from 'react-router-dom';


function Register() {


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [navigate, setNavigate] = useState(false);

  const submit = async e => {
    e.preventDefault();

    await axios.post('http://localhost:8000/api/register', {
      name, email, password
    });

    setNavigate(true);
  }

  if(navigate) {
      return <Navigate  to="/login"/>;
  }

  return (
    <>
    <Container>
        <FormWrap>
        <IconWrap>
        <Icon to="/">SariSariPay</Icon>
        <Icon2 to="/login">Log in</Icon2>
        </IconWrap>
       <FormContent>
            <Form onSubmit={submit}>
                <FormH1>Register now !</FormH1>
                <FormLabel htmlFor="for">Name</FormLabel>
                <FormInput type='text' required 
                        onChange={e => setName(e.target.value)}
                />
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

export default Register