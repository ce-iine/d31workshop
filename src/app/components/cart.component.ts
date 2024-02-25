import { Component, Input } from '@angular/core';
import { Item } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  @Input() 
  cartItems: Item[] = [];

  obj: Item |undefined

  deleteItem(name:string){

    this.obj = this.cartItems.find(item => item.name === name)

    if (this.obj != null) {
      this.obj.quantity--
      if(this.obj.quantity <1){
        let foundIndex = this.cartItems.indexOf(this.obj, 0);
        this.cartItems.splice(foundIndex, 1)
      }
    }
    console.log("removed this item", name)
    console.log("your cart is this noww", this.cartItems)

  }

}
