import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-paquetes-residente-component',
  templateUrl: './paquetes-residente-component.component.html',
  styleUrls: ['./paquetes-residente-component.component.scss'],
})
export class PaquetesResidenteComponent implements OnInit {

  public paquetes :any;
  public paqueteView : string[] = []; 
  public conjuntoActivo:number;
  public aptoActivo:number;

  constructor(private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoActivo);
    await this.waitBD(); 
    this.paquetes = this.paquetesService.getPaquetes();
    console.log("PAQUETESSSSSS : ", this.paquetes);
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
  } // end ionViewWillEnter

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  listOpen(paquete:any){
    console.log("Paquete = ", paquete.paquetePK.idPaqueete, " CHange = ", this.paqueteView[paquete.paquetePK.idPaqueete - 1]);
    if(this.paqueteView[paquete.paquetePK.idPaqueete - 1] == 'mostrar'){
      this.paqueteView[paquete.paquetePK.idPaqueete - 1]='oculto';
    }else{
      this.paqueteView[paquete.paquetePK.idPaqueete - 1]='mostrar';
    }
    console.log("Paquete = ", paquete.id, "  Post CHange = ", this.paqueteView[paquete.paquetePK.idPaqueete - 1]);
  }

  getPaqueteView(paquete:any){
    return this.paqueteView[paquete.paquetePK.idPaqueete-1];
  }

}
