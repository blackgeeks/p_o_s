import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettlementpopoverPage } from './settlementpopover.page';

const routes: Routes = [
  {
    path: '',
    component: SettlementpopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettlementpopoverPage]
})
export class SettlementpopoverPageModule {}
