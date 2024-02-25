import { Component, Input, Output } from '@angular/core';
import { FullList } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  @Input()
  items: FullList[] = []

  @Output()
  sendName = new Subject<string>()

  itemSelected(n: string){
    console.log("item selected:", n)
    this.sendName.next(n)
  }

}
