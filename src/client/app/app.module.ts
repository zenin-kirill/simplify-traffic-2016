import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import { AdminPanelModule } from './admin-panel/admin-panel.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth.component';
import { RouteErrorComponent } from './route-error.component';
import { ForgetPasswordComponent } from './forget-password.component';
import { AuthService } from './auth.service';
import { NameListService } from './name-list.service';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    CommonModule,
    AdminPanelModule,
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
  },
    AuthService,
    NameListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
