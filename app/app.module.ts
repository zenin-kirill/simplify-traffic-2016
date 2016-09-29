///<reference path="app.routing.ts"/>
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';

import {LoginComponent} from './pages/login/components/login';
import {DashboardComponent} from './layouts/dashboard/components/dashboard';
import {HomeComponent} from './pages/home/components/home';
import {ChartComponent} from './pages/charts/components/charts';
import {TableComponent} from './pages/tables/components/tables';
import {FormComponent} from './pages/forms/components/forms';
import {GridComponent} from './pages/grid/components/grid';
import {NG2Component} from './pages/component/components/component';
import {BlankPageComponent} from './pages/blank-page/components/blank_page';
import {VehiclesTableComponent} from './pages/vehicles-table/components/vehicles_table';
import {UsersTableComponent} from './pages/users-table/components/users_table';
import {AgenciesTableComponent} from './pages/agencies-table/components/agencies_table';
import {RoutesTableComponent} from './pages/routes-table/components/routes_table';
import {TopNavComponent} from './shared/topnav/topnav';
import {SidebarComponent} from './shared/sidebar/sidebar';
import {AppComponent} from './layouts/base/base';
import {CommonModule} from '@angular/common';
import {Ng2BootstrapModule} from '../node_modules/ng2-bootstrap/ng2-bootstrap';
import {TimelineComponent} from './pages/home/components/time_line';
import {ChatComponent} from './pages/home/components/chat_cmp';
import {NotificationComponent} from './pages/home/components/notifications_cmp';
import {BSElementComponent} from './pages/bootstrap-element/components/bs_element';
import {AgencyActionComponent} from './pages/agency-action/components/agency_action';
import {AgencyDetailsComponent} from './pages/agency-details/components/agency_details';
import {ErrorPageComponent} from './pages/error-page/components/error_page';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    Ng2BootstrapModule,
    routing,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ChartComponent,
    TableComponent,
    FormComponent,
    GridComponent,
    NG2Component,
    BlankPageComponent,
    VehiclesTableComponent,
    UsersTableComponent,
    AgenciesTableComponent,
    AgencyActionComponent,
    AgencyDetailsComponent,
    RoutesTableComponent,
    TopNavComponent,
    SidebarComponent,
    TimelineComponent,
    ChatComponent,
    NotificationComponent,
    BSElementComponent,
    ErrorPageComponent
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
