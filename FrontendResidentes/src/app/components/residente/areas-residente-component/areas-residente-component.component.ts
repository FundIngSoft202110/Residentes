import { Component, OnInit } from '@angular/core';
import{Area, AreaComunResidenteService} from '../../../Services/AreaComunResidente/area-comun-residente.service';
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxDateBoxModule,
         DxCalendarModule,
         DxAutocompleteModule,
         DxFormComponent,
         DxRadioGroupComponent,
       } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { NavController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { HttpClient } from '@angular/common/http';
import { IPRESIDENTESA } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ReservarAreaResidenteService } from 'src/app/Services/reservarAreaResidente/reservar-area-residente.service';

const sendRequest = function(value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

@Component({
  selector: 'app-areas-residente-component',
  providers: [AreaComunResidenteService,ReservarAreaResidenteService],
  templateUrl: './areas-residente-component.component.html',
  styleUrls: ['./areas-residente-component.component.scss'],
})

export class AreasResidenteComponent implements OnInit  {
    @ViewChild(CalendarComponent) myCal: CalendarComponent;
    calendar = {
        mode: 'month' as CalendarMode,
        currentDate: new Date(),
        events: false
      };
    @ViewChild("eventRadioGroup") eventRadioGroup: DxRadioGroupComponent;
    area: Area;
	tipo: string[];
	listaDeAreasComunes: string[];
    horasDisponibles: number[];
    linkMisReservas="/mis-reservas";
    conjuntoA:any;
    linnkNuevaReserva ="/reservar-area"
    tiposelect: any;
    respuestaA: any;
    listaRespuestas:string[]=[];;
    listaDeAreasComunesR: any;
    areaselect:string[];    
   

	constructor(private serviceReserva: ReservarAreaResidenteService,private service: AreaComunResidenteService, private navCtrl: NavController, private conjunto:ConjuntosService) {
		this.area = service.getArea();
		this.tipo = service.getTipo();
        this.conjuntoA=1;
        this.tipo=[
    		"Deportiva",
    		"Relajante",
    		"Social"
        ]
		this.listaDeAreasComunes = service.getListaDeAreasComunes();
        this.horasDisponibles = service.getHorasDisponibles();
        this.traerAreastipo();
        console.log("tipo",this.areaselect);
        this.serviceReserva.setarea(this.areaselect);
	}
    setAreas(){
        let y =[] ;
        this.listaRespuestas.pop();
        for(  var x in this.listaDeAreasComunesR  )
        y[x] = this.listaDeAreasComunesR[x].respuesta;
        this.listaRespuestas= y;
        console.log("resp2",y,this.listaRespuestas);
        
       
        
   
        
        return this.listaRespuestas;
        
    }

    mandarNueva() {
        console.log("tipo",this.areaselect);
        this.serviceReserva.setarea(this.areaselect);
        console.log("tipod",this.areaselect);
        this.navCtrl.navigateForward(this.linnkNuevaReserva);
      }
    mandarMisReservas() {
        this.navCtrl.navigateForward(this.linkMisReservas);
      }
   fecha:any;
     
    pos="top";
    now: Date = new Date();
    currentValue: any;
    firstDay: number = 0;
    minDateValue: Date | null = null;
    maxDateValue: Date | null = null;
    disabledDates: Function | null = null;
    zoomLevels: string[] = [
        "month", "year", "decade", "century"
    ];
    cellTemplate = "cell";
    holydays: any = [[1,0], [4,6], [25,11]];
    isWeekend(date) {
        var day = date.getDay();

        return day === 0 || day === 6;
    }
    setMinDate(e) {
        if(e.value) {
            this.minDateValue = new Date(this.now.getTime() - 1000*60*60*24*3);
        } else {
            this.minDateValue = null;
        }
    }
    setMaxDate(e) {
        if(e.value) {
            this.maxDateValue = new Date(this.now.getTime() + 1000*60*60*24*3);
        } else {
            this.maxDateValue = null;
        }
    }
    disableWeekend(e) {
        if(e.value) {
            var that = this;
            that.disabledDates = function(data) {
                return data.view === "month" && that.isWeekend(data.date);
            };
        } else {
            this.disabledDates = null;
        }
    }
    setFirstDay(e) {
        if(e.value) {
            this.firstDay = 1;
        } else {
            this.firstDay = 0;
        }
    }
    useCellTemplate(e) {
        if(e.value) {
            this.cellTemplate = "custom";
        } else {
            this.cellTemplate = "cell";
        }
    }
    getCellCssClass(date) {
        var cssClass = "";

        if(this.isWeekend(date))
            cssClass = "weekend";

        this.holydays.forEach(function(item) {
            if(date.getDate() === item[0] && date.getMonth() === item[1]) {
                cssClass = "holyday";
                return false;
            }
        });

        return cssClass;
    }
    
   
    ngOnInit() {
        this.traerAreastipo();
        console.log("tipwwo",this.areaselect);
        this.serviceReserva.setarea(this.areaselect);
    }

    public traerAreastipo(){
       
        console.log("c",this.conjuntoA);
       this.service.getAreasTipo(IPRESIDENTESA+"/consultas/AreasComunes/areasComunesTipo/conjunto/"+this.conjuntoA+"/nomTipoArea/"+this.tiposelect)
       .subscribe(respuesta=>{
           this.listaDeAreasComunesR=respuesta;
           this.setAreas();
           console.log("res bas",respuesta);
           console.log("areastipo",this.listaDeAreasComunesR);
       })
    }
    eventSource = [];
  viewTitle: string;

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title :string){
    this.viewTitle = title;
  }

  num:number;
  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    this.num = ev.selectedTime.getMonth() + 1;
    this.fecha=ev.selectedTime.getDate()*1000000+this.num*10000+ev.selectedTime.getFullYear();
    console.log(this.fecha);
    console.log("convertida",this.conjunto.convertDate(this.fecha));
    this.serviceReserva.setfecha(this.fecha);
    
    console.log('Selected time: ' + ev.selectedTime.getDate() + " " + this.num + " " + ev.selectedTime.getFullYear());
  };
   
}