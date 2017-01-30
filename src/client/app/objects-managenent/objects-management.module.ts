import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {CreateObjectComponent} from './create-object.component';
import {EditObjectComponent} from './edit-object.component';
import {ObjectDetailsComponent} from './object-details.component';
import {ObjectsManagementService} from './objects-management.service';
import {ObjectsTableComponent} from './objects-table.component';
import { ManagementGuardService } from "./management-guard.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    CreateObjectComponent,
    EditObjectComponent,
    ObjectDetailsComponent,
    ObjectsTableComponent,
  ],
  exports: [],
  providers: [
    ObjectsManagementService,
    ManagementGuardService
  ]
})

export class ObjectManagementModule {
}
