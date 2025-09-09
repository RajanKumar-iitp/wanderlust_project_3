import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Signup(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const { register } = useContext(AuthContext);
  const nav = useNavigate();
  const submit = async (e)=>{ e.preventDefault(); try{ await register(name,email,password); nav('/dashboard'); }catch(err){ alert('Signup failed'); } };
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
