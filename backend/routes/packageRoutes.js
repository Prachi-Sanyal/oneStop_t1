const express = require('express');
const { createPackage, getPackages } = require('../controllers/packageController');

const router = express.Router();

router.route('/').post(createPackage).get(getPackages);

module.exports = router;
