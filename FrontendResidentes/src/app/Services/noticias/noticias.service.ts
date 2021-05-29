import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private noticias:any;
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
    })
  } // end nuevaNoticia

  async cargarNoticias(numConjunto: number) {
    this.getNoticiasUrl(IPRESIDENTES + "consultas/noticias/"+numConjunto.toString())
      .subscribe(respuesta => {
        this.noticias = respuesta;
      })
  } // end cargarNoticias

  async elimnarNoticia(numConjunto: number, idNoticia: number) {
    this.deleteNoticiasUrl(IPRESIDENTES + "consultas/noticias/eliminarNoticia/"+numConjunto.toString()+"/"+idNoticia.toString())
      .subscribe(respuesta => {
        console.log("Respuesta: ", respuesta);
      })
  } // end elimnarNoticia
  
  getNoticias() {
    return this.noticias;
  } // end getNoticias
} // end NoticiasService
