import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class QuejasAdminService {
  quejas2 = [
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
  constructor(private http: HttpClient) { }

  quejas : any;
  obtener(url: string) {
    console.log("MUeree obtener");
    this.getQuejasAdmin(url)
      .subscribe(respuesta => {
        console.log("subscirbe ", respuesta);
        this.quejas = respuesta;
      })
  }
  getQuejas(idConjunto : number){
    this.obtener(IPRESIDENTES + "consultas/quejas/quejasConjunto/" + idConjunto.toString() );
  }

  public getQuejasAdmin(url: string) {
    return this.http.get(url);
  }

  getQujeasList(){
    return this.quejas;
  }
}
