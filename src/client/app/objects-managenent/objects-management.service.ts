import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/timeout";
import "rxjs/add/observable/throw";
import { ManagedObjectType, managedObjectTypes } from "../types/managed-object.type";
import { Agency } from "../types/agency";
import { Stop } from "../types/stop";
import { Calendar } from "../types/calendar";
import { CalendarDate } from "../types/calendar-date";
import { City } from "../types/city";
import { Country } from "../types/country";
import { Driver } from "../types/driver";
import { Route } from "../types/route";
import { Shape } from "../types/shape";
import { StopTime } from "../types/stop-time";
import { Trip } from "../types/trip";
import { User } from "../types/user";
import { Vehicle } from "../types/vehicle";
import { unmanagedObjectTypes } from "../types/unmanaged-object.type";
import { Session } from "../types/session";
import { TripStatus } from "../types/trip-status";
import { VehicleStatus } from "../types/vehicle-status";

@Injectable()
export class ObjectsManagementService {
  private readonly requestTimeout: number = 10000; // значение таймаута для выполн. запроса
//  managedObjectsRegister: any = {
//    user: {
//      identifiers : [],
//      associations: [],
//      objectLinks: []
//    },
//    country: {json: 'countries', type: ManagedObjectType.country, name: 'Country'},
//    city: {json: 'cities', type: ManagedObjectType.city, name: 'City'},
//    agency: {json: 'agencies', type: ManagedObjectType.agency, name: 'Agency'},
//    route: {json: 'routes', type: ManagedObjectType.route, name: 'Route'},
//    vehicle: {json: 'vehicles', type: ManagedObjectType.vehicle, name: 'Vehicle'},
//    driver: {json: 'drivers', type: ManagedObjectType.driver, name: 'Driver'},
//    stop: {json: 'stops', type: ManagedObjectType.stop, name: 'Stop'},
//    trip: {json: 'trips', type: ManagedObjectType.trip, name: 'Trip'},
//    calendar: {json: 'calendars', type: ManagedObjectType.calendar, name: 'Calendar'},
//    calendarDate: {json: 'calendar-dates', type: ManagedObjectType.calendarDate, name:
// 'CalendarDate'}, shape: {json: 'shapes', type: ManagedObjectType.shape, name: 'Shape'},
// stopTime: {json: 'stop-times', type: ManagedObjectType.stopTime, name: 'StopTime'} }

  constructor(private http: Http) {
    try {
      for (let obj in managedObjectTypes) {

        this.getData(managedObjectTypes[obj]['json'])
            .subscribe(
              (data: any) => {
                switch (data['data'][0]['type']) {
                  case managedObjectTypes.agency.json:
                    let agency = new Agency();
                    agency.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.stop.json:
                    let stop = new Stop();
                    stop.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.calendar.json:
                    let calendar = new Calendar();
                    calendar.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.calendarDate.json:
                    let calendarDate = new CalendarDate();
                    calendarDate.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.city.json:
                    let city = new City();
                    city.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.country.json:
                    let country = new Country();
                    country.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.driver.json:
                    let driver = new Driver();
                    driver.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.route.json:
                    let route = new Route();
                    route.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.shape.json:
                    let shape = new Shape();
                    shape.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.stopTime.json:
                    let stopTime = new StopTime();
                    stopTime.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.trip.json:
                    let trip = new Trip();
                    trip.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.user.json:
                    let user = new User();
                    user.setOnJsonObject(data['data'][0]);
                    break;
                  case managedObjectTypes.vehicle.json:
                    let vehicle = new Vehicle();
                    vehicle.setOnJsonObject(data['data'][0]);
                    break;
                  default:
                    throw new Error('Unknown object type:' + data['data'][0]['type']);
                }
              },

              (e: any) => {
                console.log('ManagedObjectFactory: ' + e.message);
                if (e.stack !== undefined) {
                  console.log(e.stack);
                }
              });
      }

      for (let obj in unmanagedObjectTypes) {
        this.getData(unmanagedObjectTypes[obj]['json'])
            .subscribe(
              (data: any) => {
                switch (data['data'][0]['type']) {
                  case unmanagedObjectTypes.session.json:
                    let session = new Session();
                    session.setOnJsonObject(data['data'][0]);
                    break;
                  case unmanagedObjectTypes.tripStatus.json:
                    let tripStatus = new TripStatus();
                    tripStatus.setOnJsonObject(data['data'][0]);
                    break;
                  case unmanagedObjectTypes.vehicleStatus.json:
                    let vehicleStatus = new VehicleStatus();
                    vehicleStatus.setOnJsonObject(data['data'][0]);
                    break;
                  default:
                    throw new Error('Unknown object type:' + data['data'][0]['type']);
                }
              },

              (e: any) => {
                console.log('UnmanagedObjectFactory: ' + e.message);
                if (e.stack !== undefined) {
                  console.log(e.stack);
                }
              });
      }
    } catch (e) {
      console.log(e.message);
    }
  };


  /**
   * Функция загрузки данных с сервера (GET запрос)
   * @returns Observable<Any> наблюдаемый объект с данными в формате JSON-API
   */
  private getData(objectName: string): Observable<any> {
    //return this.http.get('http://api.simplify-traffic.com/v1/users/authentication')
    return this.http.get('../assets/' + objectName + '.json')
               .timeout(this.requestTimeout)
               .map((res: Response) => res.json())
               .catch(ObjectsManagementService.getDataHandleError);
  }

  /**
   * Функция-обработчик ошибок отправки/приема данных с сервера
   * @param error перехваченное исключение
   * @returns Observable<Error> объект ошибки, возвращаемый вместо наблюдаемого объекта
   */
  private static getDataHandleError(error: any): Observable<Error> {
    let errMsg = (error.message) ? error.message :
      error.status ?
        `${error.status} - ${error.statusText} : ${error._body}` : 'Unknow server error';
    return Observable.throw(new Error(errMsg));
  }
}
