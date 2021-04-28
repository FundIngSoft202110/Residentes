import { Injectable } from '@angular/core';

export class Queja {
	ID: number;
	Torre: number;
	Apartamento: string;
	Notes: string;
}

let queja: Queja = {
	"ID": 1,
	"Torre": 1,
	"Apartamento": "400a",
	"Notes": "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",

};




@Injectable()
export class QuejaService {
	getQueja() {
		return queja;
	}
}