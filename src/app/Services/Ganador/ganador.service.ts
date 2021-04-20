import { Injectable } from '@angular/core';

export class Votos {
  Asamblea: string;
totalVotaciones: number;
Ganador: string;
}

let votos: Votos = {
  "Asamblea": "Nombre Asamblea",
"totalVotaciones": 10,
  "Ganador": "Nombre Ganador"
};

@Injectable()
export class GanadorService {
  getVotos() {
		return votos;
	}
}
