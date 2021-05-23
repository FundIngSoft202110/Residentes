import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
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
  public conjuntoActivo:number;
  public aptoActivo:number;

  constructor(private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
    this.paquetes = this.paquetesService.getPaquetes();
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
  }

  async ionViewWillEnter(){
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoActivo);
    await this.waitBD(); 
    this.paquetes = this.paquetesService.getPaquetes();
  } // end ionViewWillEnter

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 500));
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
