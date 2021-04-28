import { Injectable } from '@angular/core';



export class Conjunto {
    Name: string;
}

let conjuntos: Conjunto[] = [{
 
    Name: "Mazuren 22"

}, {

    Name: "Mazuren 13"

}, {

    Name: "Scala 23"

}, {
    Name: "Scala 25"

}  , {

    Name: "Persepolis"

}, {

    Name: "Hércules"
}, {

    Name: "Almeida",

}, {
    Name: "Quintas de la villa",

}, {
    Name: "Valencia",

}, {
    Name: "Valeriana",

}, {
    Name: "Junior",
}, {
    Name: "Batimóvil",
}];


@Injectable({
  providedIn: 'root'
})

export class selConjService {
    getConjuntos() : Conjunto[] {
        return conjuntos;
    }
}
