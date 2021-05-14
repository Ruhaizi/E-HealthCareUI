import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { AlertService } from 'src/app/services/alert.service';
import { HealthService } from 'src/app/services/health.service';
import { IMedicine } from '../IMedicine.interface';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  @ViewChild('Form') addMedicineForm :NgForm;
  @ViewChild('formTabs' ) formTabs: TabsetComponent;

  CategoryList:any[];

  medicineView : IMedicine={
    Id:null,
    Name:'',
    Price:null,
    Seller:null,
    Description:null,
    Category:null,

  };
  constructor(private router: Router,
    private healthService:HealthService,
    private alert:AlertService) { }

  ngOnInit() {
    this.healthService.getAllCategories().subscribe(data=>{
      this.CategoryList=data;
      console.log(data);
    });

  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log('congrats, form submitted');
    console.log(this.addMedicineForm );
    console.log(this.addMedicineForm.value.MedicineInfo.name)
  }
  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
