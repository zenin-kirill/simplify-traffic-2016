import { NgModule, APP_INITIALIZER } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { CookieService } from "angular2-cookie/core";
import { appRoutes } from "./app.routes";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth.component";
import { RouteErrorComponent } from "./route-error.component";
import { ForgetPasswordComponent } from "./forget-password.component";
import { AuthService } from "./auth.service";
import { NameListService } from "./name-list.service";
import { AuthGuardService } from "./auth-guard.service";
import { LocaleConfigService, initLocalization } from "./locale-config.service";
import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';
import { Ng2BootstrapModule } from "ng2-bootstrap/ng2-bootstrap";
import { ObjectsManagementService } from "./objects-managenent/objects-management.service";

export function cookieServiceFactory() {
  return new CookieService();
}

/**
 * Главный модуль приложения
 */
@NgModule({
            imports: [
              RouterModule.forRoot(appRoutes),
              BrowserModule,
              HttpModule,
              FormsModule,
              CommonModule,
              AdminPanelModule,
              TranslationModule,
              Ng2BootstrapModule.forRoot()
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
              {
                provide: CookieService,
                useFactory: cookieServiceFactory
              },
              TranslationService,
              LocaleService,
              LocaleConfigService,
              {
                provide: APP_INITIALIZER,
                useFactory: initLocalization,
                deps: [LocaleConfigService],
                multi: true
              },
              AuthService,
              NameListService,
              AuthGuardService,
              ObjectsManagementService
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
