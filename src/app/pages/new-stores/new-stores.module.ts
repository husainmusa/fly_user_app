import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStoresPageRoutingModule } from './new-stores-routing.module';

import { NewStoresPage } from './new-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewStoresPageRoutingModule
  ],
  declarations: [NewStoresPage]
})
export class NewStoresPageModule {}
