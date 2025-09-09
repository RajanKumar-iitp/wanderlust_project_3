import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Home(){
  const [listings, setListings] = useState([]);
  useEffect(()=>{ API.get('/listings').then(r=>setListings(r.data)).catch(()=>{}); },[]);
  return (
    <div>
      <h1>Explore Listings</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
        {listings.map(l=> (
          <div key={l._id} className="card">
            <img src={l.images?.[0]||'https://via.placeholder.com/400x250'} alt="" style={{width:'100%', height:140, objectFit:'cover'}}/>
            <h3>{l.title}</h3>
            <p>₹{l.price} • {l.location}</p>
            <Link to={`/listing/${l._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
