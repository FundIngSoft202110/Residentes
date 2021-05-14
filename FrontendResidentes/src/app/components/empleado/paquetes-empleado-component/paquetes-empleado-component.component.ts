import { Component, OnInit } from '@angular/core';
import { Apto } from 'src/app/Services/aptos/apto.model';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import { Paquete } from 'src/app/Services/paquetes/paquete.model';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-paquetes-empleado-component',
  templateUrl: './paquetes-empleado-component.component.html',
  styleUrls: ['./paquetes-empleado-component.component.scss'],
})
export class PaquetesEmpleadoComponent implements OnInit {

  paquetes : Paquete[] = [];
  aptos : Apto[] = [];
  place : number;

  constructor(private paquetesService : PaquetesService, private aptosService : AptosService) { }

  ngOnInit() {
    this.aptos = this.aptosService.getAptos();
  }

  eliminarPaquete(paquete:Paquete){
    
  }

  optionsFn(){ //here item is an object 
    this.paquetes.length = 0;
    this.aptosService.setAptoActivo(this.place);
    this.paquetes = this.paquetesService.getPaquetes();
  }
}
