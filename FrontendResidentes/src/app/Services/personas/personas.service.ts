import { Injectable } from '@angular/core';
import { AuthenticateServiceService } from '../servIngre/authenticate-service.service';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {

  private personas: Persona[] = [
    {
      id: 1,
      nombre: "Maria",
      apellido: "Rodriguez",
      usuario: "ma.nino",
      correo: "ma.nino@javeriana.edu.co",
      clave: "Hola1234",
      numCelular: 3108291923,
      rolConjunto: "Administrador",
      oficio: null,
      foto: null
    },
    {
      id: 2,
      nombre: "Santiago",
      apellido: "Quintana",
      usuario: "s.qintana",
      correo: "s.qintana@javeriana.edu.co",
      clave: "Chao1234",
      numCelular: 3143231923,
      rolConjunto: "Residente",
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
      rolConjunto: "Residente",
      oficio: null,
      foto: null
    },
    {
      id: 4,
      nombre: "Zlatan",
      apellido: "Muñoz",
      usuario: "zlatan.m",
      correo: "m@hotmail.com",
      clave: "12345678",
      numCelular: 3143231643,
      rolConjunto: "Administrador",
      oficio: null,
      foto: null
    },
    {
      id: 5,
      nombre: "Jesus",
      apellido: "Palacios",
      usuario: "j.palacios",
      correo: "j@gmail.com",
      clave: "000111",
      numCelular: 3143231876,
      rolConjunto: "Empleado",
      oficio: null,
      foto: null
    }
  ]

  private personaActiva: number;
  constructor(private authenticateServiceService: AuthenticateServiceService) { }

  ngInit() { }

  aux: any;
  setPersonaActiva(idPersona: number) {
    window.localStorage['personaActiva'] = idPersona.toString();
    this.aux = this.getRolP(idPersona);
    console.log("Jjdjd: ",this.aux);
    this.setRolPersonaActiva(this.aux);
  }// end setPersonaActiva

  getRolP(idPersona: number) {
    for (let pers of this.authenticateServiceService.getP()) {
      if (idPersona == pers.idPersona)
        return pers.rolConjunto;
    }
  }// end getROlP


  setRolPersonaActiva(rolP: String) {
    console.log("rolP in Persona: ", rolP);
    if (rolP == "Empleado"){
      console.log("ENTREEE EMPLEADO");
      window.localStorage['rolPersonaActiva'] = "EMPLEADO";
    }
    if (rolP == "Administrador"){
      console.log("ENTREEE ADMIN");
      window.localStorage['rolPersonaActiva'] = "ADMIN";
    }
    if (rolP == "Residente" || rolP == "RESIDENTE"){
      console.log("ENTREEE RESIDENTE");
        window.localStorage['rolPersonaActiva'] = "RESIDENTE";
      }
  }

  getIdPersona(corr: String) {
    let cont = 0;
    for (let p of this.authenticateServiceService.getP()) {
      if (p.correo == corr) {
        return p.idPersona;
      }
      cont++;
    }
  }

  getPersonaActivaAux() {
    this.personaActiva = Number(window.localStorage['personaActiva'] || -1);
    if (this.personaActiva == -1)
      return null;
    else {
      return this.getPersona(this.personaActiva);
    }

  }
  rolAux: any;
  getPersonaActiva() {
    this.rolAux = (window.localStorage['rolPersonaActiva'] || (-1).toString());
    if (this.rolAux == -1)
      return null;
    else
      return this.rolAux;
  }// getPersonaActiva


  getPersonaID() {
    this.personaActiva = Number(window.localStorage['personaActiva'] || -1);
    if (this.personaActiva == -1)
      return null;
    else
      return this.personaActiva;
  }

  getUserActivo() {
    return this.getPersonaActiva();
  }

  getPersonas() {
    return this.personas;
  } // end getPersonas

  getPersona(personaId: number) {
    return this.personas.find(persona => { return persona.id == personaId });
  }// end getPersona

  addPersona(nombre: string, apellido: string, usuario: string, correo: string, clave: string, numCelular: number, rolConjunto: string) {
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

  deletePersona(personaId: number) {
    this.personas.splice(personaId, 1);
  } // end deletePersona
}
