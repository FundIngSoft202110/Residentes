export interface Propuesta{
    id: number;
    idAsamblea: number;
    idConjunto: number;
    descripcion: string;
    votosTotales: number;
    habilitar: boolean;
    parar: boolean;
    subir: boolean;
}