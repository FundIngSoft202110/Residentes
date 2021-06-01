import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AsambleaService, Asamblea } from 'src/app/Services/asambleas/asamblea.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';

@Component({
  selector: 'app-lista-asasamblea-admin',
  templateUrl: './lista-asasamblea-admin.component.html',
  styleUrls: ['./lista-asasamblea-admin.component.scss'],
})
export class ListaAsasambleaAdminComponent implements OnInit {

  asambleas = [];
  private idConjunto:number;

  constructor(private asambleaService: AsambleaService, private navCtrl: NavController, 
              private conjuntosService:ConjuntosService, public alertController: AlertController) { }

  ngOnInit() {
  }// end ngOnInit

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 600));
  }

  async ionViewWillEnter(){
    this.idConjunto = this.conjuntosService.getConjuntoActivo();
    this.asambleaService.cargarAsambleas(this.idConjunto);
    await this.waitBD();
    this.asambleas = this.asambleaService.getAsambleas();
    console.log("Asambleas: ", this.asambleas);
  } // end ionViewWillEnter

  goRoute(asamblea:Asamblea){
     
      console.log("Asamblea = ", asamblea.asambleaPK.idAsamblea, " Estado = ", asamblea.estado);
      this.asambleaService.setAsambleaAbierta(asamblea.asambleaPK.idAsamblea);
      this.asambleaService.setAsambleaEstado(asamblea.estado);
      this.navCtrl.navigateForward("/asamblea-admin");
    
    
  }

  async presentAlertConfirmAsamblea() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Información',
      message: 'No es posible acceder a asambleas programadas',
      buttons: [
        {
          text: 'Aceptar',
          cssClass: 'aceptar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  } // end presentAlertConfirm

  getAsambleaFecha(asamblea:Asamblea){
    return this.conjuntosService.convertDate(asamblea.fecha);
  } // end getAsambleaFecha

  getAsambleaHora(asamblea:Asamblea){
    return this.conjuntosService.convertHour(asamblea.hora);
  } // end getAsambleaFecha

  getAsambleaEstado(asamblea:Asamblea){
    if(asamblea.estado == 'F')
      return "Finalizada"
    else if(asamblea.estado == 'P')
      return "Programada"
    else if(asamblea.estado == 'A')
      return "Activa"
  } // end getAsambleaEstado

  botonNuevaAsamblea(){
    this.navCtrl.navigateForward("/nueva-asamblea");
  }

}
