import {Component, Input, OnInit} from '@angular/core';
import {ItemdataService} from '../../services/itemdata.service';

@Component({
  selector: 'app-add-item-menu',
  templateUrl: './add-item-menu.component.html',
  styleUrls: ['./add-item-menu.component.scss'],
})
export class AddItemMenuComponent {
  @Input() isMobile: boolean;
  @Input() searchText: string;
  itemdataService: ItemdataService;

  groceries = [
    {name: 'Apple'},
    {name: 'Banana'},
    {name: 'Strawberry'},
    {name: 'Avocado'},
    {name: 'Bell Pepper'},
    {name: 'Carrot'},
    {name: 'Garlic'},
    {name: 'Lemon'},
    {name: 'Onion'},
    {name: 'Parsley'},
    {name: 'Cilantro'},
    {name: 'Basil'},
    {name: 'Potato'},
    {name: 'Spinach'},
    {name: 'Tomato'},
    {name: 'Bread'},
    {name: 'Pasta'},
    {name: 'Quinoa'},
    {name: 'Rice'},
    {name: 'Tortilla'},
    {name: 'Chicken'},
    {name: 'Eggs'},
    {name: 'Ground Beef'},
    {name: 'Turkey'},
    {name: 'Butter'},
    {name: 'Sliced Cheese'},
    {name: 'Shredded Cheese'},
    {name: 'Milk'},
    {name: 'Sour Cream'},
    {name: 'Greek Yogurt'},
    {name: 'Yoghurt'},
    {name: 'Baking powder'},
    {name: 'Baking Soda'},
    {name: 'Sugar'},
    {name: 'Brown Sugar'},
    {name: 'Flour'},
    {name: 'Honey'},
    {name: 'Vanilla'},
    {name: 'Dry Yeast'},
    {name: 'Chocolate Chips'},
    {name: 'Cocoa Powder'},
    {name: 'Powdered Sugar'},
    {name: 'Corn'},
    {name: 'Broccoli'},
    {name: 'Pizza'},
    {name: 'Stock'},
    {name: 'Broth'},
    {name: 'Salsa'},
    {name: 'Jam'},
    {name: 'Jelly'},
    {name: 'Peanut Butter'},
    {name: 'Pasta Sauce'},
    {name: 'Black Beans'},
    {name: 'Soups'},
    {name: 'Tuna'},
    {name: 'Chili'},

  ]

  constructor(itemdataService: ItemdataService) {
    this.itemdataService = itemdataService;
  }

  getFiltered() {
    if (!this.searchText) {
      return this.groceries;
    }

    const searchText = this.searchText.toLowerCase()
    return this.groceries.filter(x => {
        if (x == undefined) return {name: this.searchText}
        return x.name.toLowerCase().includes(searchText)
      }
    )
  }

  addItem(item: { name: string }) {
    this.itemdataService.addItem(item);
  }
}
