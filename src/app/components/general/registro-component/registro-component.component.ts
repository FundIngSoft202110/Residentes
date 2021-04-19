
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxFormComponent } from 'devextreme-angular';
import { AppComponent } from 'src/app/app.component';
import notify from 'devextreme/ui/notify';
import { Customer, RegistroServicioService } from '../../../Services/registro-servicio.service';


const sendRequest = function(value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

@Component({
    selector: 'app-registro-component',
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {


	@ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };
    customer: Customer;
    maxDate: Date = new Date();
    cityPattern = "^[^0-9]+$";
    namePattern: any = /^[^0-9]+$/;
    phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
    phoneRules: any = {
        X: /[02-9]/
    }
    buttonOptions: any = {
        text: "Register",
        type: "success",
        useSubmitBehavior: true
    }
    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
    checkComparison() {
        return true;
    }
    constructor(service: RegistroServicioService) {
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.customer = service.getCustomer();
    }
    asyncValidation(params) {
        return sendRequest(params.value);
    }
    onFormSubmit = function(e) {
        notify({
            message: "You have submitted the form",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    }

    ngOnInit() {

     }

	
}



