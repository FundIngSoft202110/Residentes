import { not } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import notify from 'devextreme/ui/notify';
import { MONTHS } from 'src/app/constants';
import { ApiImage, ApiImagenService } from 'src/app/Services/apiImagen/api-imagen.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { Noticia } from 'src/app/Services/noticias/noticia.model';
import { NoticiaPK } from 'src/app/Services/noticias/noticiaPK.model';
import { NoticiasService } from 'src/app/Services/noticias/noticias.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  public noticias: any;
  private idConjutno: number;
  private idApto: number;
  private mostrar: number = 0;
  hoja = document.createElement('style');
  descripcion: string = "";
  noticiaNueva: Noticia = new Noticia();
  public fecha: any;
  public mes: number = 0;
  public anio: number = 0;
  public dia: number = 0;
  private user: string;
  private respuesta: any;

  fileP: File;
  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(private personasService: PersonasService, private noticiasService: NoticiasService,
    private conjuntosService: ConjuntosService, private servIngAptoService: ServIngAptoService,
    public alertController: AlertController, private api: ApiImagenService,
    private plt: Platform, private actionSheetCtrl: ActionSheetController) {
  }

  //////////////////////// TTTEEESSSTTTT ////////////////////////

  async selectImageSource() {
    this.fileInput.nativeElement.click();
  }

  // Used for browser direct file upload
  uploadFile(event: EventTarget) {
    this.fileInput.nativeElement.click();
    const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = target.files[0];
    console.log("File: ", file);
    this.fileP = file;
    /*this.api.uploadImageFile(file).subscribe((newImage: ApiImage) => {
      this.images.push(newImage);
    });*/
  }

  deleteImage(image: ApiImage, index) {
    this.api.deleteImage(image._id).subscribe(res => {
      this.images.splice(index, 1);
    });
  }

  //////////////////////// TTTEEESSSTTTT ////////////////////////

  ngOnInit() {
  } // end ngOnInit

  async waitBD() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }


  async ionViewWillEnter() {
    this.user = this.personasService.getUserActivo();
    console.log("USUARIOOOOO: ", this.user);
    this.conjuntosService.cargarFechaActual();
    await this.waitBD();
    this.fecha = this.conjuntosService.getFechaActual();
    this.mes = this.fecha.mes;
    this.dia = this.fecha.dia;
    this.anio = this.fecha.anio;
    this.hoja.innerHTML = "#content-div {height: 80%;}";
    document.body.appendChild(this.hoja);
    this.idConjutno = this.conjuntosService.getConjuntoActivo();
    this.noticiasService.cargarNoticias(this.idConjutno);
    if (this.user == "RESIDENTE") {
      this.idApto = this.servIngAptoService.getIdApto();
      this.noticiasService.cargarAptoNoticia(this.idConjutno, this.idApto);
    } // end if
    await this.waitBD();
    this.noticias = this.noticiasService.getNoticias();
    console.log("Noticiass: ", this.noticias);
  } // end ionViewWillEnter

  getUser() {
    return this.user;
  } // end getUser

  getFecha() {
    return MONTHS[this.mes - 1] + " " + this.dia.toString() + " " + this.anio.toString();
  }

  convertDate(date: number): string {
    var year: number;
    var month: number;
    var day: number;
    year = Math.trunc(date % 10000);
    month = Math.trunc((date / 10000) % 100);
    day = Math.trunc((date / 1000000) % 100);
    return MONTHS[Math.trunc(month) - 1] + " " + day.toString() + " " + year.toString();
  } // end convertDate

  click() {
    this.mostrar = 1;
    this.hoja.innerHTML = "#content-div {height: 70%;}";
    document.body.appendChild(this.hoja);
    console.log("MUereeee");
  }

  getMostrar() {
    return this.mostrar;
  }

  cancelarNoticia() {
    this.mostrar = 0;
    this.hoja.innerHTML = "#content-div {height:80%;}";
    document.body.appendChild(this.hoja);
    this.descripcion = "";
  }

  eliminarNoticia(noticia: Noticia) {
    this.presentAlertConfirm(noticia);
  } // end

  async cargarNoti() {
    await this.waitBD();
    this.noticiasService.cargarNoticias(this.idConjutno);
    await this.waitBD();
    this.noticias = this.noticiasService.getNoticias();
    this.respuesta = this.noticiasService.getRespuesta();
    notify(this.respuesta.respuesta, 'sucess');
  } // end cargarNoti

  async presentAlertConfirm(noticia: Noticia) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Está seguro que desea eliminar la noticia ' + noticia.titulo + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.noticiasService.elimnarNoticia(this.idConjutno, noticia.noticiaPK.idNoticia);
            this.cargarNoti();
          }
        }
      ]
    });

    await alert.present();
  } // end presentAlertConfirm

  async publicarNoticia() {
    this.mostrar = 0;
    this.hoja.innerHTML = "#content-div {height: 80%;}";
    document.body.appendChild(this.hoja);
    if ((this.descripcion != "")) {
      this.noticiaNueva.noticiaPK = new NoticiaPK();
      this.noticiaNueva.noticiaPK.conjuntoIdConjunto = this.conjuntosService.getConjuntoActivo();
      if (this.user == "RESIDENTE")
        this.noticiaNueva.titulo = this.noticiasService.getAptoNoti();
      else
        this.noticiaNueva.titulo = "Administrador";
      this.noticiaNueva.fecha = this.dia * 1000000 + this.mes * 10000 + this.anio;
      this.noticiaNueva.descripcion = this.descripcion;
      //this.noticiaNueva.imagen;
      this.noticiasService.nuevaNoticia(this.noticiaNueva);
      this.descripcion = "";
      this.cargarNoti();
    }//end if
  }// end publicarNoticia


  getEli(noticia: Noticia): number {
    if (this.user == "ADMIN")
      return 1;
    else
      if (noticia.titulo == this.noticiasService.getAptoNoti())
        return 1;
      else
        return 0;
  } // end getEli

} // end NoticiasComponent
