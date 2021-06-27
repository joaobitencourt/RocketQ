//importando o express
const express = require("express");
const route = require("./route");
const path = require("path");
//criando o server... "pelo express, estando ele iniciado e guardando um "seção" no server
const server = express();
//configurando o engine defaulft sera o ejs
server.set("view engine", "ejs");
//mostrando onde esta os arquivos padrão para o ejs
server.use(express.static("public"));
//mostrando o caminho das views "criadndo a url"
server.set("views", path.join(__dirname, "views"));
// Configurando o midware(meidador entre o que o form esta enviando e para a onde a rota vai mandar controller recebe)
server.use(express.urlencoded({extended: true}))
server.use(route);
//chamndo a metodo listen do express -> porta que ele vai estar rodando
server.listen(3000, () => console.log("RODANDO"));