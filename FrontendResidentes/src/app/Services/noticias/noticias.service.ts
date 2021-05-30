import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias:any;
  private aptoNoti:any;
  private respuesta:any;
  constructor(private http: HttpClient) { }

  public getNoticiasUrl(url: string) {
    return this.http.get(url);
  } // end getPaquetesUrl

  public postNoticiasUrl(url: string, body:any) {
    return this.http.post(url,body);
  } // end postPaquetesUrl

  public deleteNoticiasUrl(url: string) {
    return this.http.delete(url);
  } // end deletePaquetesUrl

  async nuevaNoticia(noticia:Noticia){
    this.postNoticiasUrl(IPRESIDENTES + "consultas/noticias/nuevaNoticia", noticia)
    .subscribe(respuesta =>{
      console.log("Respuesta: ", respuesta);
      this.respuesta = respuesta;
    })
  } // end nuevaNoticia

  async cargarNoticias(numConjunto: number) {
    this.getNoticiasUrl(IPRESIDENTES + "consultas/noticias/"+numConjunto.toString())
      .subscribe(respuesta => {
        console.log("CARGUE NOTICIAS");
        this.noticias = respuesta;
      })
  } // end cargarNoticias

  async elimnarNoticia(numConjunto: number, idNoticia: number) {
    this.deleteNoticiasUrl(IPRESIDENTES + "consultas/noticias/eliminarNoticia/"+numConjunto.toString()+"/"+idNoticia.toString())
      .subscribe(respuesta => {
        console.log("Respuesta: ", respuesta);
        this.respuesta = respuesta;
      })
  } // end elimnarNoticia

  async cargarAptoNoticia(numConjunto: number, numApto:number) {
    this.getNoticiasUrl(IPRESIDENTES + "consultas/apartamentos/aptoNoticia/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.aptoNoti = respuesta;
      })
  } // end cargarAptoNoticia

  getAptoNoti():string{
    return this.aptoNoti.respuesta;
  } // end getAptoNoti
  
  getNoticias() {
    return this.noticias;
  } // end getNoticias

  getRespuesta(){
    return this.respuesta;
  } // end getRespuesta

} // end NoticiasService
