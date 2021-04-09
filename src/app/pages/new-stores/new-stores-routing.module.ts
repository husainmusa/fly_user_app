import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStoresPage } from './new-stores.page';

const routes: Routes = [
  {
    path: '',
    component: NewStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStoresPageRoutingModule {}
