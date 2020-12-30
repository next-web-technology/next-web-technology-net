import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './page/business/business.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { LinksComponent } from './page/links/links.component';
import { MembersComponent } from './page/members/members.component';
import { TechnologyComponent } from './page/technology/technology.component';
import { VisionComponent } from './page/vision/vision.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'vision',
    component: VisionComponent,
  },
  {
    path: 'business',
    component: BusinessComponent,
  },
  {
    path: 'technology',
    component: TechnologyComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
