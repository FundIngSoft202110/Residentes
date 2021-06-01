import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { aptosval } from './aptosval';

export interface AptoClave{
  contrasena: string;
  id:number;
  nombre:string;
}


@Injectable({
  providedIn: 'root'
})
export class CamcontraService {


  listconj :  aptosval[] =[
    {
      id: 1,
      nombre: "1-11",
      contrasena: "hola1"
    },
    {
      id: 2,
      nombre: "1-12",
      contrasena: "hola2"
    },
    {
      id: 3,
      nombre: "1-21",
      contrasena: "hola3"
    },
    {
      id: 4,
      nombre: "1-22",
      contrasena: "hola4"
    }
  ]
  
  conjuntosLec : AptoClave[];
  respuestas:any;
  constructor(private http: HttpClient) { }

  getConjuntos( numConjunto:number){
    this.obtener(IPRESIDENTES + "consultas/apartamentos/aptosNomId/" + numConjunto.toString() );
  }

  cambContra(id :number, cont: string){
    this.obtenerP(IPRESIDENTES + "consultas/apartamentos/UpdateCApto/"+id+"/"+cont );
  }

  obtenerP(url: string) {
    this.conjuntosLec = [];
    this.putConjj(url)
      .subscribe(respuesta => {
        this.respuestas = respuesta;
      })
  }

  obtener(url: string) {
    this.conjuntosLec = []; 
    this.getConjj(url)
      .subscribe(respuesta => {
        this.conjuntosLec = <AptoClave[]>respuesta;
      })
  }

  public putConjj(url: string) {
    return this.http.put(url,null);
  }

  public getConjj(url: string) {
    return this.http.get(url);
  }

  obtenerListaConju(){
    return this.listconj;
  }
  obtenerConjLec(){
    return this.conjuntosLec;
  }

  setCamAptoId(id:number , nom:string, cont: string){
    window.localStorage['aptoCamConId'] = id;
    window.localStorage['aptoCamConNom'] = nom;
    window.localStorage['aptoCamConContra'] = cont;
  }
  nombre: any;
  idApto: any;
  contApto: any;
  getNomApto(){
    this.nombre = (window.localStorage['aptoCamConNom'] || (-1).toString);
    if(this.nombre == '-1')
      return null;
    else
      return (this.nombre);
  }


  getContraApto(){
    this.contApto = (window.localStorage['aptoCamConContra'] || (-1).toString);
    if(this.contApto == '-1')
      return null;
    else
      return (this.contApto);
  }

  getAptoId(){
    this.idApto = Number(window.localStorage['aptoCamConId'] || -1);
    if(this.idApto == -1)
      return null;
    else
      return (this.idApto);
  }

}
