import {AfterViewInit, Component} from '@angular/core';
import {ItemdataService} from './services/itemdata.service';
import {Capacitor} from '@capacitor/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  private showSearchList = false;
  private searchText: string;

  constructor(
    private data: ItemdataService,
    private platform: Platform,
  ) {

  }

  ngAfterViewInit() {

  }

  getItems() {
    return this.data.items;
  }

  addItem() {

  }

  isMobile() {
    return this.platform.is('mobile')
  }

  handleInput(event) {
    if (event.detail.value.length > 0) {
      this.showSearchList = true;
      this.searchText = event.detail.value;
    } else {
      this.showSearchList = false;
      this.searchText = '';
    }
  }

  removeItem(itemId: number) {
    this.data.removeItem(itemId)
  }
}
