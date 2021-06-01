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
  providers: [AreaComunResidenteService],
  templateUrl: './areas-residente-component.component.html',
  styleUrls: ['./areas-residente-component.component.scss'],
})

export class AreasResidenteComponent implements OnInit  {
    @ViewChild("eventRadioGroup") eventRadioGroup: DxRadioGroupComponent;
    area: Area;
	tipo: string[];
	listaDeAreasComunes: string[];
    horasDisponibles: number[];
    linkMisReservas="/mis-reservas";
    linnkNuevaReserva ="/reservar-area"
   

	constructor(service: AreaComunResidenteService, private navCtrl: NavController) {
		this.area = service.getArea();
		this.tipo = service.getTipo();
        this.tipo=[
    		"Deportiva",
    		"Relajante",
    		"Social"
        ]
		this.listaDeAreasComunes = service.getListaDeAreasComunes();
        this.horasDisponibles = service.getHorasDisponibles();
	}

    mandarNueva() {
        this.navCtrl.navigateForward(this.linnkNuevaReserva);
      }
    mandarMisReservas() {
        this.navCtrl.navigateForward(this.linkMisReservas);
      }
   
     
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
    
   
    ngOnInit() {}

    public traerAreastipo(){

    }
   
}