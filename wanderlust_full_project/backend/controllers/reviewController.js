const Review = require('../models/Review');
const Listing = require('../models/Listing');

exports.addReview = async (req, res) => {
  try{
    const { listingId, rating, comment } = req.body;
    const listing = await Listing.findById(listingId);
    if(!listing) return res.status(404).json({ message: 'Listing not found' });
    const review = new Review({ user: req.user.id, listing: listingId, rating, comment });
    await review.save();
    res.json(review);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.getReviewsForListing = async (req, res) => {
  try{
    const reviews = await Review.find({ listing: req.params.listingId }).populate('user', 'name');
    res.json(reviews);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};
