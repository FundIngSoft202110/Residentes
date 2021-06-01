import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import notify from 'devextreme/ui/notify';
import {  AgregarConjuntoService } from '../../../Services/agregar-conjunto/agregar-conjunto.service';
import { DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFormComponent } from 'devextreme-angular';
import { conjuntodts } from 'src/app/Services/agregar-conjunto/conjuntodts';

  const sendRequest = function(value) {
    const validNombe = "Manzanares";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value != validNombe);
        }, 1000);
    });    
}

const sendRequestDirect = function(value) {
  const validDire = "Carrera 7 #2";
  return new Promise((resolve) => {
      setTimeout(function() {
          resolve(value != validDire);
      }, 1000);
  });    
}



@Component({
    selector: 'app-agregar-conjunto-component',
    providers: [conjuntodts],
    templateUrl: './agregar-conjunto-component.component.html',
    styleUrls: ['./agregar-conjunto-component.component.scss'],
})


export class AgregarConjuntoComponent implements OnInit {
    posi= "top";

  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  nuevoConjunto:conjuntodts = new conjuntodts() ;
  conjunto: any;
  
  buttonOptions: any = {
      text: "Agregar",
      type: "success",
      useSubmitBehavior: true

  }
  
  checkComparison() {
      return true;
  }

  phoneRules: any = {
    X: /[02-9]/
  }

  constructor(private router: Router ,service: AgregarConjuntoService) {
      this.conjunto = service.getConjunto();
  }

  asyncValidation(params) {
    return sendRequest(params.value);
  }
  
  asyncValidationDirec(params) {
      return sendRequestDirect(params.value);
  }
  onFormSubmit = function(e) {
    notify({
        message: "Conjunto agregado",
        position: {
            my: "center top",
            at: "center top"
        }
    }, "success", 3000);
    
    e.preventDefault();
    console.log(this.nuevoConjunto, "holaa ");

   // this.router.navigateByUrl("/netflix");

  }
  mandarConjunto(){
    console.log(this.nuevoConjunto, "holaa ");

   // this.router.navigateByUrl("/netflix");
  }
    ngOnInit() {

     }

     finish(){
      // this.storage.set('isIntroShowed',true );
       
       this.router.navigateByUrl("/seleccion-conjunto");
     }
}

