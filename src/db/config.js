const sqlite3 = require("sqlite3");
//quando decalrado destá forma o js vai dentro do arquivo, procura a função/o que você escreveu e traz so o que foi passado entre as {} 
const { open } = require("sqlite");

module.exports = () =>
// SEMPRE POR O . ANTES DA / PARA CRIAR O FILE NAME
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });