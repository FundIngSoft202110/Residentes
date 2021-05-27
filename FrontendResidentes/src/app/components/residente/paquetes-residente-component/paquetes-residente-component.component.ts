import { Component, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-paquetes-residente-component',
  templateUrl: './paquetes-residente-component.component.html',
  styleUrls: ['./paquetes-residente-component.component.scss'],
})
export class PaquetesResidenteComponent implements OnInit {

  public paquetes :any;
  public paqueteView : string[] = []; 
  public conjuntoActivo:number;
  public aptoActivo:number;

  constructor(private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoActivo);
    await this.waitBD(); 
    this.paquetes = this.paquetesService.getPaquetes();
    console.log("PAQUETESSSSSS : ", this.paquetes);
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
  } // end ionViewWillEnter

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  listOpen(paquete:any){
    if(this.paqueteView[paquete.paquetePK.idPaqueete - 1] == 'mostrar'){
      this.paqueteView[paquete.paquetePK.idPaqueete - 1]='oculto';
    }else{
      this.paqueteView[paquete.paquetePK.idPaqueete - 1]='mostrar';
    }
  }

  getPaqueteView(paquete:any){
    return this.paqueteView[paquete.paquetePK.idPaqueete-1];
  }

  convertHour(hour: number):string{
    var minutes:number;
    var hours:number;
    minutes = Math.trunc(hour%100);
    hours = Math.trunc((hour/100)%100);
    if(hours > 11){
      hours -= 12;
      return hours.toString() + ":" + minutes.toString() + " pm";
    }else{
      return hours.toString() + ":" + minutes.toString() + " am";
    } // end if
  } // end convertHour

  convertDate(date: number):string{
    var year:number;
    var month:number;
    var day:number;
    year = Math.trunc(date%10000);
    month = Math.trunc((date/10000)%100);
    day = Math.trunc((date/1000000)%100);
    return MONTHS[Math.trunc(month)-1] + " " + day.toString() + " " + year.toString();
  } // end convertDay

} // end PaquetesResidenteComponent
