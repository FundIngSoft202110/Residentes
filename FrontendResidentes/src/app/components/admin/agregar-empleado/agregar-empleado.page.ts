import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.page.html',
  styleUrls: ['./agregar-empleado.page.scss'],
})
export class AgregarEmpleadoPage implements OnInit {
  loginForm: FormGroup;
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
  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) { }

  ngOnInit() {
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
}
