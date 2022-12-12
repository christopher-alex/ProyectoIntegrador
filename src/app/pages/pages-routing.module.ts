import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { BillboardComponent } from './billboard/billboard.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes : Routes = [
    {path:'dashboard', component:DashboardComponent, children:[
    {path:'abouth', component:AboutComponent},
    {path:'billboard', component:BillboardComponent},
    {path:'contact', component:ContactComponent},
    {path:'home', component:HomeComponent},
    {path:'movies', component:MoviesComponent},
  ]}
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
