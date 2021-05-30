import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task {
  id: number;
  text: string
}

let tasks: Task[] = [
  { id: 1, text: "Prepare 2016 Financial" },
  { id: 2, text: "Prepare 2016 Marketing Plan" },
  { id: 3, text: "Update Personnel Files" },
  { id: 4, text: "Review Health Insurance Options Under the Affordable Care Act" },
  { id: 5, text: "New Brochures" },
];

@Injectable()
export class ReservacionAreaResidenteService {
  constructor(private http: HttpClient){

  }

  getTasks(): Task[] {
    return tasks;
}
  getMisReservas(url: string){
    return this.http.get(url);

  }
}
