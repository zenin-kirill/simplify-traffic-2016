import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "angular2-cookie/core";
import { Agency } from "./types/agency";
import { User } from "./types/user";
import { Session } from "./types/session";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/timeout";
import "rxjs/add/observable/throw";

/**
 * Service that implements the authorization functionality
 */
@Injectable()
export class AuthService {
  private status: boolean    = false;   // authorization status
  private currentUrl: string = '';      // address from which user routed
  private currentSession: Session;      // current user session
  private currentUser: User;            // current user
  private currentAgency: Agency;        // current agency

  private readonly requestTimeout: number = 10000;  // request timeout value

  /**
   * Constructor, when initializing service, tries to read authorization data from cookie files
   */
  constructor(private http: Http, private cookieService: CookieService, private router: Router) {
    try {
      this.getAuthDataWithoutLogIn();
    }
    catch (e) {
      console.log('AuthService: In the cookie there is no auth data')
    }
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getCurrentAgency(): Agency {
    return this.currentAgency;
  }

  getStatus(): boolean {
    return this.status;
  }

  getCurrentUrl(): string {
    return this.currentUrl;
  }

  setCurrentUrl(value: string) {
    this.currentUrl = value;
  }

  /**
   * Function that tries to get authorization data from cookies without entering login data
   */
  getAuthDataWithoutLogIn() {
    if (this.status === false) {
      try {
        let sessionData: Object = this.cookieService.getObject('session');
        let userData: Object    = this.cookieService.getObject('user');
        let agencyData: Object  = this.cookieService.getObject('agency');

        this.currentSession = new Session();
        this.currentUser    = new User();
        this.currentAgency  = new Agency();

        this.currentSession.setOnJsonObject(sessionData);
        this.currentUser.setOnJsonObject(userData);
        this.currentAgency.setOnJsonObject(agencyData);

        this.status = true;

      }
      catch (e) {
        this.currentSession = null;
        this.currentUser    = null;
        this.currentAgency  = null;
        this.status         = false;
        throw e;
      }
    }
  }

  /**
   * Function that tries to log in by entering user authorization data
   * @param login
   * @param password
   * @returns Observable<null> the observed object (result of execution)
   */
  getAuthDataWithLogIn(login: string, password: string): Observable<null> {
    // subscription to receive authorization data from the server
    this.dowloadAuthData(login, password).subscribe();
    return this.dowloadAuthData(login, password).map(
      // verification of received data
      (loadedData: any) => {
        if (loadedData === null || loadedData === undefined) {
          throw new Error('Impossible to load auth data from server');
        }

        // try to parse and add new data to application and cookies
        this.addAuthDataToApp(loadedData);

        // if the authorization is successful, notify the authorization component
        if (this.status === true) {
          return Observable.of<null>();
        }
        else {
          throw new Error('Impossible to complite auth');
        }
      }).catch((e) => {
      throw e;
    });
  }

  /**
   * The function that completes the authorization process by redirect the user to the main or
   * previous page (depending on which page the user was going to visit, if immediately to the
   * authorization page - get to the main page)
   */
  completeLogIn() {
    if (this.getCurrentUrl() !== '') {
      this.router.navigateByUrl(this.getCurrentUrl())
          .catch((e) => {throw e});
      this.setCurrentUrl('');
    }
    else {
      this.router.navigate(['/admin-panel', 'dashboard'])
          .catch((e) => {throw e});
    }
  }

  /**
   * Function that makes exit from current user, with all user data being deleted
   */
  logOut() {
    this.status         = false;
    this.currentSession = null;
    this.currentUser    = null;
    this.currentAgency  = null;

    this.cookieService.removeAll();
    this.router.navigate(['/auth'])
        .catch((e) => {throw e});
  }

  /**
   * Function of parsing and adding authorization data to the application
   * @param loadedData authorization data downloaded from server
   */
  private addAuthDataToApp(loadedData: any) {
    try {
      if (loadedData['data']['type'] === 'user-sessions') {
        this.currentSession = new Session();
        this.currentSession.setOnJsonObject(loadedData['data'])
        this.addAuthDataToCookie('session', loadedData['data']);
      }
      else {
        throw new Error('Invalid session data');
      }

      // search of the necessary included objects
      for (let i = 0; i < loadedData['included'].length; i++) {
        switch (loadedData['included'][i]['type']) {
          case 'users':
            this.currentUser = new User();
            this.currentUser.setOnJsonObject(loadedData['included'][i]);
            this.addAuthDataToCookie('user', loadedData['included'][i]);
            break;
          case 'agencies':
            this.currentAgency = new Agency();
            this.currentAgency.setOnJsonObject(loadedData['included'][i]);
            this.addAuthDataToCookie('agency', loadedData['included'][i]);
            break;
          default:
            throw new Error('Invalid included data');
        }
      }

      if ((this.currentUser === null || this.currentUser === undefined) ||
          (this.currentAgency === null || this.currentAgency === undefined))
        throw new Error('Invalid number of included objects');

      this.status = true;
    }
    catch (e) {
      this.currentSession = null;
      this.currentUser    = null;
      this.currentAgency  = null;
      this.status         = false;
      throw e;
    }
  }

  /**
   * Function of adding current authorization data to cookies
   */
  private addAuthDataToCookie(name: string, data: any) {
    this.cookieService.putObject(name, data,
                                 {expires: this.currentSession.getValidUntil().toISOString()});
  }

  /**
   * Function of loading authorization data from server
   * @param login
   * @param password
   * @returns Observable<Any> observed object with data in JSON-API format
   */
  private dowloadAuthData(login: string, password: string): Observable<any> {
    return this.http.post('http://api.simplify-traffic.com/v1/users/authentication',
                          {'email': login, 'password': password})
    //return this.http.get('../assets/auth.json')
               .timeout(this.requestTimeout)
               .map((res: Response) => res.json())
               .catch(AuthService.authDataHandleError);
  }

  /**
   * Error-handling function for retrieving data from server
   * @param error intercepted exception
   * @returns Observable<Error> observed object with error data
   */
  private static authDataHandleError(error: any): Observable<Error> {
    let errMsg = (error.message) ? error.message :
      error.status ?
        `${error.status} - ${error.statusText} : ${error._body}` : 'Unknow server error';
    return Observable.throw(new Error(errMsg));
  }
}
