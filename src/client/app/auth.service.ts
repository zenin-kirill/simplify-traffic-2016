import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from 'angular2-cookie/core';
import { Agency } from "./types/agency";
import { User } from "./types/user";
import { Session } from "./types/session";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import "rxjs/add/operator/timeout";
import "rxjs/add/observable/throw";


@Injectable()
export class AuthService {
  private status: boolean = false;
  private currentUrl: string = '';
  private currentSession: Session;
  private currentUser: User;
  private currentAgency: Agency;

  private readonly requestTimeout: number = 10000;

  constructor(private http: Http, private cookieService: CookieService, private router: Router) {
    try {
      let sessionData: Object = this.cookieService.getObject('session');
      let userData: Object    = this.cookieService.getObject('user');
      let agencyData: Object  = this.cookieService.getObject('agency');

      this.currentSession = new Session(sessionData);
      this.currentUser    = new User(userData);
      this.currentAgency  = new Agency(agencyData);
      this.status         = true;
    }
    catch (e) {
      this.currentSession = null;
      this.currentUser    = null;
      this.currentAgency  = null;
      this.status         = false;
    }
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

  getAuthDataWithoutLogIn(): AuthData {
    if (this.status === false) {
      try {
        let sessionData: Object = this.cookieService.getObject('session');
        let userData: Object    = this.cookieService.getObject('user');
        let agencyData: Object  = this.cookieService.getObject('agency');

        this.currentSession = new Session(sessionData);
        this.currentUser    = new User(userData);
        this.currentAgency  = new Agency(agencyData);
        this.status         = true;

        return {session: this.currentSession, user: this.currentUser, agency: this.currentAgency};
      }
      catch (e) {
        this.currentSession = null;
        this.currentUser    = null;
        this.currentAgency  = null;
        this.status         = false;
        throw e;
      }
    }
    else {
      return {session: this.currentSession, user: this.currentUser, agency: this.currentAgency};
    }
  }

  getAuthDataWithLogIn(login: string, password: string): Observable<AuthData> {
    this.dowloadAuthData(login, password).catch(AuthService.authDataHandleError).subscribe();
    return this.dowloadAuthData(login, password).map(
      (loadedData: any) => {
      if (loadedData === null || loadedData === undefined) {
        throw new Error('Impossible to load auth data from server');
      }

      try {
        this.addAuthDataToApp(loadedData);
        this.addAuthDataToCookie();
      }
      catch (e) {
        throw e;
      }
      if (this.status === true) {
        return Observable.of<AuthData>({
                                         session: this.currentSession,
                                         user: this.currentUser,
                                         agency: this.currentAgency
                                       });
      }
      else {
        throw new Error('Impossible to complite auth');
      }
    }).catch((e) => {
        throw e;
    });

  }

  completeLogIn() {
      if (this.getCurrentUrl() !== '') {
        this.router.navigateByUrl(this.getCurrentUrl());
        this.setCurrentUrl('');
      }
      else {
        this.router.navigate(['/admin-panel', 'dashboard']);
      }
  }

  logOut(){
    this.status = false;
    this.currentSession = null;
    this.currentUser = null;
    this.currentAgency = null;

    this.cookieService.removeAll();
    this.router.navigate(['/auth']);
  }

  private addAuthDataToApp(loadedData: any) {
    try {
      if (loadedData['data']['type'] !== undefined &&
        loadedData['data']['type'] === 'user-sessions') {
        this.currentSession = new Session(loadedData['data']);
      }
      else {
        throw new Error('Invalid session data');
      }

      for (let i = 0; i < loadedData['included'].length; i++) {
        switch (loadedData['included'][i]['type']) {
          case 'users': this.currentUser = new User(loadedData['included'][i]); break;
          case 'agencies': this.currentAgency = new Agency(loadedData['included'][i]); break;
          default: throw new Error('Invalid included data');
        }
      }

      if ((this.currentUser === null || this.currentUser === undefined) ||
          (this.currentAgency === null || this.currentAgency === undefined))
        throw new Error('Invalid number of included objects');

      this.status         = true;
    }
    catch (e) {
      this.currentSession = null;
      this.currentUser    = null;
      this.currentAgency  = null;
      this.status         = false;
      throw e;
    }
  }

  private addAuthDataToCookie() {
    try {
      this.cookieService.putObject('session', this.currentSession, {expires: this.currentSession.getValidUntil().toISOString()});
      this.cookieService.putObject('user', this.currentUser, {expires: this.currentSession.getValidUntil().toISOString()});
      this.cookieService.putObject('agency', this.currentAgency, {expires: this.currentSession.getValidUntil().toISOString()});
    }
    catch (e) {
      throw e;
    }
  }

  private dowloadAuthData(login: string, password: string): Observable<any> {
    //return this.http.post('http://api.simplify-traffic.com/v1/users/authentication',
    //                     {'email': login, 'password': password})
    return this.http.get('../assets/auth.json')
               .timeout(this.requestTimeout)
               .map((res: Response) => res.json())
               .catch(AuthService.authDataHandleError);
  }

  private static authDataHandleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ?
        `${error.status} - ${error.statusText} : ${error._body}` : 'Unknow server error';
    return Observable.throw(new Error(errMsg));
  }
}

export interface AuthData {
  session: Session;
  user: User;
  agency: Agency;
}
