const express = require('express');
const router = express.Router()
const mainController = require('../controller/mainController');

// Ruta Raíz / ➝ Home
router.get('/', mainController.sendWelcomeMessage);

module.exports = router;