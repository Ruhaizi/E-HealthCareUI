import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Medicine } from 'src/app/model/medicine';
import { AlertService } from 'src/app/services/alert.service';
import { HealthService } from 'src/app/services/health.service';
import { IMedicine } from '../IMedicine.interface';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
 // @ViewChild('Form') addMedicineForm :NgForm;
  @ViewChild('formTabs' ) formTabs: TabsetComponent;
  addMedicineForm: FormGroup;
  medicine= new Medicine();
  nextClicked: boolean;

  CategoryList:any[];
  selectedPhoto: string | ArrayBuffer | null = null;

  medicineView : IMedicine={
    Id:null,
    Name:'',
    Price:null,
    Seller:null,
    Description:null,
    Description2:null,
    Category:'',

  };
  constructor(

    private fb: FormBuilder,
    private router: Router,
    private healthService:HealthService,
    private alert:AlertService) { }

  ngOnInit() {
    this.CreateAddMedicineForm();
    this.healthService.getAllCategories().subscribe(data=>{
      this.CategoryList=data;
      console.log(data);
    });

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedPhoto = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }


  // CreateAddmedicineForm() {
  //   this.addMedicineForm = this.fb.group({
  //       MedicineInfo: this.fb.group({
  //           Name: [null , Validators.required],
  //           Price: [null, Validators.required],
  //           Seller: [null, Validators.required],
  //           Description: [null, Validators.required],
  //           Category: [null, Validators.required],

  //       })
  //     });
  //   }

  CreateAddMedicineForm(){
    this.addMedicineForm = this.fb.group({
      MedicineInfo: this.fb.group({
      Name :[null, Validators.required],
      Price :[null, Validators.required],
      Category:['',Validators.required],
      Seller:[null,Validators.required],
      Description:[null,Validators.required],
      Description2:[null, Validators.required]
    })
    })

  }




    get MedicineInfo() {
      return this.addMedicineForm.controls.MedicineInfo as FormGroup;
  }
  get Name() {
    return this.MedicineInfo.controls.Name as FormControl;
    }

    get Price() {
      return this.MedicineInfo.controls.Name as FormControl;
      }

      get Seller() {
        return this.MedicineInfo.controls.Name as FormControl;
    }

    get Description() {
      return this.MedicineInfo.controls.Name as FormControl;
  }

  get Category() {
    return this.MedicineInfo.controls.Name as FormControl;
    }


  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(){
    this.nextClicked = true;

        this.mapMedicine();
        this.healthService.addMedicine(this.medicine);
        this.alert.success('Congrats, your medicine listed successfully on our website');
        console.log(this.addMedicineForm);


}

  mapMedicine(): void {
   this.medicine.Id = this.healthService.newMedID();
    this.medicine.Name = this.Name.value;
    this.medicine.Price = this.Price.value;
    this.medicine.Seller = this.Seller.value;
    this.medicine.Description = this.Description.value;
    this.medicine.Category = this.Category.value;
    this.medicine.Price = this.Price.value;

}

  selectTab(tabId: number) {
    this.nextClicked = true;
    this.formTabs.tabs[tabId].active = true;
  }

}


