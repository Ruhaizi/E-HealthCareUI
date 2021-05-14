import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {
public medicineId : number;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.medicineId=+this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=>{
        this.medicineId=+params['id'];
      }

    )
  }
  onSelectNext(){
    this.medicineId+=1;
    this.router.navigate(['medicine-detail',this.medicineId])
  }

}
