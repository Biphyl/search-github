import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './searchbar/search-bar.component';
//import { UserdisplayComponent } from "./userdisplay/UserdisplayComponent";
import { DisplayResultComponent } from './display-result/display-result.component';
import { RequestService } from './user-request/request.service';
import { NotFoundComponent } from './not-found/not-found.component';
//import { UserdisplayComponent } from './userdisplay/userdisplay.component'
import { RoutingModule } from './routing/routing.module'

const routes: Routes = [
  { path: "resultdisplay", component: DisplayResultComponent },
  { path: "searchbar", component: SearchBarComponent },
  { path: "", redirectTo: "/searchbar", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DisplayResultComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
