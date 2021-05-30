import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/model/medicine';
import { CartService } from 'src/app/services/cart.service';
import { IMedicine } from '../IMedicine.interface';
import { HealthService } from 'src/app/services/health.service';
@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
  medicine: Medicine|undefined;
  public medicineId : number;
  medicines: any;



  addToCart(medicine:Medicine) {
    this.cartService.addToCart(medicine);
    window.alert('Your product has been added to the cart!');
  }


  constructor(private route:ActivatedRoute,
    private router:Router,
    private cartService: CartService,
    private HealthService: HealthService,
    ) { }

  ngOnInit() {

    this.HealthService.getAllMedicines().subscribe(
      data=> {
        this.medicines=data;

       const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('Id'));

  console.log(this.medicines)
  console.log(productIdFromRoute)

  this.medicine= this.medicines.find(medicine => medicine.Id  === productIdFromRoute);
            }
          );
  }
  onSelectNext(){
    this.medicineId+=1;
    this.router.navigate(['medicine-detail',this.medicineId])
  }

}
