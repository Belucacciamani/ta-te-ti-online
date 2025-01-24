import { Jugador, JUGADOR_VACIO } from "../interfaces/jugador";

export class Sala {
  publica: boolean;
  jugadores: [Jugador, Jugador] = [JUGADOR_VACIO, JUGADOR_VACIO];
  id:number
}