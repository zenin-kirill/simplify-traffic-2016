import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ObjectManagementModule} from '../objects-managenent/objects-management.module';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { TripsStatusComponent } from './trips-status.component';
import { SideBarComponent } from './side-bar.component';
import { NavBarComponent } from './nav-bar.component';
import { LoadErrorComponent } from './load-error.component';
import { LocalService } from './local.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    CommonModule,
    ObjectManagementModule,
    Ng2BootstrapModule
  ],
  declarations: [
    AdminPanelComponent,
    DashboardComponent,
    TripsStatusComponent,
    //TripsStatus,
    SideBarComponent,
    NavBarComponent,
    LoadErrorComponent,
  ],
  exports: [
    AdminPanelComponent,
    DashboardComponent,
    TripsStatusComponent,
    //TripsStatus,
    SideBarComponent,
    NavBarComponent,
    LoadErrorComponent,
  ],
  providers: [
    DashboardService,
    LocalService
  ]
})

export class AdminPanelModule {
}
