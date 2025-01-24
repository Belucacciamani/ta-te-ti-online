import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { Sala } from "./classes/sala";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

server.listen(3000, () => {
  console.log("Servidor escuchado en el puerto 3000");
});

const salas:Sala[]= [];

io.on("connection", (socket) => {
  console.log("Nueva coneexión");


  socket.on("encontrarSala", (callback) => buscarSalaPublica(callback) );
});

/** Busca una sala disponible, si la encuentra devuelve el Id de la sala y sino devuelve null  */
function buscarSalaPublica(callback: Function){
  console.log("Buscando sala publica")
  const salaDisponible = salas.find(sala=> {
    if(!sala.publica) return false;
    if(sala.jugadores[0].nombre && sala.jugadores[1].nombre) return false;
    return true
  })

  callback(salaDisponible ?salaDisponible.id : null)

}