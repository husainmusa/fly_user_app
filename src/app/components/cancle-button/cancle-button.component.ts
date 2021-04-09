import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-cancle-button',
  templateUrl: './cancle-button.component.html',
  styleUrls: ['./cancle-button.component.scss'],
})
export class CancleButtonComponent implements OnInit {
 @Input() btnLable;
 @Input() creationTime;
 @Output() onClickBtn : EventEmitter<any> = new EventEmitter();

 buttonVisible:boolean;

 lastSecond:number = 0;
  constructor( public util: UtilService,) { }

  ngOnInit() {
    
    this.buttonVisible = false;

    if(this.creationTime){
      let oderCreationTime = new Date(this.creationTime).getTime();
      let currentTime = new Date().getTime();
      let diffrenceTime = currentTime - oderCreationTime;
      let totalSecondsFromCreation =  diffrenceTime/1000;
      
      
      if(totalSecondsFromCreation < 30){        
        this.lastSecond = Math.round(30 - (totalSecondsFromCreation || 0));
        const timer = ()=>{   
          if(this.lastSecond<=0) {
            this.buttonVisible = false;
          }else{
            this.lastSecond = Math.round(this.lastSecond - 1)
            setTimeout(()=>{timer();},1000);
            this.buttonVisible = true;
          }
        }
        timer();

      }
    }

  }

  cancleOrder(){
   this.onClickBtn.emit(null);
  }

}
