const express = require('express');
const router = express.Router();

const home = require('../controllers/index');

router.get('/', home.home_controller);
router.post('/form-submit', home.form_controller);

module.exports = router;