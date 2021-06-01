import { Component, OnInit, ViewChild } from '@angular/core';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { Opcion } from 'src/app/Services/opciones/opcion.model';
import { AsambleaService, Asamblea, ResultadoVoto } from '../../../Services/asambleas/asamblea.service';
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';
import { DxDrawerComponent } from 'devextreme-angular';
import { IonSlides, NavController } from '@ionic/angular';
import { Propuesta } from 'src/app/Services/propuestas/propuesta.model';
import notify from 'devextreme/ui/notify';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { VotosService } from 'src/app/Services/votos/votos.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';

@Component({
  selector: 'app-asamblea-admin-component',
  providers: [AsambleaService],
  templateUrl: './asamblea-admin-component.component.html',
  styleUrls: ['./asamblea-admin-component.component.scss'],
})
export class AsambleaAdminComponent implements OnInit {

  public propuestas: Propuesta[];
  public asamblea:any;
  private idAsamblea: number;
  private idConjunto: number;
  private idApto: number;
  private temaAsamblea:string = "";
  private resultadosVoto:ResultadoVoto;

  
  constructor(private navCtrl: NavController, private propuestasService: PropuestasService,
    private opcionesService: OpcionesService, private votosServices: VotosService,
    private asambleaService: AsambleaService, private conjuntosService: ConjuntosService,
    private servIngAptoService: ServIngAptoService,) { }

  ngOnInit() {
  } // end ngOnInit

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  } // end waitBD

  async ionViewWillEnter() {
    this.propuestas = [];
    this.idAsamblea = this.asambleaService.getAsambleaAbierta();
    this.asamblea = this.asambleaService.getAsamblea(this.idAsamblea);
    this.temaAsamblea = this.asamblea.tema;
    this.idConjunto = this.conjuntosService.getConjuntoActivo();
    this.asambleaService.cargarResultadosVoto(this.idConjunto, this.idAsamblea);
    this.idApto = this.servIngAptoService.getIdApto();
    this.propuestasService.cargarPropuestas(this.idConjunto, this.idApto, this.idAsamblea);
    await this.waitBD();
    if(this.asambleaService.getAsambleaEstado() == "A"){
      this.propuestas = this.propuestasService.getPropuestas();
      console.log("Propuestaassss: ", this.propuestas);
    }
    this.resultadosVoto = this.asambleaService.getResultadosVoto();
    console.log("Resultados Votos: ", this.resultadosVoto);
  }// end ionViewWillEnter

  getColorVotos(propuesta:Propuesta):string{
    if(propuesta.estado == "Disponible")
      return "residente";
    else
      return "deshabilitado";
  } // end getColorVotos

  getPropuestas():any{
    return this.propuestas;
  } // end getPropuestas

  getTemaAsamblea(){
    return this.temaAsamblea;
  }

  async votar(opcion: any, propuesta: Propuesta) {
    if(propuesta.estado == "Disponible"){
      this.asambleaService.votar(this.idConjunto, this.idApto, propuesta.idPropuesta, opcion.idOpcion);
      await this.waitBD();
      notify(this.asambleaService.getRespuesta().respuesta, 'sucess');
      this.propuestasService.cargarPropuestas(this.idConjunto, this.idApto, this.idAsamblea);
      await this.waitBD();
      this.propuestas = this.propuestasService.getPropuestas();
    } // end if
  } // votar

  getAsamblea(){
    return this.asamblea;
  }

  getResultadosVoto(){
    return this.resultadosVoto;
  } // end getResultadosVoto

  getOpcSlideInfo(propuesta:any) {
    return propuesta.opciones;
  }

  getNombreOpcion(opcion: Opcion, propuesta: Propuesta): string {
    return this.getOpcSlideInfo(propuesta)[opcion.id - 1].nombre;
  }

  next(slides: IonSlides) {
    console.log(slides);
    slides.slideNext();
  }
  prev(slides: IonSlides) {
    console.log(slides);
    slides.slidePrev();
  }

  botonNuevaPropuesta() {
    this.navCtrl.navigateForward("/nueva-propuesta"); 
  }
}

