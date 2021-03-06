import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DinePage } from './dine.page';
import {TablesComponent} from '../components/tables/tables.component';

const routes: Routes = [
  {
    path: '',
    component: DinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DinePage, TablesComponent]
})
export class DinePageModule {}
