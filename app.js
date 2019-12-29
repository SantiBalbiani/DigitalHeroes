// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
let textoHome = " Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.";
buscarHeroe = unId => heroes.filter( hero => hero.id == unId ).pop();
// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send(textoHome);
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.filter( hero => hero.id == req.params.id ).pop();
	
	if (typeof heroe == 'undefined'){
		res.send('heroe no encontrado');
	 } 
	 if (typeof heroe != 'undefined') {
		//res.send(​`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
		res.send("Hola, mi nombre es "+ heroe.nombre + " y soy " + heroe.profesion);
	 }
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = buscarHeroe(req.params.id);
	if (typeof heroe == 'undefined'){
		res.send('heroe no encontrado');
	 } 
	 if (typeof heroe != 'undefined') {
		 if (req.params.ok == 'ok'){
			res.send( heroe.nombre + "  --->Reseña: " + heroe.resenia);
		 }else{
			 res.send("Lamento que no desees saber más de mi :(");
		 }
		//res.send(​`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
		
	 }
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
);

// Ruta Créditos
app.get('/creditos', (req, res) => res.send('Ejercicio realizado por Santiago Balbiani'))

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});