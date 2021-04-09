/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, Platform, LoadingController,AlertController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any = '';
  password: any = '';
  loggedIn: boolean;
  otpSent: boolean = false;
  otpVerified: boolean = false;
  recaptchaVerifier;
  otpconfirmationResult: firebase.auth.ConfirmationResult;
  phoneNumber:string = "";
  confirmationResult:any;
  newPhoneNumber:string = "";
  newOtpNumber:any;
  selectedCountry:string = "";
  phoneNumberExist:boolean = false;
  userid:any;
  constructor(
    private router: Router,
    public util: UtilService,
    private navCtrl: NavController,
    private api: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
  ) {
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }else {
        firebase.app(); // if already initialized, use that one
    }
    
   }

  ngOnInit() {
  }
    
  phoneNumberChange(event){
    this.newPhoneNumber = event.target.value;
  }

  otpNumber(event){
    this.newOtpNumber = event.target.value;
  }

  async sendOTP() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    if(this.newPhoneNumber != ''){
      if(this.newPhoneNumber.startsWith("0")){
        this.newPhoneNumber = this.newPhoneNumber.replace(/^0+/, '');
      }
       let concatphone = "972" + this.newPhoneNumber;
      //  let concatphone = "91" + this.newPhoneNumber;

      this.phoneNumber = concatphone;
      const orderParam = {
        phonenumber : concatphone
      };
      
      this.api.post("users/checkphone",orderParam).subscribe((data: any) => {
        console.log("checkphone response", data);
        console.log(data);
        if (data && data.status === 200) {
          if (data && data.data[0] && data.data[0].type === 'user') {
            if (data.data[0].status === '1') {
              this.userid = data.data[0].id;
              if((localStorage.getItem("fuid") == "") ||(typeof localStorage.getItem("fuid") === undefined)){
                this.getOTP();
                loading.dismiss();
              }else{
                const fuid = localStorage.getItem("fuid");
                if(fuid == this.userid){
                  localStorage.setItem('uid', this.userid);
                  this.navCtrl.navigateRoot(['']);
                  loading.dismiss();
                }else{
                  this.getOTP();
                  loading.dismiss();
                }
              }
              this.util.userInfo = data.data[0];
            } else {
              console.log('not valid');
              Swal.fire({
                title: this.util.getString('Error'),
                text: this.util.getString('please wait for admin to activate your account'),
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: this.util.getString('Need Help?'),
                backdrop: false,
                background: 'white'
              }).then(status => {
                if (status && status.value) {
                  // localStorage.setItem('helpId', data.data.id);
                  // this.router.navigate(['inbox']);
                  const inboxParam: NavigationExtras = {
                    queryParams: {
                      id: 0,
                      name: 'Support',
                      uid: data.data[0].id
                    }
                  };
                  this.router.navigate(['inbox'], inboxParam);
                  loading.dismiss();
                }else{
                  this.otpSent = false;
                  this.router.navigate(['/login']);
                  loading.dismiss();
                }
              });
            }
          } else {
            this.util.errorToast(this.util.getString('Not valid user'));
            this.email = '';
            this.password = '';
            loading.dismiss();
          }
        } else if (data && data.status === 500) {
          this.util.errorToast(data.data);
          loading.dismiss();
        } else {
          this.util.errorToast(this.util.getString('Something went wrong'));
          loading.dismiss();
        }
      }, error => {
        console.log('========>',error);
        this.loggedIn = false;
        this.util.errorToast(this.util.getString('Something went wrong'));
        loading.dismiss();
      });
    }
    else{
      loading.dismiss();
      this.presentAlert();
    }
  }


  async getOTP(){
   let concatphone = "+972 " + this.newPhoneNumber;
    // let concatphone = "+91" + this.newPhoneNumber;

    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
    firebase.auth().signInWithPhoneNumber(concatphone, this.recaptchaVerifier).then(data => {
      this.otpSent = true;
      this.otpconfirmationResult = data;
      loading.dismiss();
      }).catch(err => {
      console.log(err);
      loading.dismiss();
    });
  }

  async verifyOTP() {
    let otpphone =  this.newOtpNumber;
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    if(otpphone != ''){
      this.otpconfirmationResult.confirm(otpphone).then((data:object) => {
        console.log(data);
      if(data){
        console.log("phone number before send", this.phoneNumber);
        localStorage.setItem('uid', this.userid);
        localStorage.setItem('fuid', this.userid);
        const fcm = localStorage.getItem('fcm');
        if (fcm && fcm !== null && fcm !== 'null') {
          const updateParam = {
            id: this.userid,
            fcm_token: fcm
          };
          this.api.post('users/edit_profile', updateParam).subscribe((data: any) => {
            console.log('user info=>', data);
          }, error => {
            console.log(error);
          });
        }

        const favParam = {
          id: this.userid
        }
        this.api.post('favourite/getByUid', favParam).subscribe((data: any) => {
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
        this.navCtrl.navigateRoot(['']);
        loading.dismiss();
      }
      // You can redirect to other protected route.
      }).catch(err => {
        console.log(err);
        loading.dismiss();
        this.otpErrorAlert();
      })
    }
    else{
      this.otpAlert();
    }
  }

  login() {
    console.log('login');
    if (!this.email || !this.password) {
      this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
      return false;
    }
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailfilter.test(this.email)) {
      this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
      return false;
    }
    this.loggedIn = true;
    const param = {
      email: this.email,
      password: this.password
    };
    this.api.post('users/login', param).subscribe((data: any) => {
      this.loggedIn = false;
      console.log(data);
      if (data && data.status === 200) {
        if (data && data.data && data.data.type === 'user') {
          if (data.data.status === '1') {
            localStorage.setItem('uid', data.data.id);
            this.util.userInfo = data.data;
            const fcm = localStorage.getItem('fcm');
            if (fcm && fcm !== null && fcm !== 'null') {
              const updateParam = {
                id: data.data.id,
                fcm_token: fcm
              };
              this.api.post('users/edit_profile', updateParam).subscribe((data: any) => {
                console.log('user info=>', data);
              }, error => {
                console.log(error);
              });
            }

            const favParam = {
              id: data.data.id
            }
            this.api.post('favourite/getByUid', favParam).subscribe((data: any) => {
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

            this.navCtrl.navigateRoot(['']);
          } else {
            console.log('not valid');
            Swal.fire({
              title: this.util.getString('Error'),
              text: this.util.getString('Your are blocked please contact administrator'),
              icon: 'error',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonText: this.util.getString('Need Help?'),
              backdrop: false,
              background: 'white'
            }).then(status => {
              if (status && status.value) {
                // localStorage.setItem('helpId', data.data.id);
                // this.router.navigate(['inbox']);
                const inboxParam: NavigationExtras = {
                  queryParams: {
                    id: 0,
                    name: 'Support',
                    uid: data.data.id
                  }
                };
                this.router.navigate(['inbox'], inboxParam);
              }
            });
          }
        } else {
          this.util.errorToast(this.util.getString('Not valid user'));
          this.email = '';
          this.password = '';
        }
      } else if (data && data.status === 500) {
        this.util.errorToast(data.data.message);
      } else {
        this.util.errorToast(this.util.getString('Something went wrong'));
      }
    }, error => {
      console.log(error);
      this.loggedIn = false;
      this.util.errorToast(this.util.getString('Something went wrong'));
    });

  }
  
  resendOTP(){
    this.sendOTP();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter Your Number',
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
  async otpAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter the otp received in your given phone number',
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  async otpErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter a valid OTP',
      mode:'ios',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  async doLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    let name = (<HTMLInputElement>document.getElementById("username")).value;
    let email = (<HTMLInputElement>document.getElementById("useremail")).value;
    const requestdata = {'phone' : this.phoneNumber, 'name': name, 'email' : email}
    this.api.otplogin(requestdata).subscribe((response: any) => {
      if(response.msg == 'done'){
        localStorage.setItem('user_id', response.user_id);
    
            // this.events.publish('user_login', response.user_id);
            loading.dismiss();
            if (localStorage.getItem('cart_no')) {
              this.navCtrl.navigateBack('cart');
            }
            else {
              this.navCtrl.navigateRoot('home');
            }
      }
    })
  }

  

  ionViewDidEnter() {
    console.log('enter');
  }

  create() {
    this.router.navigate(['register']);
  }

  reset() {
    this.router.navigate(['reset-password']);
  }
}
