import {Routes}  from '@angular/router';
import {ObjectsTableComponent} from './objects-table.component';
import {ObjectDetailsComponent} from './object-details.component';
import {CreateObjectComponent} from './create-object.component';
import {EditObjectComponent} from './edit-object.component';


export const objectsManagementRoutes: Routes = [
  {path: ':objects', component: ObjectsTableComponent},
  {path: ':objects/new', component: CreateObjectComponent},
  {path: ':objects/:id', component: ObjectDetailsComponent},
  {path: ':objects/edit/:id', component: EditObjectComponent},
];
