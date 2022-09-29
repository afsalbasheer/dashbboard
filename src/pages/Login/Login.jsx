import { Button } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useAtom } from 'jotai'
import { isLoggedInAtom } from '../../store/atoms'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Login.css"


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom)
  const [userId,setUserId] = useState()
  const [findId,setFindId] = useState()



  useEffect(()=>{
    axios.get("http://localhost:3000/admin").then((response)=>{
      setFindId(response.data[0])
    })
  },[])
  let navigate = useNavigate();
  const handleLogin = () => {       

    if(findId.email==userId){
      console.log(findId.email)
          setIsLoggedIn(true)
          navigate('/dashboard')
    }  
  }
  

  return (
    <div className='loginWrapper'>
        <div className='heading'><h2>Login</h2></div>
      <div className='wrapper'>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          className='username'
          onChange={e=>setUserId(e.target.value)}/>
        
        <button className='LoginBtn' onClick={handleLogin}> LOGIN</button>
      </div>
    </div>
  )
}

export default Login