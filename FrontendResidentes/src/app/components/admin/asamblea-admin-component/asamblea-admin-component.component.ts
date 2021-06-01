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

  
  opcionesSer :any;
  public propuestas: Propuesta[];
  public asamblea:any;
  private idAsamblea: number;
  private idConjunto: number;
  private idApto: number;
  private temaAsamblea:string = "";
  private resultadosVoto:any;
  public opciones:any[] = [];
  public propuestaSeleccionado:string;
  public result:any;
  private mostrar:number = 0;
  

  
  constructor(private navCtrl: NavController, private propuestasService: PropuestasService,
    private opcionesService: OpcionesService, private votosServices: VotosService,
    private asambleaService: AsambleaService, private conjuntosService: ConjuntosService,
    private servIngAptoService: ServIngAptoService,) { }

  ngOnInit() {
    this.mostrar = 0;
  } // end ngOnInit

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 1000));
  } // end waitBD

  async ionViewWillEnter() {
    this.mostrar = 0;
    this.result
    this.propuestas = [];
    this.idConjunto = this.conjuntosService.getConjuntoActivo();
    this.asambleaService.cargarAsambleas(this.idConjunto);
    await this.waitBD();
    this.idAsamblea = this.asambleaService.getAsambleaAbierta();
    this.asamblea = this.asambleaService.getAsamblea(this.idAsamblea);
    this.temaAsamblea = this.asamblea.tema;
    this.asambleaService.cargarResultadosVoto(this.idConjunto, this.idAsamblea);
    this.idApto = this.servIngAptoService.getIdApto();
    this.propuestasService.cargarPropuestas(this.idConjunto, 0, this.idAsamblea);
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

  getMostrar(){
    return this.mostrar;
  }

  idPropuesta:number;
  estado:string;
  optionsProp(){
    this.opciones = [];
    for(let prop of this.propuestas){
      if(prop.descripcion == this.propuestaSeleccionado){
        this.opcionesSer = prop.opciones;
        this.idPropuesta = prop.idPropuesta;
        this.estado = prop.estado;
        break;
      }else{
        this.opcionesSer = [];
      }
    }
    var conteo = 0;
    for(let opcc of this.opcionesSer){
      var opcionAux = {num:conteo+1, opcion:this.opcionesSer[conteo]};
      conteo += 1;
      this.opciones.push(opcionAux);
    }
    for(let res of this.resultadosVoto){
      if(res.propuesta == this.propuestaSeleccionado){
        this.result = res;
        break;
      }else{
        this.result = "";
      }
    }
    this.mostrar = 1;
  }

  getColorR(){
    if(this.mostrar == 1){
      if(this.estado == 'Bloqueado')
        return "residente";
      else
        return "deshabilitado";
    }else{
      return "residente";
    }
  }

  getColorP(){
    if(this.mostrar == 1){
      if(this.estado == 'Disponible')
        return "residente";
      else
        return "deshabilitado";
    }else{
      return "residente";
    }
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

  async pararVotacion(){
    this.asambleaService.pararVotacion(this.idPropuesta);
    await this.waitBD();
    notify(this.asambleaService.getRespuesta().respuesta, 'sucess');
    this.propuestasService.cargarPropuestas(this.idConjunto, 0, this.idAsamblea);
    await this.waitBD();
    if(this.asambleaService.getAsambleaEstado() == "A"){
      this.propuestas = this.propuestasService.getPropuestas();
      console.log("Propuestaassss: ", this.propuestas);
    }
    this.optionsProp();
  } // end pararVotacion

  async subirResultados(){
    this.asambleaService.subirResultados(this.idPropuesta);
    await this.waitBD();
    notify(this.asambleaService.getRespuesta().respuesta, 'sucess');
  } // end subirResultados

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

