import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiListPageRoutingModule } from './api-list-routing.module';

import { ApiListPage } from './api-list.page';
import { DepositModalComponent } from '../deposit-modal/deposit-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiListPageRoutingModule
  ],
  declarations: [ApiListPage, DepositModalComponent],
  entryComponents: [DepositModalComponent]
})
export class ApiListPageModule {}
