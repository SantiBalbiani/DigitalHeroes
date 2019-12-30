let express = require('express');

// Require de FS
const fs = require('fs');

buscarHeroe = unId => heroes.filter( hero => hero.id == unId ).pop();
// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesController = 
{
    sendHeroes: (req, res) => {
        res.send(heroes);
    },
    getHero: (req, res) => {
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
    },
    getHeroBio: (req, res) => {
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
        },
};

module.exports = heroesController;

