import { Injectable } from '@angular/core';



export class Residentes {
	SobreResidentes: string;
	Desarrolladores: string;
}

let residentes: Residentes = {
	"SobreResidentes": "Somos una  empresa de desarrollo tecnológico que marca tendencia en las propiedades horizontales, generando una nueva experiencia para residentes, empleados y administradores mejorando su comunicación y la eficiencia de sus procesos internos. ¡Gracias por preferirnos!",
    "Desarrolladores": "Juan Sebastian Barreto, Juan Alejandro Diaz Lote, Mariana Rojas Galavis, David Santiago Quintana, Maria Jose Nino, Jsnet Chen He,Andres Ricardo Porras",
};

@Injectable()
export class AcercaDeNosotrosService {
	getResidentes() {
		return residentes;
	}
}
