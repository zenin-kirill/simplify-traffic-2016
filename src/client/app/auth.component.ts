import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from "@angular/router";

@Component({
             moduleId: module.id,
             selector: 'app-auth',
             templateUrl: 'auth.component.html',
           })

export class AuthComponent {
  message: string  = 'Welcome to Admin panel!';
  login: string    = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {};

  tryAuthorize() {
      this.message = 'Authorization...';
      this.authService.getAuthDataWithLogIn(this.login, this.password)
          .subscribe(
            () => {
              this.message = 'Authorization complete!';
              this.authService.completeLogIn();
            },

            (e: any) => {
              this.message = 'Authorization error, try again!';
              console.log(e.message);
            });
  }
}
