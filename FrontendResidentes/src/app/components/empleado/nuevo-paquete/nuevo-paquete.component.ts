import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-paquete',
  templateUrl: './nuevo-paquete.component.html',
  styleUrls: ['./nuevo-paquete.component.scss'],
})
export class NuevoPaqueteComponent implements OnInit {

  tamanoSeleccionado : string ="";
  remi : string ="";
  mensaje: string;

  /* loginForm: FormGroup;
  validation_messages = {
    tamano: [
      { type: "required", message: "No se ha seleccionado el tamaño" },
    ],
    remitente: [
      { type: "required", message: "No se ha digitado el remitente" },
    ]
  }; */
  constructor(private navCtrl: NavController,private formBuilder: FormBuilder) { /* this.loginForm = this.formBuilder.group({ */
 /*    tamano: new FormControl(
      "",
      Validators.compose([
        Validators.required
      ])
    ),
    remitente: new FormControl(
      "",
      Validators.compose([
        Validators.required
      ])
    )
  }); */
}

  ngOnInit() {}

  optionsTamano(){ //here item is an object 
    console.log(this.tamanoSeleccionado);
  }

  Remitente(){
    console.log(this.remi);
  }

  getColorReportar(){
    if((this.tamanoSeleccionado == "") || (this.remi == "")){
      return "deshabilitado";
    }
    else{
      return "residente";
    }
  }// end getColorReportar

  botonReportar() {
    if((this.tamanoSeleccionado == "") || (this.remi == "")){
    }else{
      this.tamanoSeleccionado = "";
      this.remi = "";
      this.navCtrl.navigateForward("/paquetes-empleado");
    }
  }// end botonReportar

}
