import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';
import { IPRESIDENTES } from 'src/app/constants';
import { AgregarEmpldService } from 'src/app/Services/agregar-empld/agregar-empld.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
})
export class AgregarEmpleadoPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = "";
  validation_messages = {
    usuario: [
      { type: "required", message: " El usuario es requerido" }
    ],
    oficio: [
      { type: "required", message: " El oficio es requerido" },
      { type: "pattern", message: "Solo letras son válidas" }
    ],
    imagen: [
      { type: "required", message: " La imagen es requerida" }
    ]
  };
  idAConj : any;
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder,
              private agEmpSer: AgregarEmpldService, private  conjServ: ConjuntosService) { }

  ngOnInit() {
    this.idAConj = this.conjServ.getConjuntoActivo();
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      oficio: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z]*$")
        ])
      ),
      imagen: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      )
    });
  }

  goBack(){
    this.navCtrl.navigateForward("/empleados");
  }

  rta : any;
  async loginUser(credentials) {
    this.agEmpSer.postNuevoEmpld(IPRESIDENTES + "consultas/Conjuntos/agregarEmpleadoConjunto/" + this.idAConj, credentials)
      .subscribe(rest => {
        console.log(rest);
        this.rta = rest;
        if(this.rta.respuesta = "Empleado asociado correctamente"){
          this.navCtrl.navigateForward("/empleados");
        }else{
          this.errorMessage = this.rta.respuesta;
        }
      })
    
  }
}
