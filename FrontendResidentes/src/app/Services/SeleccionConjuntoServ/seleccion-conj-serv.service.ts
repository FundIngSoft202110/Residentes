import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';





let conjuntos: any[] = [{
    id:1,
    Name: "Mazuren 22"

}, {
    id:2,
    Name: "Mazuren 13"

}, {
    id:3,
    Name: "Scala 23"

}, {
    id:4,
    Name: "Scala 25"

}  , {
    id:5,
    Name: "Persepolis"

}, {
    id:6,
    Name: "Hércules"
}, {
    id:7,
    Name: "Almeida",

}, {
    id:8,
    Name: "Quintas de la villa",

}, {
    id:9,
    Name: "Valencia",

}, {
    id:10,
    Name: "Valeriana",

}, {
    id:11,
    Name: "Junior",
}, {
    id:12,
    Name: "Batimóvil",
}];


@Injectable({
  providedIn: 'root'
})

export class selConjService {
    constructor(private http: HttpClient) { }
    conjunto : any;
    getConjuntos() {
        return conjuntos;
    }

    getConjuntosServ(id: number) {
        this.obtener(IPRESIDENTES + "consultas/Conjuntos/misnoconjuntos/" + id.toString() );
    }

    obtener(url: string) {
        this.getConju(url)
          .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.conjunto = respuesta;
          })
      }

      public getConju(url: string) {
        return this.http.get(url);
      }

      getConjuntosS(){
          return this.conjunto;
      }

      vinResCon(id : number, idPerActiva : number ){
        this.obtener(IPRESIDENTES + "consultas/Conjuntos/residenteConjunto/" + id.toString() +"/"+ idPerActiva.toString());
      }
}
