import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsEditComponent } from './pages/item-edit/items-edit.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ItemsShowComponent } from './pages/items-show/items-show.component';

const routes: Routes = [
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/new', component: ItemsShowComponent },
  { path: 'items/:id/edit', component: ItemsEditComponent },
  { path: 'items/:id', component: ItemsShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
