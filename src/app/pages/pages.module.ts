import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BillboardComponent } from './billboard/billboard.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    BillboardComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
