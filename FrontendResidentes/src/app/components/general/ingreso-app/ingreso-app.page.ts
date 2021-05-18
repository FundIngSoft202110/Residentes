import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateServiceService } from 'src/app/Services/servIngre/authenticate-service.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-ingreso-app',
  templateUrl: './ingreso-app.page.html',
  styleUrls: ['./ingreso-app.page.scss'],
})

export class IngresoAppPage implements OnInit {
  admin =0;
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: " El email es requerido" },
      { type: "pattern", message: "Correo no válido" }
    ],
    password: [
      { type: "required", message: " El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras para el password" }
    ]
  };
  errorMessage: string = "";
  constructor(
    private personasService:PersonasService,
    private formBuilder: FormBuilder,
    private authService: AuthenticateServiceService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(2)])
      )
    });
  }

  ngOnInit() {}

  loginUser(credentials) {
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      let cor ;
      
      cor = this.personasService.getIdPersona(credentials.email);
      console.log("este es el cor",cor);
      this.personasService.setPersonaActiva(2);
      console.log(cor);
      this.navCtrl.navigateForward("/netflix");
    }).catch(err=>{
      this.errorMessage = err;
    });
  }
  goToRegister() {
    this.navCtrl.navigateForward("/registro");
  }

}
