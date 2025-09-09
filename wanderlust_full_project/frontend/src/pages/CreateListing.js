import React, { useState, useContext } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function CreateListing(){
  const [title,setTitle]=useState(''); const [price,setPrice]=useState(''); const [location,setLocation]=useState(''); const [description,setDescription]=useState('');
  const [imageFile, setImageFile] = useState(null);
  const nav = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!user) return alert('Login first');
    let imageUrls = [];
    if(imageFile){
      const form = new FormData();
      form.append('image', imageFile);
      const up = await API.post('/upload', form, { headers: {'Content-Type':'multipart/form-data'} });
      imageUrls.push(up.data.url);
    }
    const res = await API.post('/listings', { title, description, price:Number(price), location, images: imageUrls });
    nav(`/listing/${res.data._id}`);
  };

  return (
    <div>
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
        <input placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} /><br/>
        <input placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} /><br/>
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} /><br/>
        <input type="file" onChange={e=>setImageFile(e.target.files[0])} /><br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
