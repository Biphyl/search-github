import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { SearchBarComponent } from '../searchbar/search-bar.component';
import { DisplayResultComponent } from '../display-result/display-result.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: "display-result", component: DisplayResultComponent },
  { path: "searchbar", component: SearchBarComponent },
  { path: 'searchbar/:id', component: SearchBarComponent },
  { path: "", redirectTo: "/searchbar", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [RouterModule],
  declarations: [
  ]

})
export class RoutingModule { }
