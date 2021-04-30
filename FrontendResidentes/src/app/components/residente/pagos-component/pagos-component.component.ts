import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-pagos-component',
  templateUrl: './pagos-component.component.html',
  styleUrls: ['./pagos-component.component.scss'],
})
export class PagosComponent implements OnInit {

  constructor(private conjuntosService: ConjuntosService, private inAppBrowser: InAppBrowser) { }

  ngOnInit() {}

  getUrl(){
    return this.conjuntosService.getConjunto(this.getConjuto()).linkDePago;
  }

  openUrl(){
    this.inAppBrowser.create(this.getUrl(),'_self');
  }

  getConjuto(){
    return 1;
  }

  getPrecio(){
    return this.conjuntosService.getConjunto(this.getConjuto()).precioAdmin;
  }

}
