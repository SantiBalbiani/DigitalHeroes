const express = require('express');
let textoHome = " Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.";
let mainControl = {
    sendWelcomeMessage: (req, res) => {
        res.send(textoHome);
    },
};

module.exports = mainControl;