import { Component, OnInit } from '@angular/core';
import { HealthService } from 'src/app/services/health.service';
import { IMedicine } from '../IMedicine.interface';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

 // medicines:any;

  medicines: Array<IMedicine>;
  Category='';
  SearchCategory='';

  constructor(private HealthService: HealthService) { }

  onCategoryFilter(){
    this.SearchCategory=this.Category;

  }
  onCategoryFilterClear(){
    this.SearchCategory='';
    this.Category='';

  }

  ngOnInit() : void {
    this.HealthService.getAllMedicines().subscribe(
      data=> {
        this.medicines=data;
        const newMedicine =JSON.parse(localStorage.getItem('newMed'));

        if(newMedicine){
          this.medicines=[newMedicine, ...this.medicines];
        }
       // console.log(data);
            },
            error=>{
             // console.log(error);
            }
          );
          }
        }


