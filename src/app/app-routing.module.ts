import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerViewComponent } from './beer-view/beer-view.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeerListComponent
  },
  {
    path: 'beer/:nro',
    component: BeerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
