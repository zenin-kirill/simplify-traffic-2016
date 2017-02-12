import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";
import { AuthService } from "./auth.service";

/**
 * Сервис, обеспечивающий безопасную навигацию в основном модуле
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Функция, разрешающая/запрещающая переход по следующему маршруту
   * @param route - текущий маршрут
   * @param state - текущее состояние сервиса
   * @return разрешение/запрет на переход
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  /**
   * Функция, разрешающая/запрещающая переходы по дочерним маршрутам
   * @param route - маршрут, по которую требуется произвести переход
   * @param state - текущее состояние сервиса
   * @return разрешение/запрет на переход
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * Функция проверяющая статус сервиса авторизации, которая на основе этого принимает решение о
   * разрешении или запрете перехода
   * @param url маршрут, по которому пользователь тыпается перейти
   * @returns разрешение/запрет на переход
   */
  checkLogin(url: string): boolean {
    if (this.authService.getStatus()) { return true; }
    this.authService.setCurrentUrl(url);
    this.router.navigate(['/auth'])
        .catch((e) => {throw e});
    return false;
  }
}
