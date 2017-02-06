import {Routes}  from '@angular/router';


export const objectManagementRoutes: Routes = [
  {path: ':objects/', component: AdminPanelComponent},
  {path: ':objects/:id', component: AdminPanelComponent},
  {path: ':objects/:action/:id', component: AdminPanelComponent},
];
