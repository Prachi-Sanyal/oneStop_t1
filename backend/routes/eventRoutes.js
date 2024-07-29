const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');

const router = express.Router();

router.route('/').post(createEvent).get(getEvents);

module.exports = router;
