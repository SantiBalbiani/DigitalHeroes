// Require de Express
const express = require('express');
const rutasHeroes = require('./routes/heroes');
const rutasMain = require('./routes/main');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

//Main
app.use('/', rutasMain);

//Heroes
app.use('/heroes', rutasHeroes);

// Ruta Créditos
app.get('/creditos', (req, res) => res.send('Ejercicio realizado por Santiago Balbiani'))

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});