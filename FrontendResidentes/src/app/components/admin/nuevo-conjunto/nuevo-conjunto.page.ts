import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { NuevoconjuservService } from 'src/app/Services/nuevConjServ/nuevoconjuserv.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-nuevo-conjunto',
  templateUrl: './nuevo-conjunto.page.html',
  styleUrls: ['./nuevo-conjunto.page.scss'],
})
export class NuevoConjuntoPage implements OnInit {
  idAConj: any;
  nombreDir: any;

  loginForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: " El nombre es requerido" }
    ],
    direccion: [
      { type: "required", message: " El piso es requerido" }
    ],
    precioAdmin: [
      { type: "required", message: " El precio es requerido" },
      { type: "pattern", message: "Solo números son validos" }
    ],
    linkPago: [
      { type: "required", message: " El link es requerido" },
    ],
    numTorres: [
      { type: "required", message: " El numero de torres es requerido" },
      { type: "pattern", message: "Solo números son validos" }
    ],
    numPisos: [
      { type: "required", message: " El numero de pisos es requerido" },
      { type: "pattern", message: "Solo números son validos" }
    ],
    numAptos: [
      { type: "required", message: " El numero de apartamentos es requerida" },
      { type: "minlength", message: "Solo números son validos" }
    ]
  };
  private aptos:any;
  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private serCon: NuevoconjuservService,
    private personasService:PersonasService
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      direccion: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
        
      ),
      precioAdmin: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      linkPago: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      numTorres: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      numPisos: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ),
      numAptos: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      )

    });
  }
  usuario : any;
  ngOnInit() {
    this.usuario = this.personasService.getPersonaActiva();
    this.serCon.getConjuntos();
    //this.nombreDir = this.serCon.obtenerConjuntos();
  }
  num: number;

  async loginUser(credentials) {
    this.nombreDir = this.serCon.obtenerConjLec();
    this.num =0;
    for(let entry of this.nombreDir){
      if(entry.nombre == credentials.nombre){
        this.num =1;
      }
      if(entry.direccion == credentials.direccion){
        this.num =2;
      }
    }

    if(this.num == 0){

      this.serCon.enviarConj(credentials, this.usuario).subscribe(async respuesta => {
        console.log(respuesta);
        this.errorMessage = "Agregado exitosamente";
        await this.waitBD();

        

        this.navCtrl.navigateForward("/netflix");
      })

    }
    if(this.num == 1){
      this.errorMessage = "Nombre ya inscrito";
    }
    if(this.num == 2){
      this.errorMessage = "Dirección ya inscrita";
    }
    
  }

  async waitBD() {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  goBack(){
    this.navCtrl.navigateForward("/netflix");
  }


}
