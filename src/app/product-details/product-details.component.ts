import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { CartService } from '../services/cart.service';
import { IMedicine } from '../medicines/IMedicine.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  medicines: Array<IMedicine>;

  addToCart(medicine) {
    this.cartService.addToCart(medicine);
    window.alert('Your product has been added to the cart!');
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

}
