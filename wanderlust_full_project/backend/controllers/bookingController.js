const Booking = require('../models/Booking');
const Listing = require('../models/Listing');

exports.createBooking = async (req, res) => {
  try{
    const { listingId, startDate, endDate } = req.body;
    const listing = await Listing.findById(listingId);
    if(!listing) return res.status(404).json({ message: 'Listing not found' });
    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000*60*60*24)) || 1;
    const totalPrice = listing.price * days;
    const booking = new Booking({ user: req.user.id, listing: listingId, startDate, endDate, totalPrice });
    await booking.save();
    res.json(booking);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.getUserBookings = async (req, res) => {
  try{
    const bookings = await Booking.find({ user: req.user.id }).populate('listing');
    res.json(bookings);
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};

exports.cancelBooking = async (req, res) => {
  try{
    const booking = await Booking.findById(req.params.id);
    if(!booking) return res.status(404).json({ message: 'Not found' });
    if(booking.user.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });
    await booking.remove();
    res.json({ message: 'Cancelled' });
  }catch(err){ console.error(err); res.status(500).send('Server error'); }
};
