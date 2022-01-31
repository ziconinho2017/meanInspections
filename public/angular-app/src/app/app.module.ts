import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InspectionsComponent } from './inspections/inspections.component';
import { InspectionComponent } from './inspection/inspection.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionsComponent,
    InspectionComponent,
    NavigatorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : '',
        component:HomeComponent
      },
      {
        path : 'home',
        component:HomeComponent
      },
      {
        path : 'inspections',
        component: InspectionsComponent
      },
      {
        path : 'inspection/:insId',
        component: InspectionComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
