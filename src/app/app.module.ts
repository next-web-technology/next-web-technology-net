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
import { TechnologyComponent } from './page/technology/technology.component';
import { ViewTechnologyComponent } from './view/technology/technology.component';
import { MembersComponent } from './page/members/members.component';
import { ViewMembersComponent } from './view/members/members.component';
import { LinksComponent } from './page/links/links.component';
import { ViewLinksComponent } from './view/links/links.component';
import { ContactComponent } from './page/contact/contact.component';
import { ViewContactComponent } from './view/contact/contact.component';
import { ViewHeaderComponent } from './view/common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewHomeComponent,
    VisionComponent,
    ViewVisionComponent,
    BusinessComponent,
    ViewBusinessComponent,
    TechnologyComponent,
    ViewTechnologyComponent,
    MembersComponent,
    ViewMembersComponent,
    LinksComponent,
    ViewLinksComponent,
    ContactComponent,
    ViewContactComponent,
    ViewHeaderComponent,
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
