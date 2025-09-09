import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ListingDetails from './pages/ListingDetails';
import CreateListing from './pages/CreateListing';
import { AuthProvider } from './context/AuthContext';

function App(){
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/create" element={<CreateListing />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
