import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import {LoginComponent} from './pages/login/components/login';
import {AdminPanelComponent} from './layouts/admin-panel/components/admin_panel';
import {ErrorPageComponent} from './pages/error-page/components/error_page';

import {DashboardComponent} from './pages/dashboard/components/st_dashboard';
import {ChartComponent} from './pages/charts/components/charts';
import {GridComponent} from './pages/grid/components/grid';
import {FormComponent} from './pages/forms/components/forms';
import {TableComponent} from './pages/tables/components/tables';
import {BSElementComponent} from './pages/bootstrap-element/components/bs_element';
import {BlankPageComponent} from './pages/blank-page/components/blank_page';
import {NG2Component} from './pages/component/components/component';

import {VehiclesTableComponent} from './pages/vehicles-table/components/vehicles_table';
import {UsersTableComponent} from './pages/users-table/components/users_table';
import {AgenciesTableComponent} from './pages/agencies-table/components/agencies_table';
import {RoutesTableComponent} from './pages/routes-table/components/routes_table';

import {AgencyDetailsComponent} from './pages/agency-details/components/agency_details';
import {AgencyActionComponent} from './pages/agency-action/components/agency_action';

const appRoutes:Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  //{path: 'forgot', component: ForgotComponent},
  {
    path: 'admin-panel', component: AdminPanelComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'chart', component: ChartComponent},
    {path: 'tables', component: TableComponent},
    {path: 'forms', component: FormComponent},
    {path: 'element', component: BSElementComponent},
    {path: 'grid', component: GridComponent},
    {path: 'component', component: NG2Component},
    {path: 'blank-page', component: BlankPageComponent},
    {path: 'vehicles', component: VehiclesTableComponent},
    {path: 'users', component: UsersTableComponent},
    {path: 'routes', component: RoutesTableComponent},

    {path: 'agencies', component: AgenciesTableComponent},
    {path: 'agencies/1', component: AgencyDetailsComponent},
    {path: 'agencies/edit/1', component: AgencyActionComponent},
    {path: 'agencies/new', component: AgencyActionComponent}
  ]
  },
  {path: '**', component: ErrorPageComponent},
  //{path: 'error', component: ErrorComponent},
  //{path: '**', redirectTo: '/error', pathMatch: 'full'}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);

