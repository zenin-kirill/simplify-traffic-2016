import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ObjectManagementModule } from "../objects-managenent/objects-management.module";
import { Ng2BootstrapModule } from "ng2-bootstrap/ng2-bootstrap";
import { AdminPanelComponent } from "./admin-panel.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from "./dashboard.service";
import { TripsStatusComponent } from "./trips-status.component";
import { SideBarComponent } from "./side-bar.component";
import { NavBarComponent } from "./nav-bar.component";
import {
  TranslationService, TranslationModule, LocaleService, Localization,
  LocalizationModule
} from "angular-l10n";

/**
 * Module of admin panel
 */
@NgModule({
            imports: [
              BrowserModule,
              HttpModule,
              RouterModule,
              CommonModule,
              ObjectManagementModule,
              Ng2BootstrapModule.forRoot(),
              TranslationModule,
              LocalizationModule
            ],
            declarations: [
              AdminPanelComponent,
              DashboardComponent,
              TripsStatusComponent,
              SideBarComponent,
              NavBarComponent,
            ],
            exports: [
              AdminPanelComponent,
              DashboardComponent,
              TripsStatusComponent,
              SideBarComponent,
              NavBarComponent,
            ],
            providers: [
              DashboardService,
              TranslationService,
              LocaleService
            ]
          })

export class AdminPanelModule {
}
