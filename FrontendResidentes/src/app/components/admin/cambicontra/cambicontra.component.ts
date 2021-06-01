import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CamcontraService } from 'src/app/Services/camcontraserv/camcontra.service';
import { AuthenticateServiceService } from 'src/app/Services/servIngre/authenticate-service.service';
import { NuevoConjuntoPage } from '../nuevo-conjunto/nuevo-conjunto.page';



@Component({
  selector: 'app-cambicontra',
  templateUrl: './cambicontra.component.html',
  styleUrls: ['./cambicontra.component.scss'],
})
export class CambicontraComponent implements OnInit {

  contra:string;
  ncontra: string;
  error:string;
  nombre: any;
  id: any;
  constructor(private navCtrl: NavController, private servCont: CamcontraService){
    
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ncontra = "";
    this.nombre = this.servCont.getNomApto();
    this.id = this.servCont.getAptoId();
    this.contra = this.servCont.getContraApto();

    this.error = "";
    //this.contra = "FreeeF"; //COMENTAR ESTOOOOOOOOOOOOOOO
  }

  goBack(){
    this.navCtrl.navigateForward("/claves");
  }

  getColorReportar(){
    if((this.ncontra == "")){
      return "deshabilitado";
    }
    else{
      return "residente";
    }
  }

  botonReportar(){
    if( this.ncontra.length < 3){
      this.error= "La contraseña debe ser minimo de 3 caracteres";
    }else{
      this.error= "";
      console.log("escribo y me voy");
      this.servCont.cambContra(this.id ,this.ncontra );
      this.navCtrl.navigateForward("/claves");
    }
  }
}
