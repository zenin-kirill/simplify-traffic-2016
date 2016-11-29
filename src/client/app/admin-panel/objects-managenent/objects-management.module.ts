import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

// import {Agency} from './agency';
// import {ActionType} from './action.type';
// import {City} from './city';
// import {Color} from './color';
// import {Country} from './country';
// import {Driver} from './driver';
// import {Route} from './route';
// import {Stop} from './stop';
// import {TimezoneType} from './timezone.type';
// import {Trip} from './trip';
// import {User} from './user';
// import {UserType} from './user.type';
// import {Vehicle} from './vehicle';
// import {VehicleType} from './vehicle.type';
//
// import {LanguageType} from './language.type';
// import {ManagedObject} from './managed-object';
// import {ManagedObjectType} from './managed-object.type';
import {CreateObjectComponent} from './create-object.component';
import {EditObjectComponent} from './edit-object.component';
import {ObjectDetailsComponent} from './object-details.component';
import {ObjectsManagementService} from './objects-management.service';
import {ObjectsTableComponent} from './objects-table.component';


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
    // Agency,
    // ActionType,
    // City,
    // Color,
    // Country,
    // Driver,
    // LanguageType,
    // ManagedObject,
    // ManagedObjectType,
    // Route,
    // Stop,
    // TimezoneType,
    // Trip,
    // User,
    // UserType,
    // Vehicle
  ],
  exports: [
    // Agency,
    // ActionType,
    // City,
    // Color,
    // Country,
    // Driver,
    // LanguageType,
    // ManagedObject,
    // ManagedObjectType,
    // Route,
    // Stop,
    // TimezoneType,
    // Trip,
    // User,
    // UserType,
    // Vehicle,
  ],
  providers: [
    ObjectsManagementService
  ]
})

export class ObjectManagementModule {
}
