import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {

  private personas:Persona[] = [ 
    {
      id: 1,
      nombre: "Maria",
      apellido: "Rodriguez",
      usuario: "ma.nino",
      correo: "ma.nino@javeriana.edu.co",
      clave: "Hola1234",
      numCelular: 3108291923,
      rolConjunto: "ADMIN",
      oficio: null,
      foto: null
    },
    {
      id: 2,
      nombre: "Santiago",
      apellido: "Quintana",
      usuario: "s.qintana",
      correo: "s.qintana@javeriana.edu.co",
      clave: "Hola1234",
      numCelular: 3143231923,
      rolConjunto: "RESIDENTE",
      oficio: null,
      foto: null
    },
    {
      id: 3,
      nombre: "Juan",
      apellido: "Barreto",
      usuario: "juan_barreto",
      correo: "juan_barreto@javeriana.edu.co",
      clave: "Hola1234",
      numCelular: 3138290923,
      rolConjunto: "RESIDENTE",
      oficio: null,
      foto: null
    }
  ]

  private personaActiva:number;

  constructor() {}

  ngInit(){
  }

  setPersonaActiva(idPersona:number){
    window.localStorage['personaActiva'] = idPersona.toString();
  }// setPersonaActiva

  getPersonaActiva(){
    this.personaActiva = Number(window.localStorage['personaActiva'] || -1);
    return this.getPersona(this.personaActiva);
  }

  getPersonas() {
    return this.personas;
  } // end getPersonas

  getPersona(personaId:number) { 
    return this.personas.find(persona => { return persona.id == personaId });
  }// end getPersona

  addPersona(nombre:string, apellido:string, usuario:string, correo:string, clave:string, numCelular: number, rolConjunto:string){ 
    this.personas.push({
      id: this.personas.length + 1,
      nombre,
      apellido,
      usuario,
      correo,
      clave,
      numCelular,
      rolConjunto,
      oficio: null,
      foto: null
    });
  } // end addPersona
  
  deletePersona(personaId:number) {
    this.personas.splice(personaId,1);
  } // end deletePersona
}
