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
  paquetesSer :any;
  aptos : any;
  aptoSeleccionado : number =0;
  public conjuntoActivo:number;
  public aptoActivo:number;
  private contInicial:number = 0;
  public paqueteView : string[] = []; 

  constructor(private navCtrl: NavController,private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 400));
  }

  async ionViewWillEnter(){
    this.aptoSeleccionado = 0;
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.servIngAptoService.getAptos(this.conjuntoActivo);
    await this.waitBD(); 
    this.aptos = this.servIngAptoService.getApartamentos();
    console.log("APTOSSSSSSS: ", this.aptos);
  } // end ionViewWillEnter

  eliminarPaquete(paquete:Paquete){
    
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

  async optionsApto(){
    this.paquetes = [];
    this.paquetesSer = [];
    this.servIngAptoService.setIdApto(this.aptoSeleccionado);
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoSeleccionado);
    await this.waitBD();
    this.paquetesSer = this.paquetesService.getPaquetes();
    console.log("PAQUETESSSSS: ", this.paquetesSer);
    var conteo = 0;
    for(let paquete of this.paquetesSer){
      var paqueteAux = {num:conteo+1, paquete:this.paquetesSer[conteo]};
      conteo += 1;
      this.paquetes.push(paqueteAux);
    }
    console.log("CONTEOOOOO: ", this.paquetes);
  }

  botonNuevoPaquete(){
    this.aptoSeleccionado = 0;
    this.navCtrl.navigateForward("/nuevo-paquete");
  }

}
