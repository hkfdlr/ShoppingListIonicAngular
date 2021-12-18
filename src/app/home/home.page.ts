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

  showSearchList = false;

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

  getItemById(id: number) {
    return this.data.items[id];
  }

  addItem() {

  }

  isMobile() {
    return this.platform.is('mobile')
  }

  handleInput(event) {
    if (event.detail.value.length > 0) {
      this.showSearchList = true;
      console.log(event, this.showSearchList)
    } else {
      this.showSearchList = false;
    }
  }
}
