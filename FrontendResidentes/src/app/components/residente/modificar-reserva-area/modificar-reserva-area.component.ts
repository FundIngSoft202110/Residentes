import { Component, OnInit } from '@angular/core';
import { Reserva, ModificarReservaAreaService } from 'src/app/Services/modificarReservaArea/modificar-reserva-area.service';

@Component({
  selector: 'app-modificar-reserva-area',
  providers:[ModificarReservaAreaService],
  templateUrl: './modificar-reserva-area.component.html',
  styleUrls: ['./modificar-reserva-area.component.scss'],
})
export class ModificarReservaAreaComponent implements OnInit {

  reserva: Reserva;
  horasDisponibles: string[];
	hora_i: any;
	hora_f: any;
	cantidad_p: any;
  pos:"top";

  constructor(service: ModificarReservaAreaService) { 
    this.reserva = service.getReserva();
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
  }

  ngOnInit() {}

}
