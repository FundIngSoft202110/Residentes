import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IPRESIDENTESA } from 'src/app/constants';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-manual-component',
  templateUrl: './manual-component.component.html',
  styleUrls: ['./manual-component.component.scss'],
})
export class ManualComponent implements OnInit {
 manual: any;
 url = IPRESIDENTESA+"/consultas/Conjuntos/vermanual/2/manual/manual2.pdf";
  constructor(private personasService:PersonasService, private http: HttpClient,private inAppBrowser: InAppBrowser) { }

  ngOnInit() {}

  getUser(){
    return this.personasService.getUserActivo();
  }
  vermanual(){
    
    this.inAppBrowser.create(this.url,/*'_self'*/);
   
  }

}
