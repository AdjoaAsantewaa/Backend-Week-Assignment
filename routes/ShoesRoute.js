const express = require('express');
const { createShoesDetails, retrieveShoes } = require('../controllers/ShoesController');
const router = express.Router();

router.post('/shoes', createShoesDetails);
router.get('/shoes/:id', retrieveShoes);

module.exports = router;