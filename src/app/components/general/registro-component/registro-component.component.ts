import { Component, OnInit } from '@angular/core';
import { Service, Employee } from '../../../service.service';

@Component({
    selector: 'app-registro-component',
    providers: [Service],
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {
	employee: Employee;
	positions: string[];
	states: string[];

    ngOnInit() {

     }

	constructor(service: Service) {
		this.employee = service.getEmployee();
		this.positions = service.getPositions();
		this.states = service.getStates();
	}
}


