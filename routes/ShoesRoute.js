const express = require('express');
const { createShoesDetails, retrieveShoes, updateShoes, deleteShoesDetails } = require('../controllers/ShoesController');
const router = express.Router();

router.post('/shoes', createShoesDetails);
router.get('/shoes/:id', retrieveShoes);
router.put('/shoes/:id', updateShoes);
router.delete('/shoes/:id', deleteShoesDetails)

module.exports = router;