import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoEditComponent } from './pages/to-do-edit/to-do-edit.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoShowComponent } from './pages/to-do-show/to-do-show.component';

const routes: Routes = [
  { path: '',   redirectTo: '/to-do', pathMatch: 'full' },
  { path: 'to-do', component: ToDoListComponent },
  { path: 'to-do/new', component: ToDoShowComponent },
  { path: 'to-do/edit/:id', component: ToDoEditComponent },
  { path: 'to-do/:id', component: ToDoShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
