export interface Propuesta{
    id: number;
    idAsamblea: number;
    idConjunto: number;
    descripcion: string;
    votosTotales: number;
    habilitar: boolean; // Habilitar los resultados
    parar: boolean; // Para las votacones 
    subir: boolean; // Subir las propuestas
}