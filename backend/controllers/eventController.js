const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { name, description, date, location } = req.body;

  try {
    const event = new Event({
      name,
      description,
      date,
      location,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
