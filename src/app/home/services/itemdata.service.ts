import {Injectable} from '@angular/core';

export interface Item {
  name: string;
  id: number;
  amount?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemdataService {

  public items: Item[] = [
    {name: 'Test1', id: 0, amount: 10},
    {name: 'Test2', id: 1},
    {name: 'Test3', id: 2},
    {name: 'Test4', id: 3},
  ]

  private itemsGrouped = []

  private groupItems(items: Item[]) {

  }

  public getItems() {
    return this.groupItems(this.items);
  }

  constructor() {
  }
}
