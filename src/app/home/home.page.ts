import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ItemdataService} from './services/itemdata.service';
import {AnimationController, DomController, GestureController, ModalController} from '@ionic/angular';
import {AddItemMenuComponent} from './components/add-item-menu/add-item-menu.component';
import {element} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  private searchOpened: boolean = false;
  private dragAnimation: any;
  @ViewChildren(AddItemMenuComponent, {read: ElementRef}) modalContainer: QueryList<ElementRef>;
  @ViewChild('addItemSearchbar') searchbar: ElementRef;

  constructor(
    private data: ItemdataService,
    private modalController: ModalController,
    private gestureCtrl: GestureController,
    private animationCtrl: AnimationController,
    private domCtrl: DomController,
  ) {

  }

  ngAfterViewInit() {
    const containerArray = this.modalContainer.toArray();
    const containerElement = containerArray[0].nativeElement;

    this.dragAnimation = this.animationCtrl.create()
      .addElement(containerElement)
      .duration(150)
      .fromTo('height', '48px', '200px');

    const swipeGesture = this.gestureCtrl.create({
      el: containerElement,
      threshold: 15,
      direction: 'y',
      gestureName: 'dragModal',
      onMove: ev => {
        const currentY = ev.deltaY;
        console.log('!!! moving')
        this.domCtrl.write(() => {
          containerElement.style.transform = `translateY(${currentY}px)`
        })
      },
      onEnd: ev => {
        console.log(ev)
      }
    }, true);

    swipeGesture.enable(true);
    console.log()
    this.initSearchbarSize();

  }

  public getItems() {
    return this.data.items;
  }

  public getItemById(id: number) {
    return this.data.items[id];
  }
  async addItem() {
    const modal = await this.modalController.create({
      component: AddItemMenuComponent,
      cssClass: 'small-modal',
      backdropDismiss: true
    });
    return await modal.present();
  }

  initSearchbarSize(): void {
    console.log('!!!', this.searchbar )
  }

  doResize(event): void {
    if (this.dragAnimation) {
      this.dragAnimation.play();
    }
    // this.searchOpened = event;
  }
}
