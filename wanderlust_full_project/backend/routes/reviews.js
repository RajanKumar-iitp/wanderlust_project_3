const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addReview, getReviewsForListing } = require('../controllers/reviewController');

router.post('/', auth, addReview);
router.get('/listing/:listingId', getReviewsForListing);

module.exports = router;
