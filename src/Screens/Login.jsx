import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../COnfig/Config';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

const handleLogin = () =>
{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    navigate('/dashboard')
  })
  .catch((error) => {
    console.log(error);
});
}



  return (
    <>
    <h1>Login</h1>  

         <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div> <TextField onChange={(e)=> setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /></div>  
      <div> <TextField onChange={(e)=> setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" /></div>  
      <Button onClick={handleLogin} variant="outlined">Login</Button>
    </Box>

    </>
  )
}

export default Login
