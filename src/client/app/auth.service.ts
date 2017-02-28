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
 * Сервис, реализующий функционал авторизации
 */
@Injectable()
export class AuthService {
  private status: boolean    = false;  // статус авторизации
  private currentUrl: string = '';  // адрес страницы, на которой был польз. до авторизации
  private currentSession: Session;
  private currentUser: User;
  private currentAgency: Agency;

  private readonly requestTimeout: number = 10000;  // значение таймаута для выполн. запроса

  /**
   * Конструктор, при инициализации сервиса, пытается считать авторизационные данные из файлов
   * cookie
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
   * Функция, производящая попытку получить авторизационные данные из файлов cookie без ввода
   * данных для входа
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

        this.currentSession.setOnObject(sessionData);
        this.currentUser.setOnObject(userData);
        this.currentAgency.setOnObject(agencyData);

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
   * Функция, производящая попытку выполнить вход при помощи ввода авторизационных данных
   * пользователя
   * @param login логин пользователя
   * @param password пароль пользователя
   * @returns Observable<null> наблюдаемый объект (результат выполнения)
   */
  getAuthDataWithLogIn(login: string, password: string): Observable<null> {
    // подписка на получение давторизац. данных с сервера
    this.dowloadAuthData(login, password).subscribe();
    return this.dowloadAuthData(login, password).map(
      // проверка полученных данных
      (loadedData: any) => {
        if (loadedData === null || loadedData === undefined) {
          throw new Error('Impossible to load auth data from server');
        }

        // попытка разобрать и добавить полученные данные в приложение и файлы cookie
        this.addAuthDataToApp(loadedData);

        // если авторизация удалась, оповещаем компонент авторизации
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
   * Функция, завершающая процесс авторизации, путем перевода пользователя на главную или
   * предыдущую страницу (в зависимости от того, на какую страницу пользователь собирался зайти,
   * если прямиком на страницу авторизации - попадет на главную)
   */
  completeLogIn() {
    if (this.getCurrentUrl() !== '') {
      this.router.navigateByUrl(this.getCurrentUrl());
      this.setCurrentUrl('');
    }
    else {
      this.router.navigate(['/admin-panel', 'dashboard']);
    }
  }

  /**
   * Функция производящая выход из-под текущего пользователя, при этом все данные пользователя
   * удаляются
   */
  logOut() {
    this.status         = false;
    this.currentSession = null;
    this.currentUser    = null;
    this.currentAgency  = null;

    this.cookieService.removeAll();
    this.router.navigate(['/auth']);
  }

  /**
   * Функция разбора и добавления авторизационных данных в приложение
   * @param loadedData загруженные с сервера авторизационные данные
   */
  private addAuthDataToApp(loadedData: any) {
    try {
      if (loadedData['data']['type'] === 'user-sessions') {
        this.currentSession = new Session();
        this.currentSession.setOnObject(loadedData['data'])
        this.addAuthDataToCookie('session', loadedData['data']);
      }
      else {
        throw new Error('Invalid session data');
      }

      // перебор и поиск небходимых включенных объектов
      for (let i = 0; i < loadedData['included'].length; i++) {
        switch (loadedData['included'][i]['type']) {
          case 'users':
            this.currentUser = new User();
            this.currentUser.setOnObject(loadedData['included'][i]);
            this.addAuthDataToCookie('user', loadedData['included'][i]);
            break;
          case 'agencies':
            this.currentAgency = new Agency();
            this.currentAgency.setOnObject(loadedData['included'][i]);
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
   * Функция добавления текущих авторизационных данных в файлы cookie
   */
  private addAuthDataToCookie(name: string, data: any) {
      this.cookieService.putObject(name, data,
                                   {expires: this.currentSession.getValidUntil().toISOString()});
  }

  /**
   * Функция загрузки авторизационных данных с сервера
   * @param login логин пользователя
   * @param password пароль пользователя
   * @returns Observable<Any> наблюдаемый объект с данными в формате JSON-API
   */
  private dowloadAuthData(login: string, password: string): Observable<any> {
    //return this.http.post('http://api.simplify-traffic.com/v1/users/authentication',
    //                     {'email': login, 'password': password})
    return this.http.get('../assets/auth.json')
               .timeout(this.requestTimeout)
               .map((res: Response) => res.json())
               .catch(AuthService.authDataHandleError);
  }

  /**
   * Функция-обработчик ошибок получения данных с сервера
   * @param error перехваченное исключение
   * @returns Observable<Error> объект ошибки, возвращаемый вместо наблюдаемого объекта
   */
  private static authDataHandleError(error: any): Observable<Error> {
    let errMsg = (error.message) ? error.message :
      error.status ?
        `${error.status} - ${error.statusText} : ${error._body}` : 'Unknow server error';
    return Observable.throw(new Error(errMsg));
  }
}
