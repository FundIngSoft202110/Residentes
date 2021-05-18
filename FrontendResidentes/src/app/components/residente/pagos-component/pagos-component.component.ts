import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pagos-component',
  templateUrl: './pagos-component.component.html',
  styleUrls: ['./pagos-component.component.scss'],
})
export class PagosComponent implements OnInit {

  public conjuntoPago:any;
  public conjuntoActivo:number;
  public urlPago:string = "";
  public precioAdmin:number = 0;
  
  constructor(private conjuntosService: ConjuntosService, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.cargarDatosAdmin(this.conjuntoActivo);
  }

  async cargarDatosAdmin(conjuntoActivoP:number){
    if(this.conjuntoActivo != -1){
      this.conjuntosService.getPagoAdmin(this.conjuntoActivo);
      await new Promise(resolve => setTimeout(resolve, 250));
      this.conjuntoPago = this.conjuntosService.getConjuntoPago();
      console.log("CONJUNTO PAGO: ", this.conjuntoPago);
      console.log("CONJUNTO PAGO LIN: ", this.conjuntoPago.linkDePago);
      this.urlPago = "http://" + this.conjuntoPago.linkDePago;
      this.precioAdmin = this.conjuntoPago.precioAdmin;
    }
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  openUrl(){
    this.waitBD();  
    this.inAppBrowser.create(this.urlPago,'_self');
  }

  getPrecio(){
    this.waitBD();
    return  this.precioAdmin;
  }

}
