import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {DisplyAreaComponent} from "./disply-area/disply-area.component";

const routes: Routes = [

  {path: 'list', component: ListComponent},
  {path: 'disply-area/:id', component: DisplyAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

