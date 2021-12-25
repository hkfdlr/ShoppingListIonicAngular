import {EventEmitter, Injectable, Output} from '@angular/core';

export interface Item {
  name: string;
  id: number;
  amount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  @Output() $itemAdded: EventEmitter<boolean>;

  public items: Item[] = [
    {name: 'Test', id: 0, amount: 10},
    {name: 'Longer Test', id: 1},
    {name: 'Ridiculously long Test', id: 3},
  ]

  public removeItem(itemId: number) {
    this.items.forEach((el, index) => {
      if (el.id === itemId) {
        this.items.splice(index, 1)
      }
    })
  }

  addItem(item: { name: string }) {
    this.items.push({...item, id: this.getLowestUnusedId()})

  }

  getLowestUnusedId() {
    for (let i = 0; i <= this.items.length; i++) {
      if (this.items[i] === undefined) {
        return i;
      }
    }
  }
}
