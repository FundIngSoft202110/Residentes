import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Propuesta } from 'src/app/Services/propuestas/propuesta.model';
import { Opcion } from 'src/app/Services/opciones/opcion.model'
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { VotosService } from 'src/app/Services/votos/votos.service';
import { Asamblea, AsambleaService } from 'src/app/Services/asambleas/asamblea.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';

@Component({
  selector: 'app-asamblea-residente-component',
  templateUrl: './asamblea-residente-component.component.html',
  styleUrls: ['./asamblea-residente-component.component.scss'],
})
export class AsambleaResidenteComponent implements OnInit {

  public propuestas: Propuesta[];
  private idAsamblea: number;
  private idConjunto: number;
  private idApto: number;

  opcion: Opcion[];
  opcionesPropuesta: Opcion[][] = [];
  votosUsuario: number[];
  colorCards: string[];




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
    this.idAsamblea = this.asambleaService.getAsambleaAbierta();
    this.idConjunto = this.conjuntosService.getConjuntoActivo();
    this.idApto = this.servIngAptoService.getIdApto();
    this.propuestasService.cargarPropuestas(this.idConjunto, this.idApto, this.idAsamblea);
    await this.waitBD();
    this.propuestas = this.propuestasService.getPropuestas();
    /* this.votosUsuario = [];
    this.colorCards = [];
    this.opcionesPropuesta = [];
    for(let prop of this.propuestas){
      if(prop.subir){
        prop.votosTotales = 0; // SOLO PRUEBA
        this.votosUsuario.push(0);
        this.colorCards.push("residente");
        //console.log("if activa == ", this.asamblea.Activo, " asaam = ", this.asamblea.IdAsamblea);
        if(this.asamblea.estado == 'Activa'){
          this.opcion = this.opcionesService.getOpciones(prop.id);
          for(let opc of this.opcion)
            opc.cantidadVotos = 0; // SOLO PRUEBA
          this.opcionesPropuesta.push([...this.opcion]);
        }// end if
      }// end if
    }// end for*/
  }// end ionViewWillEnter

  getPropuestas():any{
    return this.propuestas;
  } // end getPropuestas

  votar(opcion: Opcion, propuesta: Propuesta) {
    if (!this.votosUsuario[propuesta.id - 1]) {
      if (!propuesta.parar) {
        this.votosServices.addVoto(opcion.id, propuesta.id);
        this.propuestas[propuesta.id - 1].votosTotales += 1;
        this.opcionesPropuesta[propuesta.id - 1][opcion.id - 1].cantidadVotos += 1;
        this.colorCards[propuesta.id - 1] = "red";
        this.votosUsuario[propuesta.id - 1] = 1;
        console.log("Voto en ", propuesta.descripcion, " por ", opcion.nombre);
        console.log("VotosTotales = ", this.propuestas[propuesta.id - 1].votosTotales);
        console.log("CantidadVotos Opcion 1 = ", this.opcionesPropuesta[propuesta.id - 1][0].cantidadVotos);
        console.log("CantidadVotos Opcion 2 = ", this.opcionesPropuesta[propuesta.id - 1][1].cantidadVotos);
      }
      else {
        this.colorCards[propuesta.id - 1] = "red";
      }

    }
  } // votar

  getColorCards(propuesta: Propuesta) {
    return this.colorCards[propuesta.id - 1];
  }

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

  getColorResultados(propuesta: Propuesta) {
    if (propuesta.habilitar) {
      return "residente";
    }
    else {
      return "#cdcdcd";
    }
  }// end getColorResultados

  enviarPropuesta(propuesta: Propuesta) {
    if (propuesta.habilitar) {
      this.propuestasService.setPropuestaAbierta(propuesta.id);
      this.navCtrl.navigateForward("/resultados-residente");
    }// end if
  }// end enviarPropuesta

}
