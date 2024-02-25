import { Component } from '@angular/core';
import { FullList, Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: FullList[] = [
    {
      name: "apple",
      url: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
    }, {
      name: "grape",
      url: "https://www.collinsdictionary.com/images/full/grape_229112122.jpg"
    }, {
      name: "orange",
      url: "https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png"
    }, {
      name: "cherry",
      url: "https://static.libertyprim.com/files/varietes/cerise-burlat-large.jpg?1569344439"
    }
  ]

  shopList: Item[] = []

  obj: Item | undefined

  addToList(n: string) {
    console.log('receive selected item: ' + n);


    this.obj = this.shopList.find(o => o.name === n)
    //  This line finds the first object within the shopList array whose name property matches the value of the event variable. 
    // It assigns this object to the variable obj

    if (this.obj != null) {
      this.obj.quantity++
    } else {
      this.shopList.push({ name: n, quantity: 1 })
    }

    // loop way 
    // var itemExists: boolean = false
    // if (this.shopList.length <= 0) {
    //   this.shopList.push({ name: n, quantity: 1 })
    // } else {
    //   if (this.shopList.length > 0) {
    //     for (const cartItem of this.shopList) {
    //       if (cartItem.name == n) {
    //         itemExists = true;
    //         cartItem.quantity++
    //         break
    //       }
    //     }
    //     if (!itemExists) {
    //       this.shopList.push({ name: n, quantity: 1 })
    //     }
    //   }
    // }


  }
}
