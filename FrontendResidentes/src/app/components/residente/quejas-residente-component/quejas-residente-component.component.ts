import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
	DxSelectBoxModule,
	DxTextAreaModule,
	DxFormModule
} from 'devextreme-angular';

import { QuejaService, Queja } from '../../../Services/quejasA-service/queja.service';

@Component({
  selector: 'app-quejas-residente-component',
  providers:[QuejaService],
  templateUrl: './quejas-residente-component.component.html',
  styleUrls: ['./quejas-residente-component.component.scss'],
})
export class QuejasResidenteComponent implements OnInit {

  queja: Queja;


	constructor(service: QuejaService) {
		this.queja = service.getQueja();
	}

  

  ngOnInit() {}

}
