/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit, ViewChild, ElementRef ,NgZone } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { getLocaleDirection } from '@angular/common';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
declare var google: any;

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  @ViewChild('map') mapEle: ElementRef;
  map: any;
  marker: any;
  lat: any;
  lng: any;
  latitude:any = "";
  longitude:any = "";
  address: any = '';
  house: any = '';
  landmark: any = '';
  title: any = 'home';
  pincode: any = '';
  id: any;
  from: any;
  timestamp:any;
  dragged:any = false;
  autocomplete: { input: string; };
  autocompleteItems:Array<any> = [];
  GoogleAutocomplete: any;
  location: any;
  placeid:any;
  placesService: any;

  // @ViewChild('map') private mapElement: ElementRef;
  @ViewChild('pleaseConnect') private pleaseConnect: ElementRef;

  
  constructor(
    private geolocation: Geolocation,
    private navCtrl: NavController,
    private api: ApiService,
    public util: UtilService,
    private route: ActivatedRoute,
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private nativeGeocoder: NativeGeocoder,
    private locationAccuracy: LocationAccuracy,
    public zone: NgZone,
    public router:Router

  ) {
    // this.initializeMapInfo();
  }
 
  ionViewWillEnter(){
    setTimeout(() =>{
      this.initializeMapInfo();
      // let marker =  new google.maps.Marker({
      //   position: { lat: this.lat, lng:  this.lng},
      //   map:  this.map,
      //   // draggable: true,
      // });
      // google.maps.event.addListener(marker, 'click', function() {
      //   console.log('draggged runnnn')
      // })
    },500)
      
  }
  initializeMapInfo(){
    let me = this
    me.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    
    // this.autocomplete = { input: '' };
    me.autocompleteItems = [];

    me.checkGPSPermission();
    me.route.queryParams.subscribe(data => {
      console.log(data);
      if (data && data.from) {
        me.from = 'edit';
        const info = JSON.parse(data.data);
        console.log('da===>', info);
        me.address = info.address;
        me.house = info.house;
        me.id = info.id;
        me.landmark = info.landmark;
        me.lat = info.lat;
        me.lng = info.lng;
        me.latitude =  info.lat;
        me.longitude = info.lng;
        me.pincode = info.pincode;
      } else {
        me.from = 'new';
      }
      me.platform.ready().then(()=>{
        
        var mapOptions = {
          center:{lat:31.92923,lng:34.86563},
          zoom:7
        }
        console.log('me.mapEle.nativeElement',me.mapEle.nativeElement)
        me.map = new google.maps.Map(me.mapEle.nativeElement ,mapOptions);
        me.placesService = new google.maps.places.PlacesService(me.map.map);
        new google.maps.Marker({
          position: mapOptions.center,
          map:  me.map,
          // draggable: true,
        });
        // google.maps.event.addListener(me.map, "dragend", function() {
        //     console.log('dasd')
        // });
      })
      me.GetCrrunt();
    });
  }

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        // alert(err);
      }
    );
  }

  requestGPSPermission() {
    console.log("inside");
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
             // alert('requestPermission Error requesting location permissions ')
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
   //   error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
  
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      // this.locationCoords.accuracy = resp.coords.accuracy;
      // this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      //alert('Error getting location' + error);
    });
  }

  GetCrrunt(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }
  GetLocation(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position:any)=>{
      console.log('==================>',position)
      if(!this.dragged){
        var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.getAddressFromCoords(position.coords.latitude, position.coords.longitude);
        if(this.marker == null){
          this.marker = new google.maps.Marker({
            position:gps,
            map:this.map,
            // draggable: true,
            animation: google.maps.Animation.DROP,
            title:'my position'
          });
        }else{
          this.marker.setPosition(gps);
        }
        this.map.panTo(gps);
        console.log(position.coords.latitude.toString(), "position");
        this.latitude = position.coords.latitude.toString();
        this.longitude = position.coords.longitude.toString();
        this.timestamp = (new Date(position.timestamp)).toString();
      }
      
      google.maps.event.addListener(this.marker,'dragend', () => {
        this.dragged = true;
        console.log("dragged");
        this.map.panTo(this.marker.getPosition());
        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();
        

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
    })
    console.log(this.latitude , this.longitude, "current Position");
    this.geolocation.getCurrentPosition().then((resp) => {

      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
    //  let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  ngOnInit() {
    // setTimeout(() =>{
    //   this.initializeMapInfo();
    //   // let marker =  new google.maps.Marker({
    //   //   position: { lat: this.lat, lng:  this.lng},
    //   //   map:  this.map,
    //   //   // draggable: true,
    //   // });
    //   // google.maps.event.addListener(marker, 'click', function() {
    //   //   console.log('draggged runnnn')
    //   // })
    // },500)
  


  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        console.log('resultsd=>',result)
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        console.log('responseAddress=======>',responseAddress)
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
        this.house = responseAddress[0][0]
        this.landmark = responseAddress[1]
        this.map = new google.maps.Map(this.mapEle.nativeElement, {
          center: new google.maps.LatLng(lattitude, longitude),
          zoom: 16,
        });    
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let labelIndex = 0;
        new google.maps.Marker({
            position: { lat: this.lat, lng:  this.lng},
            label: labels[labelIndex++ % labels.length],
            map:  this.map,
            // draggable: true,
          });
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });
      console.log("this address",  this.address);
  }

  addAddress() {
    if (this.address === '' || this.address == 'Address Not Available!' || this.landmark === '' || this.house === '' ) {

      this.util.errorToast(this.util.getString('All Fields are required'));
      return false;
    }


    console.log('this.latitude',this.latitude);
    console.log('this.longitude',this.longitude)
    if (this.lat && this.lng ) {
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({ address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode }, (results, status) => {
        console.log(results, status);
        if (status === 'OK' && results && results.length) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          this.latitude =  this.lat;
          this.longitude =  this.lng;
          const param = {
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark,
            pincode: this.pincode
          };
          this.util.show();
          this.api.post('address/save', param).subscribe((data: any) => {
            this.util.hide();
            if (data && data.status === 200) {
              this.util.publishNewAddress();
              // this.zone.run(() => {
              //   this.router.navigate(['/address'])
              //   this.navCtrl.back();
              // })
              this.router.navigate(['/address'])
              this.util.showToast('Address added', 'success', 'bottom');
              this.util.hide();
            } else {
              this.util.errorToast(this.util.getString('Something went wrong'));
              this.util.hide();
            }
          }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
          });
         
        } else {
          this.util.errorToast(this.util.getString('Something went wrong'));
          return false;
        }
      });
    }else{
      this.util.errorToast(this.util.getString('Something went wrong'));
      console.log('elas===lat=>',this.lat)
      console.log('elas===lng=>',this.lng)
    }


  }

  updateAddress() {

    if (this.address === '' || this.landmark === '' || this.house === '' ) {
      this.util.errorToast(this.util.getString('All Fields are required'));
      return false;
    }

    this.lat = this.latitude;
    this.lng = this.longitude;

    if (this.lat && this.lng ) {
      const geocoder = new google.maps.Geocoder;
      geocoder.geocode({ address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode }, (results, status) => {
        // console.log('=======results===status==>',results, status);
        if (status === 'OK' && results && results.length) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          this.latitude =  this.lat;
          this.longitude =  this.lng;
          const param = {
            id: this.id,
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark,
            pincode: this.pincode
          };
          this.util.show();
          this.api.post('address/editList', param).subscribe((data: any) => {
            this.util.hide();
            if (data && data.status === 200) {
              this.util.publishNewAddress();
              // this.zone.run(() => {
              //   this.router.navigate(['/address'])
              //  // this.navCtrl.back();
              // })
              this.router.navigate(['/address'])
              this.util.showToast('Address updated', 'success', 'bottom');
              this.util.hide();
            } else {
              this.util.errorToast(this.util.getString('Something went wrong'));
              this.util.hide();
            }
          }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
          });
        } else {
          this.util.errorToast(this.util.getString('Something went wrong'));
          return false;
        }
      });
    }else{
      this.util.errorToast(this.util.getString('Something went wrong'));
    }


  }

  back() {
    // this.zone.run(() => {
    //   this.navCtrl.back();

    // })
    this.router.navigate(['/address'])
  }

  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults(){
    if (this.address == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.address, language :'he-IL'},
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
    
  SelectSearchResult(item) {
    console.log(item)
    this.placeid = item.place_id;
    this.address = item.description;
    this.autocompleteItems = [];
    this.house = item.structured_formatting.main_text;
    this.landmark  = item.structured_formatting.secondary_text;
    const geocoder = new google.maps.Geocoder;
      geocoder.geocode({ address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode }, (results, status) => {
        // console.log('============selected result====>>>>>>>>>>>>>>',results, status);
        if (status === 'OK' && results && results.length) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let labelIndex = 0;
          // console.log('this.lat==============>',this.lat)
          // console.log('this.lng==============>',this.lng)
          this.map = new google.maps.Map(this.mapEle.nativeElement, {
            center: new google.maps.LatLng(results[0].geometry.location.lat(),  results[0].geometry.location.lng()),
            zoom: 16,
          });    
          new google.maps.Marker({
              position: { lat: this.lat, lng:  this.lng},
              label: labels[labelIndex++ % labels.length],
              map:  this.map,
              // draggable: true,
            });

        
        }
      })
        
  }
  
}
