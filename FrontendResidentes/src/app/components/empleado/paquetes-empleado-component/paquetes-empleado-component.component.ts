import { Component, OnInit } from '@angular/core';
import { Apto } from 'src/app/Services/aptos/apto.model';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import { Paquete } from 'src/app/Services/paquetes/paquete.model';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';
import { AlertController, NavController } from '@ionic/angular';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { IPRESIDENTES, MONTHS } from 'src/app/constants';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-paquetes-empleado-component',
  templateUrl: './paquetes-empleado-component.component.html',
  styleUrls: ['./paquetes-empleado-component.component.scss'],
})
export class PaquetesEmpleadoComponent implements OnInit {

  paquetes : any;
  paquetesSer :any;
  aptos : any;
  aptoSeleccionado : number =0;
  length:number = -1;
  public conjuntoActivo:number;
  public aptoActivo:number;
  public paqueteView : string[] = []; 

  constructor(private navCtrl: NavController,private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService, public alertController: AlertController) { }

  ngOnInit() {
    this.length = -1;
  }

  async waitBD(time:number){
    await new Promise(resolve => setTimeout(resolve, time));
  }

  async ionViewWillEnter(){
    this.length = -1;
    this.aptoSeleccionado = 0;
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.servIngAptoService.getAptos(this.conjuntoActivo);
    await this.waitBD(800); 
    this.aptos = this.servIngAptoService.getApartamentos();
  } // end ionViewWillEnter

  listOpen(paquete:any){
    if(this.paqueteView[paquete.num - 1] == 'mostrar'){
      this.paqueteView[paquete.num - 1]='oculto';
    }else{
      this.paqueteView[paquete.num - 1]='mostrar';
    }
  }

  getPaqueteView(paquete:any){
    return this.paqueteView[paquete.num-1];
  }

  getLength(){
    return this.length;
  }

  async cargarAptos(selector:number){
    if(selector == 1)
      await this.waitBD(1000);
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoSeleccionado);
    await this.waitBD(800);
    this.paquetesSer = this.paquetesService.getPaquetes();
    var conteo = 0;
    for(let paquete of this.paquetesSer){
      var paqueteAux = {num:conteo+1, paquete:this.paquetesSer[conteo]};
      conteo += 1;
      this.paquetes.push(paqueteAux);
    }
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
    this.length = this.paquetes.length;
  }

  async optionsApto(){
    this.paquetes = [];
    this.paquetesSer = [];
    this.servIngAptoService.setIdApto(this.aptoSeleccionado);
    if(this.aptoSeleccionado != 0)
      this.cargarAptos(0);
  }

  botonNuevoPaquete(){
    this.aptoSeleccionado = 0;
    this.length = -1;
    this.navCtrl.navigateForward("/nuevo-paquete");
  }

  convertHour(hour: number):string{
    var minutes:number;
    var hours:number;
    minutes = Math.trunc(hour%100);
    hours = Math.trunc((hour/100)%100);
    if(hours > 11){
      hours -= 12;
      if(minutes > 9)
        return hours.toString() + ":" + minutes.toString() + " pm";
      else
        return hours.toString() + ":0" + minutes.toString() + " pm";
    }else{
      if(minutes > 9)
        return hours.toString() + ":" + minutes.toString() + " am";
      else
      return hours.toString() + ":0" + minutes.toString() + " am";
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

  async eliminarPaquete(paquete:any){
    this.presentAlertConfirm(paquete);
  }

  async presentAlertConfirm(paquete:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Está seguro que desea eliminar el paquete ' + paquete.num + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.paquetesService.elimnarPaquete(this.conjuntoActivo, this.servIngAptoService.getIdApto(), paquete.paquete.paquetePK.idPaqueete);
            this.paquetes = [];
            this.paquetesSer = [];
            this.cargarAptos(1);
          }
        }
      ]
    });

    await alert.present();
  } // end presentAlertConfirm

}
