import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IMedicine } from '../medicines/IMedicine.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

constructor(private http:HttpClient) { }

getAllCategories():Observable<string[]>{
  return this.http.get<string[]>('https://localhost:44368/api/Category')
}

getMedicine(id:number){
  return this.getAllMedicines().pipe(
    map(medicinesArray=>{
      return medicinesArray.find(p=>p.Id===id);
    })
  )
}

getAllMedicines(): Observable<IMedicine[]>{
  return this.http.get('data/medicines.json').pipe(
  map(data=>{
    const medicinesArray : Array<IMedicine>=[];
    for(const id in data){
      if(data.hasOwnProperty(id)){
      medicinesArray.push(data[id]);
    }
    }
    return medicinesArray;
    })
   ) }
}
