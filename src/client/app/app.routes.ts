import { Routes}  from '@angular/router';

import { AuthComponent} from './auth.component';
import { ForgetPasswordComponent} from './forget-password.component';
import { RouteErrorComponent} from './route-error.component';
import { adminPanelRoutes } from './admin-panel/admin-panel.routes';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'forget', component: ForgetPasswordComponent},
  {path: 'err', component: RouteErrorComponent},
  ...adminPanelRoutes,
];
