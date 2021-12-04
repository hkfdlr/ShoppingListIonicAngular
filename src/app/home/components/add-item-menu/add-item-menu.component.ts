import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-item-menu',
  templateUrl: './add-item-menu.component.html',
  styleUrls: ['./add-item-menu.component.scss'],
})
export class AddItemMenuComponent implements OnInit {
  @Output() resize = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.resize.emit(false);
  }

  filter() {

  }

  onFocus() {
    this.resize.emit(true);
  }
}
