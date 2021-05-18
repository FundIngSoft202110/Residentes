import { Injectable } from '@angular/core';

export class Company {

    Name: string;

}

let companies: Company[] = [{

    Name: "Super Mart of the West"
}, {

    Name: "Electronics Depot"

}, {

    Name: "K&S Music"

}, {

    Name: "Tom's Club"
}];


@Injectable()
export class AreaComunResidenteService {
    getCompanies() : Company[] {
        return companies;
    }
}
