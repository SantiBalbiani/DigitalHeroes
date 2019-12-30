const express = require('express');
const router = express.Router();

const heroesController = require('../controller/heroesController');

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
router.get('/', heroesController.sendHeroes);

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/:id', heroesController.getHero);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/:id/:ok?', heroesController.getHeroBio);

module.exports = router;