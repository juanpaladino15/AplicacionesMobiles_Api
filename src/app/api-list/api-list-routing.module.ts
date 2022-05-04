import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiListPage } from './api-list.page';

const routes: Routes = [
  {
    path: '',
    component: ApiListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiListPageRoutingModule {}
