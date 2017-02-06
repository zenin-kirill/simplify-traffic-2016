import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
             moduleId: module.id,
             selector: 'app-auth',
             templateUrl: 'auth.component.html',
           })

/**
 *  Компонент, предоставляющий пользователю форму авторизации в сервисе
 */
export class AuthComponent {
  message: string  = 'Welcome to Admin panel!';   // сообщение, выводимое в заголовке на стр. автор.
  login: string    = 'test@test.test';            // логин пользователя
  password: string = 'testpass';                  // пароль поьлзователя

  constructor(private authService: AuthService, private router: Router) {};

  /**
   * Функция, осуществляющая попытку авторизации пользователя.
   */
  tryAuthorize() {
    this.message = 'Authorization...';
    this.authService.getAuthDataWithLogIn(this.login, this.password)
        .subscribe( // подписываемся на выполнение авторизации и ожиданием результат
                    () => {   // если получилось - перенаправляемся на главную или предыдущую страницу
                      this.message = 'Authorization complete!';
                      this.authService.completeLogIn();
                    },

                    (e: any) => { // если не получилось - выводим ошибку
                      this.message = 'Authorization error, try again!';
                      console.log('AuthComponent: ' + e.message);
                      if (e.stack !== undefined) {
                        console.log(e.stack);
                      }
                    });
  }
}
