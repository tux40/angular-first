import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GaleriComponent } from './galeri/galeri.component';

const routes: Routes = [
   {
     path: '',
     component: HomeComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
     path: 'galeri',
     component: GaleriComponent
   }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
