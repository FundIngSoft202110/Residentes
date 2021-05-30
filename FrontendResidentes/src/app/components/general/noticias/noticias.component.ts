import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { Noticia } from 'src/app/Services/noticias/noticia.model';
import { NoticiaPK } from 'src/app/Services/noticias/noticiaPK.model';
import { NoticiasService } from 'src/app/Services/noticias/noticias.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  public noticias:any;
  private idConjutno:number;
  private mostrar:number = 0;
  hoja = document.createElement('style');
  descripcion : string ="";
  noticiaNueva:Noticia = new Noticia();
  public fecha:any;
  public mes:number = 0;
  public anio:number = 0;
  public dia:number = 0;

  constructor(private personasService:PersonasService, private noticiasService: NoticiasService, private conjuntosService: ConjuntosService) { }

  ngOnInit() {
  } // end ngOnInit

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  }


  async ionViewWillEnter(){
    this.conjuntosService.cargarFechaActual();
    await this.waitBD();
    this.fecha = this.conjuntosService.getFechaActual();
    this.mes = this.fecha.mes;
    this.dia = this.fecha.dia;
    this.anio = this.fecha.anio;
    this.hoja.innerHTML = "#content-div {height: 80%;}";
    document.body.appendChild(this.hoja);
    this.idConjutno = this.conjuntosService.getConjuntoActivo();
    this.noticiasService.cargarNoticias(this.idConjutno);
    await this.waitBD(); 
    this.noticias = this.noticiasService.getNoticias();
    console.log("Noticiass: ", this.noticias);
  } // end ionViewWillEnter

  getUser(){
    return this.personasService.getUserActivo();
  } // end getUser

  getFecha(){
    return MONTHS[this.mes-1] + " " + this.dia.toString() + " " + this.anio.toString();
  }

  convertDate(date: number):string{
    var year:number;
    var month:number;
    var day:number;
    year = Math.trunc(date%10000);
    month = Math.trunc((date/10000)%100);
    day = Math.trunc((date/1000000)%100);
    return MONTHS[Math.trunc(month)-1] + " " + day.toString() + " " + year.toString();
  } // end convertDate

  click(){
    this.mostrar = 1;
    this.hoja.innerHTML = "#content-div {height: 50%;}";
    document.body.appendChild(this.hoja);
    console.log("MUereeee");
  }

  getMostrar(){
    return this.mostrar;
  }

  cancelarNoticia(){
    this.mostrar = 0;
    this.hoja.innerHTML = "#content-div {height:20%;}";
    document.body.appendChild(this.hoja);
    this.descripcion = "";
  }

  publicarNoticia(){
    this.mostrar = 0;
    this.hoja.innerHTML = "#content-div {height: 20%;}";
    document.body.appendChild(this.hoja);
    if((this.descripcion != "")){
      this.noticiaNueva.noticiaPK = new NoticiaPK();
      this.noticiaNueva.noticiaPK.conjuntoIdConjunto = this.conjuntosService.getConjuntoActivo();
      this.noticiaNueva.noticiaPK.idNoticia;
      this.noticiaNueva.titulo;
      this.noticiaNueva.fecha = this.dia * 1000000 + this.mes * 10000 + this.anio;
      this.noticiaNueva.descripcion = this.descripcion;
      this.noticiaNueva.imagen;
      this.noticiasService.nuevaNoticia(this.noticiaNueva);
      this.descripcion = "";
    }//end
  }// end publicarNoticia

} // end NoticiasComponent
