import { Injectable } from '@angular/core';
import { ConjuntosService } from '../conjuntos/conjuntos.service';
import { Conjunto } from '../conjuntos/conjunto.model'
import { Persona } from '../personas/persona.model'
import { PersonaxConjunto } from './personaxconjunto.model'
import { PersonasService } from '../personas/personas.service';

@Injectable({
  providedIn: 'root'
})

export class PersonasxconjuntosService {

  private conjuntos: Conjunto[];
  private personas: Persona[];

  private personasxconjuntos: PersonaxConjunto[] = [
    {
      idPersona: 1,
      idConjunto: 2
    },
    {
      idPersona: 2,
      idConjunto: 3
    },
    {
      idPersona: 3,
      idConjunto: 1
    }
  ]

  constructor(private conjuntosService : ConjuntosService, private personasService: PersonasService) { }

  getPersonasxconjuntos() {
    return this.personasxconjuntos;
  } // end Personasxconjuntos

  getConjuntos(personaId: number) {
    return this.conjuntos.push( this.conjuntosService.getConjunto( this.personasxconjuntos.find(personasxconjuntos => { return personasxconjuntos.idPersona == personaId }).idConjunto ) );
  } // end getConjunto

  getPersonas(conjuntoId: number) {
    return this.personas.push( this.personasService.getPersona( this.personasxconjuntos.find(personasxconjuntos => { return personasxconjuntos.idConjunto == conjuntoId }).idPersona));
  } // end getPersonas

  addConjunto() {
  } // end addConjunto

  deleteConjunto() {
  } // end deleteConjunto
}
