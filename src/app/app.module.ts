import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { ViewHomeComponent } from './view/home/home.component';
import { VisionComponent } from './page/vision/vision.component';
import { ViewVisionComponent } from './view/vision/vision.component';
import { BusinessComponent } from './page/business/business.component';
import { ViewBusinessComponent } from './view/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewHomeComponent,
    VisionComponent,
    ViewVisionComponent,
    BusinessComponent,
    ViewBusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
