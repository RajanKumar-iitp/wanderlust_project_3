import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar(){
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogout = ()=>{ logout(); nav('/'); };
  return (
    <nav style={{padding:'1rem', borderBottom:'1px solid #eee'}}>
      <Link to="/">Wanderlust</Link> | <Link to="/">Explore</Link> | <Link to="/create">Create Listing</Link>
      <span style={{float:'right'}}>
        {user ? (<>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout} style={{marginLeft:10}}>Logout</button>
        </>) : (<>
          <Link to="/login">Login</Link> <Link to="/signup">Sign up</Link>
        </>)}
      </span>
    </nav>
  );
}
