import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import notify from 'devextreme/ui/notify';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { IPRESIDENTESA } from 'src/app/constants';

@Component({
  selector: 'app-manual-admin-component',
  templateUrl: './manual-admin-component.component.html',
  styleUrls: ['./manual-admin-component.component.scss'],
})
export class ManualAdminComponent implements OnInit {
 step: any;
 url = IPRESIDENTESA+"/consultas/Conjuntos/vermanual/2/manual/manual2.pdf";

  @ViewChild('form') form: NgForm;

  updateClick() {
      notify('El manual a sido actualizado');
      
  }
  constructor( private http: HttpClient,private inAppBrowser: InAppBrowser) { 
    this.step=0;
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit() {}
  vermanual(){
    this.inAppBrowser.create(this.url,/*'_self'*/);
  }
  actualizarmanual(){
    return this.step=1;
  }
  guardarmanual(){
    notify("El manual fue actualizado correctamente",'sucess');
    return this.step=0;
  }
  
  
}
