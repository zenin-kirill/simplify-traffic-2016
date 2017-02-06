import { Routes } from "@angular/router";
import { ObjectsTableComponent } from "./objects-table.component";
import { ObjectDetailsComponent } from "./object-details.component";
import { CreateObjectComponent } from "./create-object.component";
import { EditObjectComponent } from "./edit-object.component";
import { ManagementGuardService } from "./management-guard.service";


export const objectsManagementRoutes: Routes = [
  {path: ':objects', component: ObjectsTableComponent, canActivate: [ManagementGuardService]},
  {path: ':objects/new', component: CreateObjectComponent, canActivate: [ManagementGuardService]},
  {path: ':objects/:id', component: ObjectDetailsComponent, canActivate: [ManagementGuardService]},
  {
    path: ':objects/edit/:id',
    component: EditObjectComponent,
    canActivate: [ManagementGuardService]
  },
];
