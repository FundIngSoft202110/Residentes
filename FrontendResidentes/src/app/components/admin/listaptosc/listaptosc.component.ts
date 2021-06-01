import { Component, OnInit } from '@angular/core';
import { aptosval } from 'src/app/Services/camcontraserv/aptosval';
import { CamcontraService } from 'src/app/Services/camcontraserv/camcontra.service';

@Component({
  selector: 'app-listaptosc',
  templateUrl: './listaptosc.component.html',
  styleUrls: ['./listaptosc.component.scss'],
})
export class ListaptoscComponent implements OnInit {
  listconj: any;
  constructor(private servi : CamcontraService) { }
  
  ngOnInit(){
    
  } 

  async ionViewWillEnter()  {
    this.servi.getConjuntos();
    await this.waitBD();
    //this.listconj = this.servi.obtenerListaConju();
    this.listconj = this.servi.obtenerConjLec();
    this.aptobuscado = this.listconj ;
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 400));
  }

  getAptosBuscado(){
    return this.aptobuscado;
  }

  elegirApto(apto :aptosval){
    this.servi.setCamAptoId(apto.id, apto.nombre, apto.contrasena);
    console.log(apto.id);
  }
  aptobuscado: any;

  buscarApto(event){
    const text = event.target.value ;
    if(text && text.trim() != ''){
      this.aptobuscado = this.listconj;
      this.aptobuscado = this.aptobuscado.filter((apto: any)=>{
        return ( (apto.nombre.toLowerCase().indexOf(text.toLowerCase() ) >-1)  );
      })
    }
  }

}
