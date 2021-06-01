import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { nomdir } from './nomdir';

@Injectable({
  providedIn: 'root'
})
export class NuevoconjuservService {
  nomConj :  nomdir[] =[
    {
      nombre: "arces",
      direccion: "carrera 113"
    },
    {
      nombre: "manzanares",
      direccion: "carrera 45"
    },
    {
      nombre: "chocolate",
      direccion: "carrera 66"
    }
  ]
  conjuntosLec : any;
  respuesta:any;
  constructor(private http: HttpClient) { }

  getConjuntos( ){
    this.obtener(IPRESIDENTES + "consultas/Conjuntos/nombredir/" );
  }

  obtener(url: string) {
    this.conjuntosLec = [];
    this.getConjj(url)
      .subscribe(respuesta => {
        this.conjuntosLec = respuesta;
      })
  }

  
  public getConjj(url: string) {
    return this.http.get(url);
  }

  obtenerConjuntos(){
    return this.nomConj;
  }
  obtenerConjLec(){
    return this.conjuntosLec;
  }

  postConjuntoS(url: string, body:any) {
    return this.http.post(url,body);
  }

  enviarConj(body:any, id : number){
    this.postConjuntoS(IPRESIDENTES + "consultas/Conjuntos/NuevoConjunto/"+id.toString() ,body)
      .subscribe(respuesta => {
        this.respuesta = respuesta;
      })
  }

  getRespuesta(){
    return this.respuesta;
  }

}
