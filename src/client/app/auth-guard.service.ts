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
 * Service providing safe navigation in main module
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Function that enables/disables directing on following route
   * @param route - the route you want to go to
   * @param state - current route state
   * @return enable/disable directing
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  /**
   * Function that enables/disables directing on child routes
   * @param route - the route you want to go to
   * @param state - current route state
   * @return enable/disable directing
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  /**
   * Function that checks status of authorization service, which, on basis of this,
   * decides whether to enable or disable directing
   * @param url link you want to go to
   * @returns enable/disable directing
   */
  checkLogin(url: string): boolean {
    if (this.authService.getStatus()) { return true; }
    this.authService.setCurrentUrl(url);
    this.router.navigate(['/auth'])
        .catch((e) => {throw e});
    return false;
  }
}
