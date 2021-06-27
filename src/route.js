const express = require("express");
// importando o controller para pegar as informações que serão passadas para ele
const QuestionController = require("./Controllers/QuestionController"); 

const RoomController = require("./Controllers/RoomController");

const route = express.Router();
//requisitando que quando for caminho tal pegue tal arquivo
route.get('/', (req, res) => res.render("index", {page: "enter-room"}));
//uma variável
route.get('/create-room', (req, res) => res.render("index", {page: "create-room"}));
route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);

// Formato que o formulario ira passar as informações 
route.post('/question/create/:room', QuestionController.create);
route.post('/question/:room/:question/:action', QuestionController.index);


//tenho que deixar claro que essa função route pode ser importado colocando o exporte
module.exports = route;