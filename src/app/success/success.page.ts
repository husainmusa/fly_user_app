import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  orderStatus:any = 1;
  date_time:any = localStorage.getItem('datetime');
  delivery_at:any = localStorage.getItem('deliveryAt');
  delivery_address:any = "";
  driver_id:any = "";
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public cart: CartService,
    public util: UtilService,
    public api: ApiService
  ) { 
    if(this.delivery_at === 'home'){
      this.delivery_address = JSON.parse(localStorage.getItem('deliveryAddress'));
      this.driver_id = localStorage.getItem('driverid');
      console.log("delivery Address",this.delivery_address );
    }
    this.route.queryParams.subscribe(params => {
        this.orderStatus = params.orderstatus;
        if(this.orderStatus == 0){
          this.createOrder();
        }
    });
  }

  ngOnInit() {
  }

  back() {
    // this.navCtrl.back();
  }

  async createOrder() {
    //////////// new
    //////////// new

    const storeId = [...new Set(this.cart.cart.map(item => item.store_id))];
    const orderStatus = [];
    storeId.forEach(element => {
      const info = {
        id: element,
        status: 'created'
      }
      orderStatus.push(info)
    });
    const notes = [
      {
        status: 1,
        value: 'Order Created',
        time: moment().format('lll'),
      }
    ];
    const param = {
      uid: localStorage.getItem('uid'),
      store_id: storeId.join(),
      date_time: this.date_time === 'today' ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
      paid_method: 'online',
      order_to: this.delivery_at,
      orders: JSON.stringify(this.cart.cart),
      notes: JSON.stringify(notes),
      address: this.delivery_at === 'home' ? JSON.stringify(this.delivery_address) : '',
      driver_id: this.delivery_at === 'home' ? this.driver_id : '',
      total: this.cart.totalPrice,
      tax: this.cart.orderTax,
      grand_total: this.cart.grandTotal,
      delivery_charge: this.cart.deliveryPrice,
      coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
      discount: this.cart.discount,
      pay_key: '',
      status: JSON.stringify(orderStatus),
      assignee: ''
    }

    console.log('param----->', param);

    this.util.show();
    this.api.post('orders/save', param).subscribe((data: any) => {
      console.log(data);
      this.util.hide();
      this.api.createOrderNotification(this.cart.stores);
      this.cart.clearCart();
      this.util.publishNewOrder();
      this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
    }, error => {
      console.log(error);
      this.util.hide();
      this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
    });
  }

  goToCart(){
    this.navCtrl.navigateForward('tabs/cart');
  }
}
