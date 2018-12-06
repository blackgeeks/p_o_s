import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dine', loadChildren: './dine/dine.module#DinePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: 'dine', loadChildren: './tables/tables.module#TablesPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
