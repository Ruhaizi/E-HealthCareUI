import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IMedicine } from '../medicines/IMedicine.interface';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine';
import { IMedicineBase } from '../model/imedicinebase';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

constructor(private http:HttpClient) { }

getAllCategories():Observable<string[]>{
  return this.http.get<string[]>('https://localhost:5001/api/Category')
}

getMedicine(id:number){
  return this.getAllMedicines().pipe(
    map(medicinesArray=>
       medicinesArray.find(p=>p.Id===id)
    )
  );
}

getAllMedicines(): Observable<IMedicine[]>{
  return this.http.get('data/medicines.json').pipe(
  map(data=>{
    const medicinesArray : Array<IMedicineBase>=[];
    const localMedicines=JSON.parse(localStorage.getItem('newMed'));
    if(localMedicines){
      for(const id in localMedicines){
        if(localMedicines.hasOwnProperty(id)){
        medicinesArray.push(localMedicines[id]);
      }
      }
    }
    for(const id in data){
      if(data.hasOwnProperty(id)){
      medicinesArray.push(data[id]);
    }
    }
    return medicinesArray;
    })
   );
   }

   addMedicine(medicine:Medicine){
     let newMed =[medicine];

     if(localStorage.getItem('newMed')){
       newMed=[medicine,
                ...JSON.parse(localStorage.getItem('newMed'))];
     }
     localStorage.setItem('newMed',JSON.stringify(newMed));
   }

   newMedID() {
    if (localStorage.getItem('MID')) {
        localStorage.setItem('PID', String(+localStorage.getItem('MID') + 1));
        return +localStorage.getItem('MID');
    } else {
        localStorage.setItem('MID', '101');
        return 101;
    }
}
}
