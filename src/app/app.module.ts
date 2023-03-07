import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './pages/to-do-list/to-do-list.component';
import { ToDoShowComponent } from './pages/to-do-show/to-do-show.component';
import { ToDoNewComponent } from './pages/to-do-new/to-do-new.component';
import { ToDoEditComponent } from './pages/to-do-edit/to-do-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Directive1Directive } from './directive-1.directive';
import { Pipe1Directive } from './pipes/pipe-1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoShowComponent,
    ToDoNewComponent,
    ToDoEditComponent,
    Directive1Directive,
    Pipe1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
