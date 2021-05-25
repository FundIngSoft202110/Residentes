import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarEmpldService {

  constructor(private http: HttpClient) { }

  loginUser(credential) {
    console.log(credential);
    return 0;
  }

  
  public postNuevoEmpld(url:string,body:any){
    console.log("hello");
    return this.http.post(url,body);
  }   

  public deleteEmpleado(url:string){
    return this.http.delete(url);
  }   
  
}
