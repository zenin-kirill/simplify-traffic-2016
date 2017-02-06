import {Routes}  from '@angular/router';

import {AdminPanelRoutes} from './admin-panel/admin-panel.routes';
import {AuthComponent} from './auth.component';
import {ForgotPasswordComponent} from './forgot-password.component';
import {RouteErrorComponent} from './route-error.cpmponent';

export const routes: Routes = [
  ...AdminPanelRoutes,
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'forgot', component: ForgotPasswordComponent},
  {path: '**', component: RouteErrorComponent},
];
