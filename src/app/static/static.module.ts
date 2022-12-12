import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StaticModule { }
