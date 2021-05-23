import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})


export class ServIngAptoService {
  private apartamentos: any;
  private idConjunto;
  private apartamentos1 = [
    {
      IdApartamento: 1,
      Torre: 1,
      Numero: 1,
      Contrasena: 'abcd132',
      Piso: 1
    },
    {
      IdApartamento: 2,
      Torre: 1,
      Numero: 2,
      Contrasena: 'sdfa234',
      Piso: 1
    },
    {
      IdApartamento: 3,
      Torre: 1,
      Numero: 1,
      Contrasena: '12345678',
      Piso: 2
    },
    {
      IdApartamento: 4,
      Torre: 1,
      Numero: 2,
      Contrasena: 'i7tyur456',
      Piso: 2
    },

    {
      IdApartamento: 5,
      Torre: 2,
      Numero: 1,
      Contrasena: 'contraaa',
      Piso: 1
    },
    {
      IdApartamento: 6,
      Torre: 2,
      Numero: 2,
      Contrasena: 'senaaa24',
      Piso: 1
    },
    {
      IdApartamento: 7,
      Torre: 2,
      Numero: 1,
      Contrasena: 'poiuytred',
      Piso: 2
    },
    {
      IdApartamento: 8,
      Torre: 2,
      Numero: 2,
      Contrasena: 'tgrgwr5325',
      Piso: 2
    }
  ];

  constructor(private http: HttpClient) {

  }

  url: string;
  public getAptos(num: number) {
    this.url = IPRESIDENTES + "consultas/apartamentos/apartamentosc/"+num.toString();
    this.getAptosU(this.url)
      .subscribe(respuesta => {
        this.apartamentos = respuesta;
      })
  }

  public getApartamentos(){
    return this.apartamentos;
  }

  public getAptosU(url: string){
    return this.http.get(url);
  }

  setIdApto(idApto: number) {
    window.localStorage['idApto'] = idApto.toString();
  }
  idActualApto: any;
  getIdApto() {
    this.idActualApto = Number(window.localStorage['idApto'] || -1);
    if (this.idActualApto == -1)
      return null;
    else
      return this.idActualApto;
  }

  async loginUser(credential, num: number) {
    return new Promise((accept, reject) => {
      let van = 0;
      let cont = 0;
      for (let ind of this.apartamentos) {
        if ((credential.torre == this.apartamentos[cont].torre) && (credential.piso == this.apartamentos[cont].piso) && (credential.numero == this.apartamentos[cont].numero) && (credential.password == this.apartamentos[cont].contrasena)) {
          this.setIdApto(this.apartamentos[cont].apartamentoPK.idApartamento);
          accept("Login correcto");
          van = 1;
        }
        cont++;
      }
      if (van == 0) {
        reject("Login incorrecto");
      }
    });
  }


  loginUserP(credential) {
    return new Promise((accept, reject) => {
      let van = 0;
      let cont = 0;
      for (let ind of this.apartamentos1) {

        if ((credential.torre == this.apartamentos1[cont].Torre) && (credential.piso == this.apartamentos1[cont].Piso) && (credential.numero == this.apartamentos1[cont].Numero) && (credential.password == this.apartamentos1[cont].Contrasena)) {
          this.setIdApto(this.apartamentos1[cont].IdApartamento);
          accept("Login correcto");
          van = 1;
        }
        cont++;
      }
      if (van == 0) {
        reject("Login incorrecto");
      }
    });
  }
}
