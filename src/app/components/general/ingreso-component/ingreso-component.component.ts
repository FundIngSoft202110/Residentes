
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Usuario, IngresoService } from '../../../Services/IngresoServ/ingreso.service';
import { DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxButtonModule,
  DxFormModule,
  DxAutocompleteModule,
  DxFormComponent } from 'devextreme-angular';
import { NavController } from '@ionic/angular';


const sendRequest = function(value) {
  const validEmail = "m@hotmail.com";
  return new Promise((resolve) => {
      setTimeout(function() {
          resolve(value === validEmail);
      }, 1000);
  });    
}

const sendRequestContra = function(value) {
  const validContra = "12345678";
  return new Promise((resolve) => {
      setTimeout(function() {
          resolve(value === validContra);
      }, 1000);
  });    
}


@Component({
  selector: 'app-ingreso-component',
  templateUrl: './ingreso-component.component.html',
  styleUrls: ['./ingreso-component.component.scss'],
})
export class IngresoComponent implements OnInit {

  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };
     
    usuario: Usuario;
     
     
    buttonOptions: any = {
        text: "Ingresar",
        type: "success",
        useSubmitBehavior: true
    }
    
    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
     
    checkComparison() {
        return true;
    }
     
    constructor(private navCtrl: NavController, private router: Router, service: IngresoService) {
        this.usuario = service.getUsuario();
    }
     
    asyncValidation(params) {
        return sendRequest(params.value);
    }
     
    asyncValidationContra(params) {
        return sendRequestContra(params.value);
    }
     
     
    
    onFormSubmit = function(e) {
        notify({
            message: "Usted ha ingrsado a Residentes",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
        this.navCtrl.navigateForward("/netflix");
    }


  finish(){
  
      this.navCtrl.navigateForward("/netflix");
  }

  goToRegister() {
      this.navCtrl.navigateForward("/registro");
  }
  ngOnInit() {}

}
