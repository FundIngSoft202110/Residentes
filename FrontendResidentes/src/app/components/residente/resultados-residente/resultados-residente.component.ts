import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AsambleaService } from 'src/app/Services/asambleas/asamblea.service';
import { GanadorService } from 'src/app/Services/Ganador/ganador.service';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { Propuesta } from 'src/app/Services/propuestas/propuesta.model';
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';

@Component({
  selector: 'app-resultados-residente',
  templateUrl: './resultados-residente.component.html',
  styleUrls: ['./resultados-residente.component.scss'],
})

export class ResultadosResidenteComponent implements OnInit {

  private propuesta: number;

  constructor(private navCtrl: NavController,private propuestasService: PropuestasService, private asambleaService: AsambleaService, private ganadorService: GanadorService, private opcionesService: OpcionesService) { }

  ngOnInit(){
    this.propuesta = this.propuestasService.getPropuestaAbierta();
  }

  getAsamblea(){
    return /*this.asambleaService.getAsamblea(this.propuesta.idAsamblea).Tema*/"Abejas";
  }

  getPropuesta(){
    return /*this.propuesta.descripcion*/ "?JWDJEW?";
  }

  getTotalVotaciones(){
    return /*this.propuesta.votosTotales*/ 0;
  }

  getGanador(){
    return /*this.opcionesService.getOpciones(this.propuesta.id)[this.ganadorService.getGanador(this.propuesta.id).idOpcion-1].nombre*/"SI";
  }

  backAs(){
    this.navCtrl.navigateForward("/asamblea-residente");
  }

}
