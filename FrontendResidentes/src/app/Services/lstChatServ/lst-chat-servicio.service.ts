import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lstChat } from './lstChat.module';

@Injectable({
  providedIn: 'root'
})

export class LstChatServicioService {
  chat : any;
  private  chatsList3:lstChat[] = [
    {
      idc: 12,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'María',
      foto: 'https://cepcervantes.com/wp-content/uploads/2019/03/CEP-Cervantes-Mujer-Vigilante-Seguridad.jpg',
    },
    {
      idc: 13,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Juanito',
      foto: 'https://i.ytimg.com/vi/VYnFoDk3MzE/maxresdefault.jpg'
    },
    {
      idc: 14,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Federica',
      foto: 'https://m.media-amazon.com/images/M/MV5BMjA5NTg1MjAyMV5BMl5BanBnXkFtZTgwNDQ0MzY1ODE@._V1_.jpg'
    },
    {
      idc: 15,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Roberto',
      foto: 'https://elclosetlgbt.com/wp-content/uploads/2019/03/hugh-jackman-gay-lgbt-homosexual.jpg'
    },
    {
      idc: 16,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Marley',
      foto: 'https://www.soyaire.com/__export/1615335739795/sites/debate/img/2021/03/09/jennifer-aniston_1_crop1615335315391.jpg_346753400.jpg'
    },
    {
      idc: 17,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Raul',
      foto: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2019/10/hipertextual-caidos-cielo-actores-actrices-menos-problematicos-hollywood-2019277810.jpg?fit=1200%2C686&ssl=1'
    },
    {
      idc: 18,
      rol: 'empleado',
      oficio: 'Administrador',
      nombre: 'Jaimito',
      foto: 'https://www.latercera.com/resizer/j7i4nLxOo0qzXj9xiExhE-aVeEo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BT5KMODEZ5FAPNDOJPE5UBQQHE.png'
    },
    {
      idc: 19,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Antonio',
      foto: 'data:image/jpeg;base64,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'
    },
    {
      idc: 20,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Rodolfa',
      foto: 'https://confidencialcolombia.com/wp-content/uploads/2019/12/Marbelle-1024x683.jpg'
    },
    {
      idc: 21,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Harry',
      foto: 'https://i.chzbgr.com/full/5522305280/h6EA5F11A/cosplay-win-harry-potter-in-his-younger-days'
    },
    {
      idc: 22,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Severus',
      foto: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/senalradionica/articulo-noticia/galeriaimagen/severus-snape_1.jpg?itok=snQK-ZDi'
    },
    {
      idc: 23,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Marinela',
      foto: 'https://us.hola.com/images/0261-1053d967dd0e-1c71df7aec0c-1000/square-480/belinda.jpg'
    },
    {
      idc: 24,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'McGonagall ',
      foto: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/harry_potter_mujeres.jpg'
    },
    {
      idc: 25,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Cristina',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cristinakirchnermensaje2010.jpg'
    },
    {
      idc: 26,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Maia',
      foto: 'https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/colp_ext_046897.jpg?itok=xPwtsYkE&timestamp=1608315643'
    },
    {
      idc: 27,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Raya',
      foto: 'https://spoiler.bolavip.com/__export/1614705680316/sites/bolavip/img/2021/03/02/raya_up_close_0_crop1614702536236.jpeg_1814870244.jpeg'
    },
    {
      idc: 28,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'María Paulina',
      foto: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/164299.jpg'
    },
    {
      idc: 29,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Doña María',
      foto: 'https://ep01.epimg.net/elpais/imagenes/2019/09/06/icon/1567763443_595274_1567772784_sumario_normal.jpg'
    },
    {
      idc: 30,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Walid',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bad_Bunny_2019_by_Glenn_Francis.jpg/1200px-Bad_Bunny_2019_by_Glenn_Francis.jpg'
    },
    {
      idc: 12,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-1-1',
      foto: '',
    },
    {
      idc: 13,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-1-2',
      foto: '',
    },
    {
      idc: 14,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-2-1',
      foto: '',
    },
    {
      idc: 15,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-2-2',
      foto: '',
    }
  ]

  private  chatsList2:lstChat[] = [
    {
      idc: 12,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-1-1',
      foto: '',
    },
    {
      idc: 13,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-1-2',
      foto: '',
    },
    {
      idc: 14,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-2-1',
      foto: '',
    },
    {
      idc: 15,
      rol: 'apartamento',
      oficio: 'Apto',
      nombre: '1-2-2',
      foto: '',
    },
    {
      idc: 13,
      rol: 'administrador',
      oficio: 'Admin',
      nombre: 'Jorge',
      foto: ''
    }
  ]

  private  chatsList:lstChat[] = [
    {
      idc: 12,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'María',
      foto: 'https://cepcervantes.com/wp-content/uploads/2019/03/CEP-Cervantes-Mujer-Vigilante-Seguridad.jpg',
    },
    {
      idc: 13,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Juanito',
      foto: 'https://i.ytimg.com/vi/VYnFoDk3MzE/maxresdefault.jpg'
    },
    {
      idc: 14,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Federica',
      foto: 'https://m.media-amazon.com/images/M/MV5BMjA5NTg1MjAyMV5BMl5BanBnXkFtZTgwNDQ0MzY1ODE@._V1_.jpg'
    },
    {
      idc: 15,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Roberto',
      foto: 'https://elclosetlgbt.com/wp-content/uploads/2019/03/hugh-jackman-gay-lgbt-homosexual.jpg'
    },
    {
      idc: 16,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Marley',
      foto: 'https://www.soyaire.com/__export/1615335739795/sites/debate/img/2021/03/09/jennifer-aniston_1_crop1615335315391.jpg_346753400.jpg'
    },
    {
      idc: 17,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Raul',
      foto: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2019/10/hipertextual-caidos-cielo-actores-actrices-menos-problematicos-hollywood-2019277810.jpg?fit=1200%2C686&ssl=1'
    },
    {
      idc: 18,
      rol: 'administrador',
      oficio: 'Administrador',
      nombre: 'Jaimito',
      foto: 'https://www.latercera.com/resizer/j7i4nLxOo0qzXj9xiExhE-aVeEo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BT5KMODEZ5FAPNDOJPE5UBQQHE.png'
    },
    {
      idc: 19,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Antonio',
      foto: 'data:image/jpeg;base64,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'
    },
    {
      idc: 20,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Rodolfa',
      foto: 'https://confidencialcolombia.com/wp-content/uploads/2019/12/Marbelle-1024x683.jpg'
    },
    {
      idc: 21,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Harry',
      foto: 'https://i.chzbgr.com/full/5522305280/h6EA5F11A/cosplay-win-harry-potter-in-his-younger-days'
    },
    {
      idc: 22,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Severus',
      foto: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/senalradionica/articulo-noticia/galeriaimagen/severus-snape_1.jpg?itok=snQK-ZDi'
    },
    {
      idc: 23,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'Marinela',
      foto: 'https://us.hola.com/images/0261-1053d967dd0e-1c71df7aec0c-1000/square-480/belinda.jpg'
    },
    {
      idc: 24,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'McGonagall ',
      foto: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/harry_potter_mujeres.jpg'
    },
    {
      idc: 25,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Cristina',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cristinakirchnermensaje2010.jpg'
    },
    {
      idc: 26,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Maia',
      foto: 'https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/colp_ext_046897.jpg?itok=xPwtsYkE&timestamp=1608315643'
    },
    {
      idc: 27,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Raya',
      foto: 'https://spoiler.bolavip.com/__export/1614705680316/sites/bolavip/img/2021/03/02/raya_up_close_0_crop1614702536236.jpeg_1814870244.jpeg'
    },
    {
      idc: 28,
      rol: 'empleado',
      oficio: 'Celador',
      nombre: 'María Paulina',
      foto: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/164299.jpg'
    },
    {
      idc: 29,
      rol: 'empleado',
      oficio: 'Todero',
      nombre: 'Doña María',
      foto: 'https://ep01.epimg.net/elpais/imagenes/2019/09/06/icon/1567763443_595274_1567772784_sumario_normal.jpg'
    },
    {
      idc: 30,
      rol: 'empleado',
      oficio: 'Aseador',
      nombre: 'Walid',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bad_Bunny_2019_by_Glenn_Francis.jpg/1200px-Bad_Bunny_2019_by_Glenn_Francis.jpg'
    },
    {
      idc: 13,
      rol: 'administrador',
      oficio: 'Admin',
      nombre: 'Jorge',
      foto: ''
    }
  ];

  constructor(private http: HttpClient) { }


  public obtener(url: string) {
    this.getChatss(url)
      .subscribe(respuesta => {
        console.log("subscirbe ", respuesta);
        this.chat = respuesta;
      })
  }
  
  
  getlstMsjsEmpAdmin(id:number) {
    this.obtener("http://192.168.0.27:8080/BackendResidentes/consultas/mensajes/residente/" + id.toString() );
    return this.chat;
  } // end getConjuntos
  getlstMsjAptoAdmin(id:number) {
    this.obtener("http://192.168.0.27:8080/BackendResidentes/consultas/mensajes/empleado/" + id.toString() );
    return this.chat;
  }
  getlstMsjAptoEmp(id:number) {
    this.obtener("http://192.168.0.27:8080/BackendResidentes/consultas/mensajes/admin/" + id.toString() );
    return this.chat;
  }

  public getChatss(url: string) {
    return this.http.get(url);
  }
  
  setChatActivo(nombre:string ,rol: string,id:number ){
    window.localStorage['chatnombre'] = nombre;
    window.localStorage['chatrol'] = rol;
    window.localStorage['chatid'] = id;
  }
  

  nombre: any;

  getChatN(){
    this.nombre = (window.localStorage['chatnombre'] || (-1).toString);
    if(this.nombre == '-1')
      return null;
    else
      return (this.nombre);
  }

  rol: any;

  getRol(){
    this.rol = (window.localStorage['chatrol'] || (-1).toString);
    if(this.rol == '-1')
      return null;
    else
      return (this.rol);
  }

  id: any;
  getChatId(){
    this.id = Number(window.localStorage['chatid'] || -1);
    if(this.id == -1)
      return null;
    else
      return (this.id);
  }
  
}



