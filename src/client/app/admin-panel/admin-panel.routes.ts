import { Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel.component";
import { DashboardComponent } from "./dashboard.component";
import { objectsManagementRoutes } from "../objects-managenent/objects-management.routes";
import { AuthGuardService } from "../auth-guard.service";

/**
 * Object that contains routes of admin panel
 */
export const adminPanelRoutes: Routes = [
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      ...objectsManagementRoutes,
    ]
  },
];
