/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component,ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs') tabs: IonTabs;

  constructor(
    public cart: CartService,
    public util: UtilService,
    public navCtrl: NavController
  ) { }

  openHome(){
    this.navCtrl.navigateForward('tabs/home');
  }

  handleTabClick(event:any){
    const { tab } = event.composedPath().find((element: any) => element.tagName === 'ION-TAB-BUTTON') as EventTarget & { tab: string };
    console.log('handleTabClick',tab);
    let deep = 1;
    let canGoBack = false;
    const deepFn = () => {
      if (this.tabs.outlet.canGoBack(deep, tab)) {
        canGoBack = true;
        deep++;
        deepFn();
      }
    }
    
    if (tab=='cart'){
      deepFn();
    }

    if (tab=='cart' && !this.util.isPaymentInit && canGoBack) {
      event.stopImmediatePropagation();
      return this.tabs.outlet.pop(deep - 1, tab);
    }

  }//EOF handleTabClick

}
