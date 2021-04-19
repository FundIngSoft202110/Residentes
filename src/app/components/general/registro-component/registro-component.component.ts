
import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule } from 'devextreme-angular';
import { AppComponent } from 'src/app/app.component';


@Component({
    selector: 'app-registro-component',
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {


	checkBoxValue: boolean;
    indeterminateValue: boolean;

    ngOnInit() {

     }

	constructor() {
		
	}
}



