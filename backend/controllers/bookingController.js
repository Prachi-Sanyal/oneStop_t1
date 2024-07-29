const Booking = require('../models/Booking');
const { sendEmail } = require('../utils/sendEmail');

exports.createBooking = async (req, res) => {
  const { user, event, package, eventDetails, personalDetails } = req.body;

  try {
    const booking = new Booking({
      user,
      event,
      package,
      eventDetails,
      personalDetails,
    });

    await booking.save();

    // Send email notification to the agent
    await sendEmail({
      to: process.env.AGENT_EMAIL,
      subject: 'New Booking Request',
      text: `You have a new booking request from ${personalDetails.name}.`,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('event package');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
