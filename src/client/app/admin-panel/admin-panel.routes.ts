import {Routes}  from '@angular/router';

import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './dashboard.component';
import { objectsManagementRoutes } from './objects-managenent/objects-management.routes';

export const adminPanelRoutes: Routes = [
  {path: 'admin-panel', component: AdminPanelComponent, children:
  [
    {path: 'dashboard', component: DashboardComponent},
    ...objectsManagementRoutes,
  ]},
];
