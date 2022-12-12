import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { StaticComponent } from './static/static.component';
import { UserComponent } from './user/user.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    StaticComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
