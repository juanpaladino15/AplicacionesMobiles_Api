import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiListPageRoutingModule } from './api-list-routing.module';

import { ApiListPage } from './api-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiListPageRoutingModule
  ],
  declarations: [ApiListPage]
})
export class ApiListPageModule {}
