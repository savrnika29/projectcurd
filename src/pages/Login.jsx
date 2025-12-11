import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loginUser } from '../features/auth/authSlice';

const Login = () => {
    const dispatch =useDispatch();
    const {loading ,error} =useSelector((state)=>state.auth);
    const [from ,setForm] =useSelector({username:"", password:""});
    const handleSubmit=(e)=>{
        e.prevenDefault();
        dispatch(loginUser(from));
    }
  return (
    <div>
        <h1>Login</h1>
        <from  onSubmit={handleSubmit}>
            <input type='text'
            placeholder='username'
            onChange={(e)=>setForm({...from,username:e.target.value})}
           >
             </input>
               <input type='password'
            placeholder='password'
            onChange={(e)=>setForm({...from,password:e.target.value})}
           >
             </input>
             <button type='submit' disabled={loading}>
                {loading?"loading...":"Login"}
             </button>
             {error && <p style={{color:"red"}}>{error}</p>}
        </from>
    </div>
  )
}

export default Login