import { Component, OnInit } from '@angular/core';
import { Apto } from 'src/app/Services/aptos/apto.model';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import { Paquete } from 'src/app/Services/paquetes/paquete.model';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';
import { NavController } from '@ionic/angular';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';

@Component({
  selector: 'app-paquetes-empleado-component',
  templateUrl: './paquetes-empleado-component.component.html',
  styleUrls: ['./paquetes-empleado-component.component.scss'],
})
export class PaquetesEmpleadoComponent implements OnInit {

  paquetes : any;
  aptos : any;
  aptoSeleccionado : number =0;
  public conjuntoActivo:number;
  public aptoActivo:number;

  constructor(private navCtrl: NavController,private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 400));
  }

  async ionViewWillEnter(){
    this.aptoSeleccionado = 0;
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.servIngAptoService.getAptos(this.conjuntoActivo);
    await this.waitBD(); 
    this.aptos = this.servIngAptoService.getApartamentos();
    console.log("APTOSSSSSSS: ", this.aptos);
  } // end ionViewWillEnter

  eliminarPaquete(paquete:Paquete){
    
  }

  async optionsApto(){ //here item is an object 
    //this.aptosService.setAptoActivo(this.aptoSeleccionado);
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoSeleccionado);
    await this.waitBD();
    this.paquetes = this.paquetesService.getPaquetes();
  }

  botonNuevoPaquete(){
    this.aptoSeleccionado = 0;
    this.navCtrl.navigateForward("/nuevo-paquete");
  }

}
