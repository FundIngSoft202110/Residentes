import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MONTHS } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { Paquete } from 'src/app/Services/paquetes/paquete.model';
import { PaquetePK } from 'src/app/Services/paquetes/paquetePK.model';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-nuevo-paquete',
  templateUrl: './nuevo-paquete.component.html',
  styleUrls: ['./nuevo-paquete.component.scss'],
})
export class NuevoPaqueteComponent implements OnInit {
  
  tamanoSeleccionado : string ="";
  remi : string ="";
  mensaje: string;
  public fecha:any;
  public mes:number = 0;
  public anio:number = 0;
  public dia:number = 0;
  public hora:number = 0;
  public horaAux:number = 0;
  public minuto:number = 0;
  public horaCompleta:string = "";
  paqueteNuevo:Paquete = new Paquete();

  constructor(private navCtrl: NavController, private paquetesService : PaquetesService, private servIngAptoService: ServIngAptoService,  private conjuntosService: ConjuntosService) {}

  ngOnInit(){}

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 600));
  } // end waitBD

  async ionViewWillEnter(){
    this.conjuntosService.cargarFechaActual();
    await this.waitBD();
    this.fecha = this.conjuntosService.getFechaActual();
    this.mes = this.fecha.mes;
    this.dia = this.fecha.dia;
    this.anio = this.fecha.anio;
    this.hora = this.fecha.hora;
    this.minuto = this.fecha.minutos;
    if(this.hora > 11){
      this.horaAux = this.hora;
      this.horaAux -= 12;
      if(this.minuto > 9)
        this.horaCompleta = this.horaAux.toString() + ":" + this.minuto.toString() + " pm";
      else
        this.horaCompleta = this.horaAux.toString() + ":0" + this.minuto.toString() + " pm";
    }else{
      if(this.minuto > 9)
        this.horaCompleta = this.hora.toString() + ":" + this.minuto.toString() + " am";
      else
        this.horaCompleta = this.hora.toString() + ":0" + this.minuto.toString() + " am";
    } // end if
  } // end ionViewWillEnter

  getFecha(){
    return MONTHS[this.mes-1] + " " + this.dia.toString() + " " + this.anio.toString();
  }

  getHora(){
    return this.horaCompleta;
  } // end getHora

  getColorReportar(){
    if((this.tamanoSeleccionado == "") || (this.remi == "")){
      return "deshabilitado";
    }
    else{
      return "residente";
    }
  }// end getColorReportar

  botonReportar() {
    if((this.tamanoSeleccionado != "") && (this.remi != "")){
      this.paqueteNuevo.paquetePK = new PaquetePK();
      this.paqueteNuevo.paquetePK.apartamentoConjuntoIdConjunto = this.conjuntosService.getConjuntoActivo();
      this.paqueteNuevo.paquetePK.apartamentoIdApartamento = this.servIngAptoService.getIdApto();
      this.paqueteNuevo.tamano = this.tamanoSeleccionado;
      this.paqueteNuevo.fecha = this.dia * 1000000 + this.mes * 10000 + this.anio;
      this.paqueteNuevo.hora = this.hora*100 + this.minuto;
      this.paqueteNuevo.remitente = this.remi;
      this.paquetesService.nuevoPaquete(this.paqueteNuevo);
      this.tamanoSeleccionado = "";
      this.remi = "";
      this.navCtrl.navigateForward("/paquetes-empleado");
    } // end if
  }// end botonReportar
} // end NuevoPaqueteComponent