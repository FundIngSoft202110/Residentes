import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MONTHS } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { PaquetesService } from 'src/app/Services/paquetes/paquetes.service';

@Component({
  selector: 'app-paquetes-residente-component',
  templateUrl: './paquetes-residente-component.component.html',
  styleUrls: ['./paquetes-residente-component.component.scss'],
})
export class PaquetesResidenteComponent implements OnInit {

  public paquetes :any[] = [];
  paquetesSer :any;
  public paqueteView : string[] = []; 
  public conjuntoActivo:number;
  public aptoActivo:number;
  length:number = -1;

  constructor(private paquetesService : PaquetesService, private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService) { }

  ngOnInit() {
    this.length = -1;
  }

  async ionViewWillEnter(){
    this.length = -1;
    this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
    this.aptoActivo = this.servIngAptoService.getIdApto();
    this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoActivo);
    await this.waitBD(); 
    this.paquetesSer = this.paquetesService.getPaquetes();
    console.log("PAQUETESSSSSS : ", this.paquetesSer);
    var conteo = 0;
    for(let paquete of this.paquetesSer){
      var paqueteAux = {num:conteo+1, paquete:this.paquetesSer[conteo]};
      conteo += 1;
      this.paquetes.push(paqueteAux);
    }
    for(let paquete of this.paquetes)
      this.paqueteView.push('oculto');
    this.length = this.paquetes.length;
  } // end ionViewWillEnter

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  } // end waitBD

  listOpen(paquete:any){
    if(this.paqueteView[paquete.num - 1] == 'mostrar'){
      this.paqueteView[paquete.num - 1]='oculto';
    }else{
      this.paqueteView[paquete.num - 1]='mostrar';
    }
  }

  getLength(){
    return this.length;
  }

  getPaqueteView(paquete:any){
    return this.paqueteView[paquete.num-1];
  }

  convertHour(hour: number):string{
    return this.conjuntosService.convertHour(hour);
  } // end convertHour

  convertDate(date: number):string{
    return this.conjuntosService.convertDate(date);
  } // end convertDate

} // end PaquetesResidenteComponent
