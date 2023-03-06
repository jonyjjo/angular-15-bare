import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { ItemsShowComponent } from './pages/items-show/items-show.component';
import { ItemNewComponent } from './pages/item-new/items-new.component';
import { ItemsEditComponent } from './pages/item-edit/items-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemsShowComponent,
    ItemNewComponent,
    ItemsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
