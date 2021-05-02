import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewHeaderComponent } from './view/common/header/header.component';
import { ViewFooterComponent } from './view/common/footer/footer.component';
import { ViewMenuBarComponent } from './view/common/menu-bar/menu-bar.component';
import { ViewLogoImageComponent } from './view/common/logo-image/logo-image.component';
import { ViewSnsBarComponent } from './view/common/sns-bar/sns-bar.component';
import { ViewCopyrightComponent } from './view/common/copyright/copyright.component';
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
import { ViewMemberComponent } from './view/members/member/member.component';
import { LinksComponent } from './page/links/links.component';
import { ViewLinksComponent } from './view/links/links.component';
import { ViewLinkComponent } from './view/links/link/link.component';
import { ContactComponent } from './page/contact/contact.component';
import { ViewContactComponent } from './view/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewHeaderComponent,
    ViewFooterComponent,
    ViewLogoImageComponent,
    ViewMenuBarComponent,
    ViewSnsBarComponent,
    ViewCopyrightComponent,
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
    ViewMemberComponent,
    LinksComponent,
    ViewLinksComponent,
    ViewLinkComponent,
    ContactComponent,
    ViewContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
