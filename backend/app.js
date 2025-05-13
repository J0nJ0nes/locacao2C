//chamada das dependencias
const express = require('express');
const http =require('http');

//Inicializar Aplicação Express
const app =express();
const server =http.createServer(app);

//conexões com BD e Escutar Servidor
