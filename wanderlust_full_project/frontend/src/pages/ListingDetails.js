import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function ListingDetails(){
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [startDate,setStart]=useState(''); const [endDate,setEnd]=useState('');
  const { user } = useContext(AuthContext);

  useEffect(()=>{ API.get(`/listings/${id}`).then(r=>setListing(r.data)).catch(()=>{}); },[id]);

  const handleBook = async ()=>{
    if(!user) return alert('Login first');
    await API.post('/bookings', { listingId: id, startDate, endDate });
    alert('Booked successfully');
  };

  if(!listing) return <div>Loading...</div>;
  return (
    <div>
      <h1>{listing.title}</h1>
      <img src={listing.images?.[0]||'https://via.placeholder.com/800x400'} style={{width:'100%', height:300, objectFit:'cover'}}/>
      <p>{listing.description}</p>
      <p>Price: ₹{listing.price}</p>
      <div>
        <input type="date" value={startDate} onChange={e=>setStart(e.target.value)} /> <input type="date" value={endDate} onChange={e=>setEnd(e.target.value)} />
        <button onClick={handleBook}>Book</button>
      </div>
      <h3>Reviews</h3>
      <ul>
        {listing.reviewsCount ? <li>Average Rating: {listing.avgRating} ({listing.reviewsCount} reviews)</li> : <li>No reviews yet</li>}
      </ul>
    </div>
  );
}
