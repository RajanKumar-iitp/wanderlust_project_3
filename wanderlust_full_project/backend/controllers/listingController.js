const Listing = require('../models/Listing');
const Review = require('../models/Review');

exports.createListing = async (req, res) => {
  try{
    const { title, description, price, location, images } = req.body;
    const listing = new Listing({ title, description, price, location, images, owner: req.user.id });
    await listing.save();
    res.json(listing);
  }catch(err){
    console.error(err); res.status(500).send('Server error');
  }
};

exports.getListings = async (req, res) => {
  try{
    const q = req.query.q || '';
    const listings = await Listing.find({ title: { $regex: q, $options: 'i' } }).populate('owner', 'name email');
    res.json(listings);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.getListing = async (req, res) => {
  try{
    const listing = await Listing.findById(req.params.id).populate('owner', 'name email');
    if(!listing) return res.status(404).json({ message: 'Not found' });
    // compute average rating
    const reviews = await Review.find({ listing: listing._id });
    const avg = reviews.length ? (reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(2) : null;
    res.json({ ...listing.toObject(), avgRating: avg, reviewsCount: reviews.length });
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.updateListing = async (req, res) => {
  try{
    const listing = await Listing.findById(req.params.id);
    if(!listing) return res.status(404).json({ message: 'Not found' });
    if(listing.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
    const { title, description, price, location, images } = req.body;
    listing.title = title || listing.title;
    listing.description = description || listing.description;
    listing.price = price || listing.price;
    listing.location = location || listing.location;
    listing.images = images || listing.images;
    await listing.save();
    res.json(listing);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.deleteListing = async (req, res) => {
  try{
    const listing = await Listing.findById(req.params.id);
    if(!listing) return res.status(404).json({ message: 'Not found' });
    if(listing.owner.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
    await listing.remove();
    res.json({ message: 'Removed' });
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};
