# Wanderlust - MERN Starter (Full)

This is a starter MERN project implementing core Airbnb-like features:
- User auth (register/login) with JWT & bcrypt
- Listings CRUD with image upload (Cloudinary)
- Bookings with date range and total price
- Reviews & ratings
- React frontend with pages for create/listings/booking/dashboard

## How to run

1. Backend:
   - cd backend
   - npm install
   - create .env from .env.example and fill values
   - npm run dev

2. Frontend:
   - cd frontend
   - npm install
   - set REACT_APP_API_URL if needed
   - npm start

Notes: Cloudinary upload endpoint requires valid keys in .env. This project is a starter scaffold; add validation, tests, and production hardening before deploying.
