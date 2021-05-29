import { Component, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
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

  constructor(private personasService:PersonasService, private noticiasService: NoticiasService, private conjuntosService: ConjuntosService) { }

  ngOnInit() {} // end ngOnInit

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  }


  async ionViewWillEnter(){
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
  }

  publicarNoticia(){
    this.mostrar = 0;
    this.hoja.innerHTML = "#content-div {height: 20%;}";
    document.body.appendChild(this.hoja);
  }

} // end NoticiasComponent
