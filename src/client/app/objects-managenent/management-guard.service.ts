import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth.service";
import { UserType } from "../types/user.type";

@Injectable()
export class ManagementGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let object: string       = route.params['objects'];
    let verificated: boolean = false;

    //for (let type: number in ManagedObjectType) {
    //  if (object === ManagedObjectType[type]) {
    //    verificated = true;
    //  }
    //}
    if (verificated === false)
      return false;

    if (object === 'user' || object === 'agencies') {
      return this.checkAdmin();
    }
    else {
      return true;
    }
  }

  checkAdmin(): boolean {
    if (this.authService.getCurrentUser().getRole() === UserType.administrator) {
      return true;
    }
    else {
      this.router.navigate(['/admin-panel', 'dashboard'])
          .catch((e) => {throw e});
      return false;
    }
  }
}
