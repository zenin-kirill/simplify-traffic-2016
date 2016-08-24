import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {HomeComponent} from '../../../pages/home/components/home';
import {ChartComponent} from '../../../pages/charts/components/charts';
import {GridComponent} from '../../../pages/grid/components/grid';
import {FormComponent} from '../../../pages/forms/components/forms';
import {TableComponent} from '../../../pages/tables/components/tables';
import {BSElementComponent} from '../../../pages/bootstrap-element/components/bs_element';
import {BlankPageComponent} from '../../../pages/blank-page/components/blank_page';
import {NG2Component} from '../../../pages/component/components/component';

import {VehiclesTableComponent} from '../../../pages/vehicles-table/components/vehicles_table';
import {UsersTableComponent} from '../../../pages/users-table/components/users_table';
import {AgenciesTableComponent} from '../../../pages/agencies-table/components/agencies_table';
import {RoutesTableComponent} from '../../../pages/routes-table/components/routes_table';

import {TopNavComponent} from '../../../shared/topnav/topnav';
import {SidebarComponent} from '../../../shared/sidebar/sidebar';

@Component({
  moduleId: module.id,
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.html',
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent]
})

@Routes([
  { path: '/home', component: HomeComponent },
  { path: '/chart', component: ChartComponent },
  { path: '/table', component: TableComponent },
	{ path: '/forms', component: FormComponent },
	{ path: '/element', component: BSElementComponent},
	{ path: '/grid', component: GridComponent },
	{ path: '/component', component: NG2Component },
	{ path: '/blank-page', component: BlankPageComponent },
  { path: '/vehicles', component: VehiclesTableComponent },
  { path: '/users', component: UsersTableComponent},
  { path: '/agencies', component: AgenciesTableComponent},
  { path: '/routes', component: RoutesTableComponent}
])

export class DashboardComponent { }
