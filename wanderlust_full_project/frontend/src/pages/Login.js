import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const { login } = useContext(AuthContext);
  const nav = useNavigate();
  const submit = async (e)=>{ e.preventDefault(); try{ await login(email,password); nav('/dashboard'); }catch(err){ alert('Login failed'); } };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
