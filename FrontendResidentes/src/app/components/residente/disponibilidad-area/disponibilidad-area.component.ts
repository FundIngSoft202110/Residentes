import { Component, OnInit } from '@angular/core';
import{DisponibilidadAreaResidenteService} from '../../../Services/DisponibilidadAreaResidente/disponibilidad-area-residente.service';

@Component({
  selector: 'app-disponibilidad-area',
  templateUrl: './disponibilidad-area.component.html',
  styleUrls: ['./disponibilidad-area.component.scss'],
})
export class DisponibilidadAreaComponent implements OnInit {

  constructor(service:DisponibilidadAreaResidenteService) { }

  ngOnInit() {}

}
