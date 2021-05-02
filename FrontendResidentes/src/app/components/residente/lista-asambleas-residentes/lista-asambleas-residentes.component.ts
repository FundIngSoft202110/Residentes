import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Asamblea, AsambleaService } from 'src/app/Services/asambleas/asamblea.service';

@Component({
  selector: 'app-lista-asambleas-residentes',
  templateUrl: './lista-asambleas-residentes.component.html',
  styleUrls: ['./lista-asambleas-residentes.component.scss'],
})
export class ListaAsambleasResidentesComponent implements OnInit {

  asambleas = [];

  constructor(private asambleaService: AsambleaService, private navCtrl: NavController) { }

  ngOnInit() {
    this.asambleas = this.asambleaService.getAsambleas();
  }// end 

  goRoute(asamblea:Asamblea){
    if(asamblea.Activo != 'Programada')
      this.navCtrl.navigateForward("/asamblea-residente");
  }

  saveAsamblea(asamblea:Asamblea){
    this.asambleaService.setAsambleaAbierta(asamblea.IdAsamblea);
  }// end saveAsamblea

}
