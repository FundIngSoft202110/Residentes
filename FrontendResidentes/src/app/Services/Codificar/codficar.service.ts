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
  
}

function encrypt(inputString: any, shiftedpositions: any) {
	var salida = '';
	var oldASCII; //donde se guarda el codigo ascii de una letra
	var newASCII; //codigo ascii resultante luego de sumarle shiftedpositions
	//por cada letra de la entrada
	for (var c = 0; c < inputString.length; c++) {
		oldASCII = inputString[c].charCodeAt(); //obtenemos su codigo
		newASCII = oldASCII + shiftedpositions; //desplazamos de lugar la letra al sumarle shiftedpositions
		salida = salida.concat(String.fromCharCode(newASCII)); //convertimos el nuevo codigo a string y concatenamos
	}
	return salida;
}

var res = encrypt('Zeqsw$e$gmjvev$iwxs0$elsve$gsqtexmfpi$gsr$iqsnmw%', -4); //cifra la cadena
console.log(res);