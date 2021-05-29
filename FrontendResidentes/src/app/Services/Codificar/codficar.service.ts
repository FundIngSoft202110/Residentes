import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodficarService {
  
  codigo : any;
  i : any;
  tam: any;
  cifrado:any = "";

  constructor() { 
  this.codigo = 4;
  this.i =0;
  }
  // public codif(texto:String){
  //   //método para cifrar el texto
    
      
  //     this.codigo = this.codigo % 26;
  //     for ( this.i = 0; this.i < texto.length; this.i++) {
  //         if (texto.charAt(this.i) >= 'a' && texto.charAt(this.i) <= 'z') {
  //             if ((texto.charAt(this.i) + this.codigo) > 'z') {
  //                 this.cifrado.append((any) (texto.charAt(this.i) + this.codigo - 26));
  //             } else {
  //                 cifrado.append((char) (texto.charAt(i) + codigo));
  //             }
  //         } else if (texto.charAt(i) >= 'A' && texto.charAt(i) <= 'Z') {
  //             if ((texto.charAt(i) + codigo) > 'Z') {
  //                 cifrado.append((char) (texto.charAt(i) + codigo - 26));
  //             } else {
  //                 cifrado.append((char) (texto.charAt(i) + codigo));
  //             }
  //         }
  //     }
  //     return cifrado.toString();
  // }

}
