import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';

@Component({
  selector: 'app-pagos-component',
  templateUrl: './pagos-component.component.html',
  styleUrls: ['./pagos-component.component.scss'],
})
export class PagosComponent implements OnInit {

  public conjuntoPago:any;
  public conjuntoActivo:number;
  public aptoActivo:number;
  public urlPago:string = "";
  public precioAdmin:number = 0;
  
  constructor(private conjuntosService: ConjuntosService, private inAppBrowser: InAppBrowser, private servIngAptoService: ServIngAptoService) { }

  ngOnInit(){
  } 

  async ionViewWillEnter(){
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.cargarDatosAdmin();
  }

  async cargarDatosAdmin(){
      this.conjuntosService.getPagoAdmin(this.conjuntoActivo, this.aptoActivo);
      await this.waitBD(); 
      this.conjuntoPago = this.conjuntosService.getConjuntoPago();
      console.log("CONJUNTO PAGO: ", this.conjuntoPago);
      console.log("CONJUNTO PAGO LIN: ", this.conjuntoPago.linkDePago);
      this.urlPago = "http://" + this.conjuntoPago.linkDePago;
      this.precioAdmin = this.conjuntoPago.precioAdmin;
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  openUrl(){
    this.inAppBrowser.create(this.urlPago,'_self');
    this.conjuntosService.pagarAdmin(this.conjuntoActivo, this.aptoActivo);
  }

  getPrecio(){
    return  this.precioAdmin;
  }

}
