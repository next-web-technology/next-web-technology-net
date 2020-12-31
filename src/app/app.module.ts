import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { ViewHeaderComponent } from './view/common/header/header.component';
import { ViewFooterComponent } from './view/common/footer/footer.component';
import { ViewMenuBarComponent } from './view/common/menu-bar/menu-bar.component';
import { ViewLogoImageComponent } from './view/common/logo-image/logo-image.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ViewHeaderComponent,
    ViewFooterComponent,
    ViewLogoImageComponent,
    ViewMenuBarComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
