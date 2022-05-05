import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiListPageRoutingModule } from './api-list-routing.module';

import { ApiListPage } from './api-list.page';
import { InfoModalComponent } from '../info-modal/info-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiListPageRoutingModule
  ],
  declarations: [ApiListPage, InfoModalComponent],
  entryComponents: [InfoModalComponent]
})
export class ApiListPageModule {}
