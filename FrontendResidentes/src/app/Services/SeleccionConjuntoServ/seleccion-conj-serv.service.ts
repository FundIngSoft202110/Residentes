import { Injectable } from '@angular/core';





let conjuntos: any[] = [{
    id:1,
    Name: "Mazuren 22"

}, {
    id:2,
    Name: "Mazuren 13"

}, {
    id:3,
    Name: "Scala 23"

}, {
    id:4,
    Name: "Scala 25"

}  , {
    id:5,
    Name: "Persepolis"

}, {
    id:6,
    Name: "Hércules"
}, {
    id:7,
    Name: "Almeida",

}, {
    id:8,
    Name: "Quintas de la villa",

}, {
    id:9,
    Name: "Valencia",

}, {
    id:10,
    Name: "Valeriana",

}, {
    id:11,
    Name: "Junior",
}, {
    id:12,
    Name: "Batimóvil",
}];


@Injectable({
  providedIn: 'root'
})

export class selConjService {
    getConjuntos() {
        return conjuntos;
    }
}
