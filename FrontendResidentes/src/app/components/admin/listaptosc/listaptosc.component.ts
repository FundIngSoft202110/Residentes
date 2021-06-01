import { Component, OnInit } from '@angular/core';
import { aptosval } from 'src/app/Services/camcontraserv/aptosval';
import { AptoClave, CamcontraService } from 'src/app/Services/camcontraserv/camcontra.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';

@Component({
  selector: 'app-listaptosc',
  templateUrl: './listaptosc.component.html',
  styleUrls: ['./listaptosc.component.scss'],
})
export class ListaptoscComponent implements OnInit {
  listconj: AptoClave[];
  constructor(private servi : CamcontraService, private conjuntosService:ConjuntosService) { }
  
  ngOnInit(){
    
  } 

  async ionViewWillEnter()  {
    this.servi.getConjuntos(this.conjuntosService.getConjuntoActivo());
    await this.waitBD();
    //this.listconj = this.servi.obtenerListaConju();
    this.listconj = this.servi.obtenerConjLec();
    this.aptobuscado = this.listconj ;
    console.log("APTOSSSSS: ", this.aptobuscado);
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 800));
  }

  getAptosBuscado(){
    return this.aptobuscado;
  }

  elegirApto(apto :aptosval){
    this.servi.setCamAptoId(apto.id, apto.nombre, apto.contrasena);
    console.log(apto.id);
  }
  aptobuscado: AptoClave[];

  buscarApto(event){
    const text = event.target.value ;
    if(text && text.trim() != ''){
      this.aptobuscado = this.listconj;
      this.aptobuscado = this.aptobuscado.filter((apto: AptoClave)=>{
        return ( (apto.nombre.toLowerCase().indexOf(text.toLowerCase() ) >-1)  );
      })
    }
  }

}
