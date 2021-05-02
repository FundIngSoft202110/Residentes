import { Injectable } from '@angular/core';
import { lstChat } from './lstChat.module';

@Injectable({
  providedIn: 'root'
})

export class LstChatServicioService {

  private  chatsList:lstChat[] = [
      {
      Rol: 'Celador',
      Nombre: 'María',
      Foto: 'https://cepcervantes.com/wp-content/uploads/2019/03/CEP-Cervantes-Mujer-Vigilante-Seguridad.jpg',
    },
    {
      Rol: 'Celador',
      Nombre: 'Juanito',
      Foto: 'https://lh3.googleusercontent.com/proxy/0TX3GMPpIy03v4brslU2luQxwJRO-MeoFLjqDp8JRd7ecRSwijjSs7eQ3nXySconyfhm-VvEG5Cfq9ooTbpB7GJV3IK9Vg363JRA83MjE64Uhkby1tBqZgbZRmFnXe_Wd5ziSulh5p9QPjGROuTvLr_f'
    },
    {
      Rol: 'Aseador',
      Nombre: 'Federica',
      Foto: 'https://m.media-amazon.com/images/M/MV5BMjA5NTg1MjAyMV5BMl5BanBnXkFtZTgwNDQ0MzY1ODE@._V1_.jpg'
    },
    {
      Rol: 'Aseador',
      Nombre: 'Roberto',
      Foto: 'https://elclosetlgbt.com/wp-content/uploads/2019/03/hugh-jackman-gay-lgbt-homosexual.jpg'
    },
    {
      Rol: 'Celador',
      Nombre: 'Marley',
      Foto: 'https://www.soyaire.com/__export/1615335739795/sites/debate/img/2021/03/09/jennifer-aniston_1_crop1615335315391.jpg_346753400.jpg'
    }
  ];
  constructor() { }

  getlstMsjs() {
    return this.chatsList;
  } // end getConjuntos

  
}



