///<reference path="app.routing.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { ObjectManagementModule } from './object-managenent/object-management.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';
import { RouteErrorComponent } from './route-error.component';
import { ForgetPasswordComponent } from './forget-password.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AdminPanelModule.forRoot(adminPanelRoutes),
    ObjectManagementModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    RouteErrorComponent,
    ForgetPasswordComponent,
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
