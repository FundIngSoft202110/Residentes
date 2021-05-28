import { NoticiaPK } from "./noticiaPK.model";

export class Noticia{
    noticiaPK: NoticiaPK;
    titulo : string;
    descripcion : string;
    imagen : string;
    fecha : Date;
} // end Noticia