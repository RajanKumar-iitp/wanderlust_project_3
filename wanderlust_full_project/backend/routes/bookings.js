const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createBooking, getUserBookings, cancelBooking } = require('../controllers/bookingController');

router.post('/', auth, createBooking);
router.get('/me', auth, getUserBookings);
router.delete('/:id', auth, cancelBooking);

module.exports = router;
