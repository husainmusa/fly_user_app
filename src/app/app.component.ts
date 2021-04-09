/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component } from '@angular/core';
import { IonRouterOutlet, MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { ApiService } from './services/api.service';
import { UtilService } from './services/util.service';
import { CartService } from './services/cart.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';

declare var cordova;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public appPages: any[] = [];
  selectedIndex: any;
  loggedIn:boolean;
  discountValue: any;
  languageDirection:any;
  min: any;
  max: any;

  priceFilter = {
    lower: 10,
    upper: 500
  };
  fromFilter: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private oneSignal: OneSignal,
    private api: ApiService,
    public util: UtilService,
    public cart: CartService,
    private router: Router,
    private menuCtrl: MenuController,
    private db: AngularFireDatabase,
  ) {
    this.selectedIndex = 0;
    const uid = localStorage.getItem('uid');
    if((uid == "") || (uid  === null)){
      this.util.isLoggedIn = false;      
    }else{
      this.util.isLoggedIn = true;      
    }
    
    this.initializeApp();
    this.menuCtrl.enable(false, 'menu1');
    


  }

  ngOnInit(){
    const uid = localStorage.getItem('uid');
    if((uid == "") || (uid  === null)){
      this.loggedIn = false;
      console.log("not logged");
    }else{
      this.loggedIn = true;
      console.log("logged");
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      // this.statusBar.backgroundColorByHexString('#45C261');
      this.splashScreen.hide();
      console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
      this.appPages = this.util.appPage;
      const lng = localStorage.getItem('language');
      console.log("localstorage language", lng);

        // this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);

        // // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

 

        // this.oneSignal.endInit();

      
      if (!lng || lng === null) {
        this.api.get('users/getDefaultSettings').subscribe((data: any) => {
          console.log('----------------- app setting', data);
          if (data && data.status === 200 && data.data) {
            const manage = data.data.manage;
            const language = data.data.lang;
            if (manage && manage.length > 0) {
              if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                this.util.appClosed = true;
                this.util.appClosedMessage = manage[0].message;
              } else {
                this.util.appClosed = false;
              }
            } else {
              this.util.appClosed = false;
            }
            console
            if (language) {
              console.log('data.data.file=>',data.data.file)
              this.util.translations = language;
              localStorage.setItem('language', data.data.file);
              console.log("translations",this.util.translations );
              localStorage.setItem('language_id', data.data.langid);
            }

            if(data.data.lang_position){
              if(data.data.lang_position == "0"){
                this.util.direction = "rtl";
                this.util.cside = "left"
              }else{
                this.util.direction = "ltr";
                this.util.cside = "right"
              }
            }
            const settings = data.data.settings;
            if (settings && settings.length > 0) {
              const info = settings[0];
              // this.util.direction = info.appDirection;
              // this.util.cside = info.currencySide;
              this.util.currecny = info.currencySymbol;
              this.util.logo = info.logo;
              this.util.twillo = info.twillo;
              this.util.delivery = info.delivery;

              document.documentElement.dir = this.util.direction;
              console.log("utility direction", data.data.lang_position);
              
            } else {
              this.util.direction = 'ltr';
              this.util.cside = 'right';
              this.util.currecny = '$';
              document.documentElement.dir = this.util.direction;
              console.log("utility direction", this.util.direction);
            }

            const general = data.data.general;
            console.log('generalllll============================>', general)
            if (general && general.length > 0) {
              const info = general[0];
              this.util.general = info;
              this.cart.minOrderPrice = parseFloat(info.min);
              this.cart.shipping = info.shipping;
              this.cart.shippingPrice = parseFloat(info.shippingPrice);
              this.cart.orderTax = parseFloat(info.tax);
              this.cart.freeShipping = parseFloat(info.free);
            }
          }
        }, error => {
          console.log('default settings', error);
        });
      } else {
        const param = {
          id: localStorage.getItem('language_id')
        };
        this.api.post('users/getDefaultSettingsById', param).subscribe((data: any) => {
          console.log('----------------- app setting', data);
          if (data && data.status === 200 && data.data) {
            const manage = data.data.manage;
            const language = data.data.lang;
            if (manage && manage.length > 0) {
              if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                this.util.appClosed = true;
                this.util.appClosedMessage = manage[0].message;
              } else {
                this.util.appClosed = false;
              }
            } else {
              this.util.appClosed = false;
            }
            if (language) {
              this.util.translations = language;
            }
            const settings = data.data.settings;
            if (settings && settings.length > 0) {
              const info = settings[0];
              console.log("language position", data.data.lang_position);
              if(data.data.lang_position == "0"){
                this.util.direction = "rtl";
              }else{
                this.util.direction = "ltr";
              }
              
              this.util.cside = info.currencySide;
              this.util.currecny = info.currencySymbol;
              this.util.logo = info.logo;
              this.util.twillo = info.twillo;
              this.util.delivery = info.delivery;
              document.documentElement.dir = this.util.direction;
              console.log("utility direction", this.util.direction);

            } else {
              this.util.direction = 'ltr';
              this.util.cside = 'right';
              this.util.currecny = '$';
              document.documentElement.dir = this.util.direction;
              console.log("utility direction", this.util.direction);
            }
            const general = data.data.general;
            console.log('generalllll============================>', general)
            if (general && general.length > 0) {
              const info = general[0];
              this.util.general = info;
              this.cart.minOrderPrice = parseFloat(info.min);
              this.cart.shipping = info.shipping;
              this.cart.shippingPrice = parseFloat(info.shippingPrice);
              this.cart.orderTax = parseFloat(info.tax);
              this.cart.freeShipping = parseFloat(info.free);
            }
          }
        }, error => {
          console.log('default settings by id', error);
          this.util.appClosed = false;
          this.util.direction = 'ltr';
          this.util.cside = 'right';
          this.util.currecny = '₪';
          document.documentElement.dir = this.util.direction;
          console.log("utility direction", this.util.direction);
        });
      }
      if (this.platform.is('cordova')) {
        setTimeout(async () => {
          await this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
          this.oneSignal.getIds().then((data) => {
            localStorage.setItem('fcm', data.userId);
            // this.oneSignal.handleNotificationReceived().subscribe((res) => {
            //   console.log('event=>',res)
              
            // });

              // this.oneSignal.handleNotificationOpened().subscribe((res) => {
              //   // do something when a notification is opened
              //   console.log('event=ddd>',res)
              // });
            const uid = localStorage.getItem('uid');
            if (uid && uid !== null && uid !== 'null') {
              const param = {
                id: uid,
                fcm_token: data.userId
              };
              this.api.post('users/edit_profile', param).subscribe((data: any) => {
                console.log('user info=>', data);
              }, error => {
                console.log(error);
              });
            }

          });
          await this.oneSignal.endInit();
        }, 1000);
      }
      const uid = localStorage.getItem('uid');
      if (uid && uid !== null && uid !== 'null') {
        const param = {
          id: uid
        };
        this.api.post('users/getById', param).subscribe((data: any) => {
          console.log('user info=>', data);
          if (data && data.status === 200 && data.data && data.data.length) {
            this.util.userInfo = data.data[0];
          } else {
            localStorage.removeItem('uid');
          }
        }, error => {
          console.log(error);
        });

        this.api.post('favourite/getByUid', param).subscribe((data: any) => {
          console.log('fav data', data);
          if (data && data.status === 200 && data.data.length > 0) {
            this.util.haveFav = true;
            try {
              this.util.favIds = data.data[0].ids.split(',');
            } catch (error) {
              console.log('eroor', error);
            }
          } else {
            this.util.haveFav = false;
          }
        }, error => {
          this.util.haveFav = false;
          console.log('fav error', error);
        });
      }

      this.platform.backButton.subscribe(async () => {
        console.log('Back Button --------------->>>', this.router.url, 'ad', this.router.isActive('/tabs/', true));

        if (this.router.url === '/tabs/categories' || this.router.url === '/tabs/cart' ||
          this.router.url === '/tabs/orders' || this.router.url === '/tabs/account'
          || this.router.url === '/login') {
          console.log('can close');
          this.navCtrl.navigateRoot(['/tabs/home']);
        } else if (this.router.url === '/tabs/home' || this.router.url === '/cities') {
          navigator['app'].exitApp();
        }
      });
    });
    console.log("utility direction", this.util.direction);
  }

  logout() {
    const fuid = localStorage.getItem("fuid");
    localStorage.clear();
    localStorage.setItem("fuid", fuid);
    this.navCtrl.navigateRoot(['/login']);
  }

  login(){
    this.navCtrl.navigateRoot(['/login']);
  }

  getTranslate(str) {
    return this.util.getString(str);
  }
}
