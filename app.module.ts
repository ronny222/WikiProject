import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {DisplyAreaComponent} from './disply-area/disply-area.component';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {ItemService} from "./item.service";
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AddItemComponent} from './add-item/add-item.component';
import {UpdateItemComponent} from './update-item/update-item.component';
import { FilterPipe }from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplyAreaComponent,
    AddItemComponent,
    UpdateItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
          path: 'disply-area',
          component: DisplyAreaComponent,
        },
        {
          path: '',
          component: ListComponent
        },
        {
          path: 'add-item',
          component: AddItemComponent
        },
        {
          path: 'update-item',
          component: UpdateItemComponent
        }
      ]
    ),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
