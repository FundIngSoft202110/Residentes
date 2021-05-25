import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { QuejasAdminService } from 'src/app/Services/quejas-admins/quejas-admin.service';

@Component({
  selector: 'app-quejas-admin-component',
  templateUrl: './quejas-admin-component.component.html',
  styleUrls: ['./quejas-admin-component.component.scss'],
})
export class QuejasAdminComponent implements OnInit {
  quejas = [];
  idAConj : any;
  constructor(private  conjServ: ConjuntosService, private quejServ: QuejasAdminService) { }

  ngOnInit() { 

  }

  async ionViewWillEnter(){
    this.idAConj = this.conjServ.getConjuntoActivo();
    this.quejServ.getQuejas(this.idAConj);
    await this.waitBD();
    this.quejas = this.quejServ.getQujeasList();
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 250));
  }
}
