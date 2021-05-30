import { Component, OnInit } from '@angular/core';
//import { IngrPerfilServService } from 'src/app/Services/ingrePerServ/ingr-perfil-serv.service';

@Component({
  selector: 'app-ingreso-perfiles',
  templateUrl: './ingreso-perfiles.component.html',
  styleUrls: ['./ingreso-perfiles.component.scss'],
})
export class IngresoPerfilesComponent implements OnInit {
  
  public conjunto:string = "Maria";
  
  
  
  constructor(  /* private authService: IngrPerfilServService*/) {}
      

  ngOnInit() {}
/*
  loginUser(credentials) {
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
     // this.navCtrl.navigateForward("/home");
     console.log('vamo a casa');
    });
  }*/

  getConjunto(){
    return this.conjunto;
  }
  
}
