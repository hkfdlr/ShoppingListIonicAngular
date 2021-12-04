import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ItemComponent} from './components/item/item.component';
import {AddItemMenuComponent} from './components/add-item-menu/add-item-menu.component';
import {ContentDrawerComponent} from './components/content-drawer/content-drawer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    ItemComponent,
    AddItemMenuComponent,
    ContentDrawerComponent
  ]
})
export class HomePageModule {}
