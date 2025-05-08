const express = require('express');
const { createMaleShoesDetails, retrieveMaleShoesDetails } = require('../controllers/MaleShoesController');

const router = express.Router();

router.post("/maleShoes", createMaleShoesDetails);
router.get("/maleShoes", retrieveMaleShoesDetails);

module.exports = router;