import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuejasAdminService {
  quejas = [
    {
      Nombre: "Quintana",
      Contenido: "Mucho ruido"
    },
    {
      Nombre: "Quintana",
      Contenido: "Cansado del de al lado"
    },
    {
      Nombre: "Anonimo",
      Contenido: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300."
    },
    {
      Nombre: "Quintana",
      Contenido: "No más vida"
    },
    {
      Nombre: "Quintana",
      Contenido: "Mucho ruido"
    },
    {
      Nombre: "Quintana",
      Contenido: "Cansado del de al lado"
    },
    {
      Nombre: "Anonimo",
      Contenido: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300."
    },
    {
      Nombre: "Quintana",
      Contenido: "No más vida"
    }
  ]
  constructor() { }

  getQuejas(){
    return this.quejas;
  }
}
