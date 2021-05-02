import { Component, OnInit } from '@angular/core';
import { Paquete } from 'src/app/Services/paquetes/paquete.model';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-paquetes-residente-component',
  templateUrl: './paquetes-residente-component.component.html',
  styleUrls: ['./paquetes-residente-component.component.scss'],
})
export class PaquetesResidenteComponent implements OnInit {

  paquetes : Paquete[] = [];
  public paqueteView : string[] = []; 

  constructor(private paquetesService : PaquetesService) { }

  ngOnInit() {
    this.paquetes = this.paquetesService.getPaquetes();
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
  }

  listOpen(paquete:Paquete){
    console.log("Paquete = ", paquete.id, " CHange = ", this.paqueteView[paquete.id - 1]);
    if(this.paqueteView[paquete.id - 1] == 'mostrar'){
      this.paqueteView[paquete.id - 1]='oculto';
    }else{
      this.paqueteView[paquete.id - 1]='mostrar';
    }
    console.log("Paquete = ", paquete.id, "  Post CHange = ", this.paqueteView[paquete.id - 1]);
  }

  getPaqueteView(paquete:Paquete){
    return this.paqueteView[paquete.id-1];
  }

}
