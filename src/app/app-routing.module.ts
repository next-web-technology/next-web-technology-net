import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './page/business/business.component';
import { HomeComponent } from './page/home/home.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
