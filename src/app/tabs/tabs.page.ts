import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

tab1Root: any = 'Tab1Page';
tab2Root: any = 'Tab2Page';
myIndex: number;

constructor(navParams: NavParams) {
  // Set the active tab based on the passed index from menu.ts
  this.myIndex = navParams.data.tabIndex || 0;
}
}
