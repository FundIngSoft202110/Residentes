import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { AuthenticateServiceService } from 'src/app/Services/servIngre/authenticate-service.service';

@Component({
  selector: 'app-ingre-apto',
  templateUrl: './ingre-apto.page.html',
  styleUrls: ['./ingre-apto.page.scss'],
})
export class IngreAptoPage implements OnInit {
  idAConj: any;
  loginForm: FormGroup;
  validation_messages = {
    torre: [
      { type: "required", message: " La torre es requerido" },
      { type: "pattern", message: "Solo numeros son validos" }
    ],
    piso: [
      { type: "required", message: " El piso es requerido" },
      { type: "pattern", message: "Solo numeros son validos" }
    ],
    numero: [
      { type: "required", message: " El numero es requerido" },
      { type: "pattern", message: "Solo numeros son validos" }
    ],
    password: [
      { type: "required", message: " El password es requerido" },
      { type: "minlength", message: "Minimo 5 letras para el password" }
    ]
  };
  private aptos:any;
  errorMessage: string = "";
  constructor(
    private  conjServ: ConjuntosService,
    private formBuilder: FormBuilder,
    private authService: ServIngAptoService,
    private navCtrl: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      torre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      piso: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      numero: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      )
    });
  }

  ngOnInit() {
    this.idAConj = this.conjServ.getConjuntoActivo(); 
    this.authService.getAptos(this.idAConj);
  }

  loginUser(credentials) {
      this.authService.loginUser(credentials, this.idAConj).then(res => {
      this.errorMessage = "";
      this.navCtrl.navigateForward("/noticias");
    }).catch(err=>{
      console.log("errorr");
      this.errorMessage = err;
    });
  }

}
