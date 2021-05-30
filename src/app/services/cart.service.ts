import { Injectable } from '@angular/core';
import { Medicine } from '../model/medicine';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : Medicine[]=[];
addToCart(product:Medicine) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
constructor() { }

}
