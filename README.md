# wanderlust_project_3

## Wanderlust -  (MERN Stack)

Wanderlust is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js).
It is designed as an Airbnb clone for internship and learning purposes, implementing major Airbnb-like features such as property listings, bookings, reviews, authentication, and image uploads.

🚀 Features

```
User Authentication: Register, Login, JWT-based authentication, password hashing with bcrypt.
Listings Management: Create, read, update, delete (CRUD) listings with image upload (Cloudinary integration).
Bookings: Users can book listings, view their bookings, and cancel them.
Reviews & Ratings: Add reviews and ratings for listings.
Secure API: Protected routes using JWT, input validation, error handling.
Frontend: React-based UI with routing, authentication context, protected routes, and responsive layout (TailwindCSS).
```

## 📂 Project Structure
```
wanderlust/
│
├── backend/                # Node.js + Express backend
│   ├── controllers/        # Route controllers (auth, listings, bookings, reviews)
│   ├── middleware/         # Auth middleware (JWT verification)
│   ├── models/             # MongoDB models (User, Listing, Booking, Review)
│   ├── routes/             # API routes (auth, listings, bookings, reviews)
│   ├── server.js           # Entry point for backend server
│   ├── .env.example        # Example environment variables
│   └── package.json
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components (Navbar, PrivateRoute)
│   │   ├── context/        # AuthContext for global authentication state
│   │   ├── pages/          # Application pages (Home, Login, Signup, Dashboard, ListingDetails, CreateListing)
│   │   ├── services/       # API helper using Axios
│   │   ├── App.js          # React Router setup
│   │   └── index.js
│   └── package.json
│
├── README.md               # Documentation

```
## ⚙️ Requirements
```
- Node.js (v16 or later)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for image uploads)
- npm or yarn
```

## 🔧 Setup Instructions
1. Clone the repository
   ```git clone https://github.com/yourusername/wanderlust.git```
   ```cd wanderlust```

2.  Setup Backend
    ```cd backend```
    ```npm install```
    ```cp .env.example .env```
    
Edit .env file with your configuration:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

Run backend server:
```npm run dev```


3.  Setup Frontend
```
cd frontend
npm install
npm start
```
Frontend runs on http://localhost:3000 by default.

--- 
##   🧪 Testing

- Register a new user → /signup
- Login and obtain JWT → /login
- Create a new listing (upload image) → /listings
- Book a listing → /bookings
- Add a review → /reviews

## 📌 Future Improvements

- Payment integration (Stripe)
- Map integration for locations
- Wishlist / Favorites feature
- Email notifications
    
    
