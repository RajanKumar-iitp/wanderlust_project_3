import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Dashboard(){
  const [bookings, setBookings] = useState([]);
  useEffect(()=>{ API.get('/bookings/me').then(r=>setBookings(r.data)).catch(()=>{}); },[]);
  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.map(b=> (
        <div key={b._id} className="card">
          <div>{b.listing?.title}</div>
          <div>{new Date(b.startDate).toLocaleDateString()} - {new Date(b.endDate).toLocaleDateString()}</div>
          <div>₹{b.totalPrice}</div>
        </div>
      ))}
    </div>
  );
}
