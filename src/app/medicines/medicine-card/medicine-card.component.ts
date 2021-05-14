import { Component, Input, OnInit } from '@angular/core';
import { IMedicine } from '../IMedicine.interface';

@Component({
  selector: 'app-medicine-card',
  templateUrl: './medicine-card.component.html',
  styleUrls: ['./medicine-card.component.css']
})
export class MedicineCardComponent implements OnInit {
  @Input() Medicine:IMedicine ;


  constructor() { }

  ngOnInit() {
  }

}
